import { secondaryFont } from "@/src/app/config/fonts";
import Link from "next/link";

type Props = {
   text: string;
   href: string;
   className?: string;
}


export const RoundedButton = ({ text, href, className }: Props) => {
   return (
      <Link href={href}>
         <div className={`rounded-full bg-foreground text-background inline-flex py-2 px-5 ${secondaryFont.className} text-xs ${className}`}>
            <span>
               {text}
            </span>
         </div>
      </Link>
   )
}
