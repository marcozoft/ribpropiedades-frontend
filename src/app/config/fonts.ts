import { Nunito, Poppins } from "next/font/google";

export const primaryFont = Poppins({ 
  weight: [
    '100', '200', '300', '400', '500', '600', '700', '800', '900'
  ], 
  subsets: ['latin'] 
});

export const secondaryFont = Nunito({
  subsets: ['latin']
});