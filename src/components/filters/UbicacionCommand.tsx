"use client"

import { ItemFilter, SearchParams } from "@/src/interfaces"
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react"
import { Button, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger } from "@/src/components/shadcn-components";
import { cn } from "@/src/utils";
import { ControllerRenderProps } from "react-hook-form";

interface Item {
  type: string;
  label: string;
  valor: string;
}


type Props = {
  zonas: ItemFilter[],
  emprendimientos: ItemFilter[],
  field: ControllerRenderProps<SearchParams, "zona">,
}

export const UbicacionCommand = ({ zonas, emprendimientos, field }: Props) => {

  const zonasItems: Item[] = zonas.map((itemFilter) => ({
    type: 'zona',
    ...itemFilter
  }));

  const emprendimientosItems: Item[] = emprendimientos.map(({ valor, ...itemFilter}) => ({
    type: 'emprendimiento',
    valor: valor,
    ...itemFilter
  }));

  // const [value, setValue] = useState("");
  const { value, onChange } = field;
  const [open, setOpen] = useState(false)
  const items = [...zonasItems, ...emprendimientosItems];

  

  return (
    
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? items.find((item) => item.valor  === value)?.label
            : "Buscar en zona"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[500px] p-0">
        <Command 
          value={value}
          onValueChange={onChange}
        >
          <CommandInput placeholder="Ubicación" className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup heading={(<p>Zona</p>)}>
              {/* <CommandSeparator /> */}
              {zonasItems.map((item) => (
                <CommandItem
                  key={item.valor}
                  value={item.valor}
                  onSelect={(currentValue) => {
                    // console.log(currentValue);
                    
                    // setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {item.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.valor ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>

            {/* <CommandGroup heading={(<p>Emprendimientos</p>)}> */}
              {/* <CommandSeparator /> */}
              {/* {emprendimientosItems.map((item) => ( */}
                {/* <CommandItem */}
                  {/* key={item.valor} */}
                  {/* value={item.valor} */}
                  {/* onSelect={(currentValue) => { */}
                    {/* console.log(currentValue); */}

                    {/* setValue(currentValue === value ? "" : currentValue) */}
                    {/* setOpen(false) */}
                  {/* }} */}
                {/* > */}
                  {/* {item.label} */}
                  {/* <Check */}
                    {/* className={cn( */}
                      {/* "ml-auto", */}
                      {/* value === item.valor ? "opacity-100" : "opacity-0" */}
                    {/* )} */}
                  {/* /> */}
                {/* </CommandItem> */}
              {/* ))} */}
            {/* </CommandGroup> */}


          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
      
  )
}
