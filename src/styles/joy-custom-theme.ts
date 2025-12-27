import { extendTheme } from "@mui/joy";
import { primaryFont } from "../config/fonts";

export const ribTheme = extendTheme({
   fontFamily: {
      display: `${primaryFont.style.fontFamily}`,
      body: `${primaryFont.style.fontFamily}`,
   },
   components: {
      JoyAutocomplete: {
         styleOverrides: {
            root: {
               backgroundColor: 'var(--background)',
               width: '100%',
               height: '100%',
            }
         }
      },
      JoySelect: {
         styleOverrides: {
            root: {
               backgroundColor: 'var(--background)',
               width: '100%',
               height: '100%',
            }
         }
      }
   }
});