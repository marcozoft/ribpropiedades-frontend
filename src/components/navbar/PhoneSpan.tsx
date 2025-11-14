import { secondaryFont } from "@/src/config/fonts";

type Props = {
  phone: string;
  className?: string;
}

export const PhoneSpan = ({phone, className}: Props) => {
  return (
    <div className={`mr-8 ${className}`}>
      <span className={`text-background ${secondaryFont.className}`}>{phone}</span>
    </div>
  )
}
