import Image from "next/image"

export const Filters = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Image src={'/screenshot-filters.png'} height={131} width={1170} alt="buscador" />
    </div>
  )
}
