"use client";

import { ItemFilter, SearchParams } from "@/src/interfaces";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/shadcn-components";
import { cn } from "@/src/utils";
import { UseFormSetValue } from "react-hook-form";

interface Item {
  type: string;
  label: string;
  valor: string;
}

type Props = {
  zonas: ItemFilter[];
  emprendimientos: ItemFilter[];
  setValue: UseFormSetValue<SearchParams>;
  zonaValue: string;
  emprendimientoValue: string;
  disabled?: boolean;
};

export const UbicacionCommand = ({
  zonas,
  emprendimientos,
  setValue,
  zonaValue,
  emprendimientoValue,
  disabled = false,
}: Props) => {
  const zonasItems: Item[] = zonas.map((itemFilter) => ({
    type: "zona",
    ...itemFilter,
  }));

  const emprendimientosItems: Item[] = emprendimientos.map(
    ({ valor, ...itemFilter }) => ({
      type: "emprendimiento",
      valor: valor,
      ...itemFilter,
    }),
  );

  const [open, setOpen] = useState(false);
  const items = [...zonasItems, ...emprendimientosItems];

  // Determinar el valor actual mostrado
  const currentValue = zonaValue || emprendimientoValue;
  const currentItem = items.find((item) => item.valor === currentValue);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          <span className="truncate">{currentValue ? currentItem?.label : "Ubicación"}</span>
          {currentValue && (
            <span
              className="ml-auto mr-1 shrink-0 opacity-50 hover:opacity-100"
              onPointerDown={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setValue("zona", "");
                setValue("emprendimiento", "");
              }}
            >
              <X className="size-4" />
            </span>
          )}
          <ChevronsUpDown className="shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-125 p-0">
        <Command>
          <div className="relative">
            <CommandInput placeholder="Buscar ubicación" />
            {currentValue && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setValue("zona", "");
                  setValue("emprendimiento", "");
                  setOpen(false);
                }}
              >
                <X className="size-4 opacity-50 hover:opacity-100" />
              </button>
            )}
          </div>
          <CommandList>
            <CommandGroup heading={<p>Zona</p>}>
              {/* <CommandSeparator /> */}
              {zonasItems.map((item) => (
                <CommandItem
                  key={item.valor}
                  value={item.valor}
                  keywords={[item.label]}
                  onSelect={(currentValue) => {
                    setValue("zona", currentValue);
                    setValue("emprendimiento", "");
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      zonaValue === item.valor ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>

            <CommandGroup heading={<p>Emprendimientos</p>}>
              {emprendimientosItems.map((item) => (
                <CommandItem
                  key={item.valor}
                  value={item.valor}
                  keywords={[item.label]}
                  onSelect={(currentValue) => {
                    setValue("emprendimiento", currentValue);
                    setValue("zona", "");
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      emprendimientoValue === item.valor
                        ? "opacity-100"
                        : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
