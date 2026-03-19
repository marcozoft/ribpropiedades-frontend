"use client";

import { Filter } from "lucide-react";
import {
  Button,
  Checkbox,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
} from "../shadcn-components";
import { useState } from "react";
import { Control } from "react-hook-form";
import { ItemFilter, SearchParams } from "@/src/interfaces";

type Props = {
  control: Control<SearchParams>;
  disabled?: boolean;
  dormitorios: ItemFilter[];
  con_piscinaItem: ItemFilter;
  con_unaPlantaItem: ItemFilter;
  con_dos_cocherasItem: ItemFilter;
  con_dormitorio_suiteItem: ItemFilter;
  onSubmit: () => void;
};

// Filtros avanzados
export function FiltersPopover({
  control,
  disabled,
  onSubmit,
  dormitorios,
  con_piscinaItem,
  con_unaPlantaItem,
  con_dos_cocherasItem,
  con_dormitorio_suiteItem,
}: Props) {
  const [open, setOpen] = useState(false);

  const onClickResultados = () => {
    onSubmit();
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button variant="search" size="icon">
          <Filter className="size-6" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Filtros avanzados</h4>
            <p className="text-muted-foreground text-sm">
              Seleccione uno o más filtros
            </p>
          </div>

          {/* Dormitorios */}
          <FormField
            control={control}
            name="dormitorios"
            render={({ field }) => (
              <FormItem className="grid grid-cols-3 items-center gap-4">
                <FormLabel className="font-normal">Dormitorios</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={disabled}
                  >
                    <SelectTrigger className="col-span-2 w-full">
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {dormitorios.map((item) => (
                          <SelectItem key={item.valor} value={item.valor}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />

          {/* Codigo */}
          {/* <div className="col-span-1 flex justify-center md:col-span-4"> */}
          <FormField
            control={control}
            name="codigo"
            render={({ field }) => (
              <FormItem className="grid grid-cols-3 items-center gap-4">
                <FormLabel className="font-normal">Código</FormLabel>
                <FormControl className="col-span-2">
                  <Input
                    name={field.name}
                    value={field.value ?? ""}
                    placeholder="Código"
                    onChange={field.onChange}
                    disabled={disabled}
                    className="w-full border-foreground"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/* </div> */}

          {/* Checkbox */}
          <div className="space-y-2">
            <p className="text-muted-foreground text-sm">Caractererísticas</p>
            {/* Checkbox 1: Piscina */}
            <FormField
              control={control}
              name="con_piscina"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "1"}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "1" : "")
                      }
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-sm font-normal">
                    {con_piscinaItem.label}
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Checkbox 2: 2 o mas plantas */}
            <FormField
              control={control}
              name="con_una_planta"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "1"}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "1" : "")
                      }
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-sm font-normal">
                    {con_unaPlantaItem.label}
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Checkbox 3: Cocheras */}
            <FormField
              control={control}
              name="con_dos_cocheras"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "1"}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "1" : "")
                      }
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-sm font-normal">
                    {con_dos_cocherasItem.label}
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Checkbox 3: Suite */}
            <FormField
              control={control}
              name="con_dormitorio_suite"
              render={({ field }) => (
                <FormItem className="flex items-center space-y-0 space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value === "1"}
                      onCheckedChange={(checked) =>
                        field.onChange(checked ? "1" : "")
                      }
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormLabel className="cursor-pointer text-sm font-normal">
                    {con_dormitorio_suiteItem.label}
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>

          <Button variant="search" onClick={onClickResultados}>
            VER RESULTADOS
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
