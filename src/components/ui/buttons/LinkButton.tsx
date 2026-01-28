import Link from "next/link";

type Props = {
   text: string;
   href: string;
   className?: string;
}


export const LinkButton = ({ text, href, className }: Props) => {
   return (
      <Link href={href}>
         <div className={`bg-foreground text-background font-medium py-2 px-5 text-base ${className}`}>
            <span>
               {text}
            </span>
         </div>
      </Link>
   )
}
