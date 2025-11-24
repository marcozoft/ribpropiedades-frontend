'use client';

import Image from 'next/image';

export const SeccionMapa = () => {
  const lat = -34.441917;
  const lon = -58.865804;
  
  return (
    <section className="relative h-[500px] md:h-[600px]">
      <div className="absolute inset-0">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.5!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI2JzMwLjkiUyA1OMKwNTEnNTYuOSJX!5e0!3m2!1ses!2sar!4v1637087654321!5m2!1ses!2sar&z=16`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Ubicación RIB Propiedades"
        ></iframe>
      </div>
      
      {/* Marcador de ubicación */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10 pointer-events-none">
        <Image
          src="/images/contacto/icon-location.png"
          alt="Ubicación RIB Propiedades"
          width={60}
          height={80}
          className="drop-shadow-lg"
        />
      </div>
      
      {/* Botón "¿Cómo llegar?" */}
      <div className="absolute bottom-6 left-6 z-10">
        <a
          href={`https://www.google.com/maps/place/${lat},${lon}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-foreground text-white px-6 py-3 rounded shadow-lg hover:bg-foreground/90 transition-all duration-300 font-semibold"
        >
          ¿Cómo llegar?
        </a>
      </div>
    </section>
  );
};
