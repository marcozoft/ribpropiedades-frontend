"use client"

import { primaryFont } from "@/src/config/fonts";
import { ItemFilter } from "@/src/interfaces"
import { ribTheme } from "@/src/styles/joy-custom-theme";
import { Autocomplete, AutocompleteOption, CssVarsProvider, extendTheme, ListItemContent, ListItemDecorator, ListSubheader } from "@mui/joy"
import { SyntheticEvent, useState } from "react"

interface Item {
  type: string;
  label: string;
  valor: number;
}


type Props = {
  localidades: ItemFilter[],
  emprendimientos: ItemFilter[]
}

export const UbicacionAutocomplete = ({ localidades, emprendimientos }: Props) => {

  const localidadesItems: Item[] = localidades.map((itemFilter) => ({
    type: 'localidades',
    ...itemFilter
  }));

  const emprendimientosItems: Item[] = emprendimientos.map((itemFilter) => ({
    type: 'emprendimientos',
    ...itemFilter
  }));

  const [value, setValue] = useState(localidadesItems[0]);

  const onChange = (_event: SyntheticEvent<Element, Event>, value: Item | null) => {

    console.log({ value });

  }


  return (
    <CssVarsProvider theme={ribTheme}>

      <Autocomplete
        value={value}
        // open={true}
        placeholder="Localidad / Emprendimiento"
        noOptionsText="Localidad / Emprendimiento no encontrado"
        disableClearable={true}
        //   disableClearable={disableClearable}
        onChange={(event, value) => onChange(event, value)}
        options={
          [...localidadesItems, ...emprendimientosItems]
            .sort((a, b) => a.label.localeCompare(b.label))
            .sort((a, b) => -a.type.localeCompare(b.type))
        }
        // renderOption={(props, option) => (
        //   <AutocompleteOption {...props} key={option.valor}>
        //     <ListItemContent>
        //       {option.label}
        //     </ListItemContent>
        //   </AutocompleteOption>
        // )}
        groupBy={(option) => option.type}
        renderGroup={(params) => (
          <li key={params.key}>
            <ListSubheader sticky sx={{
              bgcolor: 'var(--foreground)',
              color: 'white'
            }}>{params.group}</ListSubheader>
            <ul>{params.children}</ul>
          </li>
        )}
        // getOptionLabel={(option) => option.label}
        isOptionEqualToValue={(option, value) => option.valor === value.valor}
      />
    </CssVarsProvider>
  )
}
