import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "../shadcn-components/ui/card"
import { Button } from "../shadcn-components"
import Link from "next/link"

export const SinResultados = () => {
  return (

    <div className="pt-8 pb-20">
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
        <Image
          src="/images/quienes-somos/servicios/seriedad.jpg"
          alt="Photo by mymind on Unsplash"
          title="Photo by mymind on Unsplash"
          width={380}
          height={214}
          className="relative z-20 aspect-video w-full object-cover grayscale"
        />
        <CardHeader>
          <CardTitle>No encontramos resultados</CardTitle>
          <CardDescription>
            Intentá otra búsqueda o contactanos
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Link href="/propiedades">
            <Button variant="search" className="w-full" >
              LIMPIAR BÚSQUEDA
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )  
}
