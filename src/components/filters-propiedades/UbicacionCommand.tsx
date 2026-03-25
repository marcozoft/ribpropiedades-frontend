"use client";

import { ItemFilter, SearchParams } from "@/src/interfaces";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";
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
  const [searchEnabled, setSearchEnabled] = useState(false);
  const items = [...zonasItems, ...emprendimientosItems];

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) setSearchEnabled(false);
  };

  // Determinar el valor actual mostrado
  const currentValue = zonaValue || emprendimientoValue;
  const currentItem = items.find((item) => item.valor === currentValue);

  return (
    <>
      {/* Mobile blur backdrop */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden" onClick={() => handleOpenChange(false)} />
      )}
      <Popover open={open} onOpenChange={handleOpenChange}>
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
      <PopoverContent className="left-0 w-screen p-0 md:w-72 md:relative" side="bottom" avoidCollisions={false}>
        <Command className="w-screen md:w-72">
          <div className="relative">
            {searchEnabled
              ? <CommandInput placeholder="Buscar ubicación" autoFocus />
              : <button
                  type="button"
                  className="flex w-full items-center gap-2 border-b px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => setSearchEnabled(true)}
                >
                  <Search className="size-4 shrink-0" />
                  <span>Buscar ubicación</span>
                </button>
            }
            {currentValue && !searchEnabled && (
              <button
                type="button"
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
    </>
  );
};
