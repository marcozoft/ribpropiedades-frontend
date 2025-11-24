import Image from "next/image"
import Link from 'next/link'

export const SeccionBuscador = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <Link href={'/propiedades'}>
        <Image src={'/screenshot-filters.png'} height={131} width={1170} alt="buscador" />
      </Link>

      {/* <Form action="/search">
        <input name="query" />
        <button type="submit">Submit</button>
      </Form> */}


    </section>
  )
}
