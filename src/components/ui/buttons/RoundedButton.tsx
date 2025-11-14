import { secondaryFont } from "@/src/config/fonts";
import Link from "next/link";

type Props = {
   text: string;
   href: string;
   className?: string;
}


export const RoundedButton = ({ text, href, className }: Props) => {
   return (
      <Link href={href}>
         <div className={`bg-foreground text-background inline-flex py-2 px-5 ${secondaryFont.className} text-sm ${className}`}>
            <span>
               {text}
            </span>
         </div>
      </Link>
   )
}
