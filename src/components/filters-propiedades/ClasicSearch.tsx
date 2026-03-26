"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import {
  Button,
  FiltersPopover,
  Form,
  SortPopover,
  UbicacionCommand,
} from "@/src/components";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn-components";
import { filterSearchParams, cn } from "@/src/utils";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { useForm } from "react-hook-form";
import { Loader2, Search, Trash2, X, Check, ChevronsUpDown } from "lucide-react";
import {
  con_dormitorio_suiteItem,
  con_dos_cocherasItem,
  con_unaPlantaItem,
  con_piscinaItem,
  ordenes,
} from "@/src/constants/form-constants";

type Props = {
  allControls?: boolean;
  zonas: ItemFilter[];
  operaciones: ItemFilter[];
  emprendimientos: ItemFilter[];
  dormitorios: ItemFilter[];
  ambientes?: ItemFilter[];
  tipos_inmueble: ItemFilter[];
  filterValues: SearchParams;
  isExpanded?: boolean;
  onToggleExpand?: (isExpanded: boolean) => void;
  onInteraction?: () => void;
};

export const ClasicSearch = ({
  allControls,
  zonas,
  emprendimientos,
  tipos_inmueble,
  operaciones,
  filterValues,
  dormitorios,
  isExpanded = true,
  onToggleExpand,
  onInteraction,
}: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<SearchParams>();
  const values = form.watch();
  const [openOperacion, setOpenOperacion] = useState(false);
  const [openTipoInmueble, setOpenTipoInmueble] = useState(false);

  /**
   *  Actualizar formulario cuando cambian los filterValues
   *  (ej: navegación con botón atrás)
   */
  useEffect(() => {
    form.reset({
      zona: filterValues.zona ?? "",
      emprendimiento: filterValues.emprendimiento ?? "",
      operacion: filterValues.operacion ?? "",
      tipo_inmueble: filterValues.tipo_inmueble ?? "",
      orden: filterValues.orden ?? "",
      dormitorios: filterValues.dormitorios ?? "",
      codigo: filterValues.codigo ?? "",
      con_piscina: filterValues.con_piscina ?? "",
      con_una_planta: filterValues.con_una_planta ?? "",
      con_dormitorio_suite: filterValues.con_dormitorio_suite ?? "",
    });
  }, [filterValues, form]);

  /**
   * Enviar formulario
   * Toma los datos del hook
   */
  const onSubmit = (valuesForm?: SearchParams) => {
    const params = filterSearchParams(values);

    startTransition(() => {
      router.push(`/propiedades?${params}`);
      if (onToggleExpand) {
        onToggleExpand(false);
      }
    });
  };

  /**
   * Limpiar busqueda y recargar
   */
  const onClickClear = () => {
    startTransition(() => {
      router.push("/propiedades");
    });
  };

  const handleMainButtonClick = (e: React.MouseEvent) => {
    if (!isExpanded && onToggleExpand) {
      e.preventDefault();
      onToggleExpand(true);
    }
    // Si esta expandido, hace submit normal (type="submit")
  };

  return (
    <Form {...form}>
      {/* Activar para debug */}
      {/* <pre className="text-xs bg-muted p-2 rounded">
        {JSON.stringify(values, null, 2)}
      </pre> */}

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        onClick={onInteraction}
        className="animate-in fade-in fade-out flex grow flex-col gap-4 md:flex-row"
      >
        {/* Selects grid*/}
        <div className={`grid grow grid-cols-1 items-center gap-4 md:grid-cols-12 ${!isExpanded ? "hidden md:grid" : ""}`}
        >
          {/* Zona / Emprendimiento */}
          <div className={`col-span-1 flex justify-center md:col-span-4`}>
            <UbicacionCommand
              zonas={zonas}
              emprendimientos={emprendimientos}
              setValue={form.setValue}
              zonaValue={values.zona!}
              emprendimientoValue={values.emprendimiento!}
              disabled={isPending}
            />
          </div>

          {/* operacion */}
          <div className="col-span-1 flex justify-center md:col-span-4">
            {openOperacion && (
              <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setOpenOperacion(false)} />
            )}
            <Popover open={openOperacion} onOpenChange={setOpenOperacion}>
              <PopoverTrigger asChild disabled={isPending}>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openOperacion}
                  className="w-full justify-between"
                >
                  <span className="truncate">
                    {values.operacion
                      ? operaciones.find((item) => item.valor === values.operacion)?.label
                      : "Todas las operaciones"}
                  </span>
                  {values.operacion && (
                    <span
                      className="ml-auto mr-1 shrink-0 opacity-50 hover:opacity-100"
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        form.setValue("operacion", "");
                      }}
                    >
                      <X className="size-4" />
                    </span>
                  )}
                  <ChevronsUpDown className="shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="left-0 w-screen p-0 md:w-64 md:relative" side="bottom" avoidCollisions={false}>
                <Command className="w-screen md:w-64">
                  {/* <CommandInput placeholder="Buscar operación" /> */}
                  <CommandList>
                    <CommandGroup>
                      {operaciones.map((item) => (
                        <CommandItem
                          key={item.valor}
                          value={item.valor}
                          keywords={[item.label]}
                          onSelect={(val) => {
                            form.setValue("operacion", val);
                            setOpenOperacion(false);
                          }}
                        >
                          {item.label}
                          <Check className={cn("ml-auto", values.operacion === item.valor ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* tipo de inmueble */}
          <div className="col-span-1 flex justify-center md:col-span-4">
            {openTipoInmueble && (
              <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => setOpenTipoInmueble(false)} />
            )}
            <Popover open={openTipoInmueble} onOpenChange={setOpenTipoInmueble}>
              <PopoverTrigger asChild disabled={isPending}>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openTipoInmueble}
                  className="w-full justify-between"
                >
                  <span className="truncate">
                    {values.tipo_inmueble
                      ? tipos_inmueble.find((item) => item.valor === values.tipo_inmueble)?.label
                      : "Tipo de inmueble"}
                  </span>
                  {values.tipo_inmueble && (
                    <span
                      className="ml-auto mr-1 shrink-0 opacity-50 hover:opacity-100"
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        form.setValue("tipo_inmueble", "");
                      }}
                    >
                      <X className="size-4" />
                    </span>
                  )}
                  <ChevronsUpDown className="shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="left-0 w-screen p-0 md:w-64 md:relative" side="bottom" avoidCollisions={false}>
                <Command className="w-screen md:w-64">
                  {/* <CommandInput placeholder="Buscar tipo de inmueble" /> */}
                  <CommandList>
                    <CommandGroup>
                      {tipos_inmueble.map((item) => (
                        <CommandItem
                          key={item.valor}
                          value={item.valor}
                          keywords={[item.label]}
                          onSelect={(val) => {
                            form.setValue("tipo_inmueble", val);
                            setOpenTipoInmueble(false);
                          }}
                        >
                          {item.label}
                          <Check className={cn("ml-auto", values.tipo_inmueble === item.valor ? "opacity-100" : "opacity-0")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Botones lupa */}
        <div
          className={`flex ${!isExpanded ? "flex-row" : "flex-col"} w-full items-center justify-center gap-2 md:w-auto md:flex-row ${!allControls ? "md:col-span-2" : "md:col-span-3"}`}
        >
          {/* Boton Principal (BUSCADOR o icon Lupa) */}
          <div
            className={`${!isExpanded ? "grow md:grow-0" : "w-full"} md:w-auto`}
          >
            <Button
              variant="search"
              type={isExpanded ? "submit" : "button"}
              disabled={isPending}
              onClick={handleMainButtonClick}
              className={`md:hidden h-10 w-full md:w-12 md:p-0 ${!isExpanded && allControls ? "px-4 text-sm tracking-widest uppercase" : ""}`}
            >
              {isPending ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <div className="flex items-center justify-center gap-2">
                  {/* Texto solo visible en mobile */}
                  <span className="font-semibold md:hidden">
                    {!isExpanded ? "BUSCADOR" : "BUSCAR"}
                  </span>
                  <Search className="size-5" />
                </div>
              )}
            </Button>
            
            <Button
              variant="search"
              type="submit" 
              disabled={isPending}
              className={`hidden md:flex h-10 w-full md:w-12 md:p-0 ${!isExpanded && allControls ? "px-4 text-sm tracking-widest uppercase" : ""}`}
            >
              {isPending ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <div className="flex items-center justify-center gap-2">
                  {/* Texto solo visible en mobile */}
                  <span className="font-semibold md:hidden">
                    {!isExpanded ? "BUSCADOR" : "BUSCAR"}
                  </span>
                  <Search className="size-5" />
                </div>
              )}
            </Button>

          </div>

          {/* Controles opcionales: visibles si allControls es true */}
          {/* En modo colapsado, tambien se muestran */}
          {allControls && (
            <div
              className={`flex ${!isExpanded ? "w-auto shrink-0" : "w-full md:w-auto"} justify-center gap-2`}
            >
              {/* filtros avanzados */}
              <FiltersPopover
                disabled={isPending}
                control={form.control}
                onSubmit={onSubmit}
                dormitorios={dormitorios}
                con_piscinaItem={con_piscinaItem}
                con_unaPlantaItem={con_unaPlantaItem}
                con_dos_cocherasItem={con_dos_cocherasItem}
                con_dormitorio_suiteItem={con_dormitorio_suiteItem}
              />

              {/* Ordenamiento */}
              <SortPopover
                ordenes={ordenes}
                disabled={isPending}
                control={form.control}
                onSubmit={onSubmit}
              />

              {/* Limpiar busqueda */}
              <Button
                variant="search"
                size="icon"
                onClick={onClickClear}
                disabled={isPending}
              >
                <Trash2 className="size-6" />
              </Button>
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};
