import { SearchParams } from "../interfaces";

export const filterSearchParams = (values: SearchParams): string => {
   return new URLSearchParams(
      Object.entries(values)
         .filter(([_, v]) => v !== "" && v != null)
         .map(([k, v]) => [k, String(v)])
   ).toString();;
}
