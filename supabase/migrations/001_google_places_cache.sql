-- ============================================================
-- Migración: Cache de Google Places con PostGIS
-- ============================================================
-- Requiere que la extensión PostGIS esté habilitada en Supabase.
-- Ir a: Dashboard > Database > Extensions > postgis → Enable
-- ============================================================

-- 1. Habilitar PostGIS
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Tabla de cache
CREATE TABLE IF NOT EXISTS google_places_cache (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  search_location       GEOGRAPHY(POINT, 4326) NOT NULL,
  radius                FLOAT       NOT NULL,
  included_primary_types TEXT[]     NOT NULL DEFAULT '{}',
  excluded_primary_types TEXT[]     NOT NULL DEFAULT '{}',
  rank_preference       TEXT        NOT NULL,
  response              JSONB       NOT NULL,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Habilitar RLS: bloquea acceso público vía Data API.
--    El service_role key (usado en el servidor Next.js) bypasea RLS y sigue funcionando.
ALTER TABLE google_places_cache ENABLE ROW LEVEL SECURITY;

-- Policy explícita para service_role (belt-and-suspenders)
CREATE POLICY "service_role_full_access"
  ON google_places_cache
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- 4. Índice espacial para búsquedas rápidas por proximidad
CREATE INDEX IF NOT EXISTS google_places_cache_location_idx
  ON google_places_cache
  USING GIST(search_location);

-- 5. Función RPC: busca una entrada cacheada cercana al punto solicitado
--    Retorna el JSONB de `response` si existe, NULL si no.
CREATE OR REPLACE FUNCTION find_nearby_places_cache(
  p_lat              FLOAT,
  p_lng              FLOAT,
  p_radius           FLOAT,
  p_included_types   TEXT[],
  p_excluded_types   TEXT[],
  p_rank_preference  TEXT,
  p_tolerance        FLOAT DEFAULT 50.0
)
RETURNS JSONB
LANGUAGE plpgsql
AS $$
DECLARE
  v_response JSONB;
BEGIN
  SELECT response
  INTO   v_response
  FROM   google_places_cache
  WHERE  ST_DWithin(
           search_location,
           ST_Point(p_lng, p_lat)::geography,
           p_tolerance
         )
    AND  radius              = p_radius
    AND  included_primary_types = p_included_types
    AND  excluded_primary_types = p_excluded_types
    AND  rank_preference     = p_rank_preference
  ORDER BY created_at DESC
  LIMIT 1;

  RETURN v_response;
END;
$$;
