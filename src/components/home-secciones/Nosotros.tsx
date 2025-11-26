import Image from 'next/image'
import React from 'react'
import { RoundedButton } from '../ui'
import { YouTubeVideoCard } from '../propiedades/detalle-full-page'

export const Nosotros = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 py-10'>
      <div className='grid grid-cols md:grid-cols-2 md:gap-10 my-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-black'>
          <span className='font-bold'>RIB, </span>haciendo la casa de tus sueños <span className='text-foreground font-bold'>una realidad.</span>
        </h1>
        <div className=''>
          <p className='text-black mb-2'>Nuestro servicio es personalizado, atendemos a cada cliente con profesionalismo, entendiendo sus necesidades 
            y dándole soluciones a su medida.
          </p>
          <RoundedButton text='VER MÁS' href='/quienes-somos'/>
        </div>
      </div>
      {/* <Image src={'/screenshot-video-nosotros.png'} width={1920} height={560} alt="Hacemos tu proyecto realidad" /> */}
      
      <div className='flex justify-center max-w-6xl mx-auto'>
        <div className="">
          <YouTubeVideoCard width={720} youTubeId='QOaBMryzEK4'/>
        </div>
      </div>
    </section>
  )
}
