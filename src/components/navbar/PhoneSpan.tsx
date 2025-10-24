import { secondaryFont } from "@/src/app/config/fonts";

type Props = {
  phone: string;
}

export const PhoneSpan = ({phone}: Props) => {
  return (
    <div className="mr-8">
      <span className={`text-background ${secondaryFont.className}`}>{phone}</span>
    </div>
  )
}
