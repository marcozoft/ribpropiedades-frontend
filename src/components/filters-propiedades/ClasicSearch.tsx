"use client";

import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import {
  Button,
  FiltersPopover,
  Form,
  FormField,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SortPopover,
  UbicacionCommand,
} from "@/src/components";
import { filterSearchParams } from "@/src/utils";
import { ItemFilter, SearchParams } from "@/src/interfaces";
import { useForm } from "react-hook-form";
import { ArrowBigDown, Loader2, Search, Trash2 } from "lucide-react";
import {
  ambientesItemFilters,
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
}: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const form = useForm<SearchParams>();
  const values = form.watch();

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
      ambientes: filterValues.ambientes ?? "",
      dormitorios: filterValues.dormitorios ?? "",
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
         </pre>  */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="animate-in fade-in fade-out flex grow flex-col gap-4 md:flex-row"
      >
        {/* Selects grid*/}
        <div
          className={`grid grow grid-cols-1 items-center gap-4 md:grid-cols-12 ${!isExpanded ? "hidden md:grid" : ""}`}
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
            <FormField
              control={form.control}
              name="operacion"
              render={({ field }) => (
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isPending}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Todas las operaciones" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {operaciones.map((item) => (
                        <SelectItem key={item.valor} value={item.valor}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          {/* tipo de inmueble */}
          <div className="col-span-1 flex justify-center md:col-span-4">
            <FormField
              control={form.control}
              name="tipo_inmueble"
              render={({ field }) => (
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                  disabled={isPending}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de inmueble" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {tipos_inmueble.map((item) => (
                        <SelectItem key={item.valor} value={item.valor}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
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
              {/* filtros */}
              <FiltersPopover
                disabled={isPending}
                control={form.control}
                onSubmit={onSubmit}
                dormitorios={dormitorios}
                ambientes={ambientesItemFilters}
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
