import Image from "next/image"

export const Filters = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Image src={'/screenshot-filters.png'} height={131} width={1170} alt="buscador" />
    </section>
  )
}
