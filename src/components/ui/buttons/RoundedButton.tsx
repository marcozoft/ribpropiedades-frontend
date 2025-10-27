import { secondaryFont } from "@/src/app/config/fonts";
import Link from "next/link";

type Props = {
   text: string;
   href: string;
}


export const RoundedButton = ({text, href}:Props) => {
   return (
      <button className={`rounded-full bg-foreground text-background py-2 px-5 ${secondaryFont.className} text-xs`}>
         <Link href={href}>
            {text}
         </Link>
      </button>
   )
}
