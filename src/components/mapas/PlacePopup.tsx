import { primaryFont, secondaryFont } from "@/src/config/fonts";

type Props = {
   displayName: string;
   formatedAddress: string;
   primaryType: string;
   types: string[];
}

export const PlacePopup = ({displayName, formatedAddress, primaryType}: Props) => {
   return (
      <div className={`p-2 ${primaryFont.className}`}>
         <h3 className="font-bold text-sm">{displayName}</h3>
         <p className="text-xs text-foreground mt-1">{primaryType}</p>
         <p className={`text-xs text-gray-600 mt-1 ${secondaryFont.className}`}>{formatedAddress}</p>
         {/* <p className="text-xs">{types}</p> */}
      </div>
   )
}
