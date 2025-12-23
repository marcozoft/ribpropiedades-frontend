import { LinkButton, YouTubeVideoCard } from '@/src/components';
import { getHomeContenido } from '@/src/requests';
import { getYouTubeId } from '@/src/utils/media-src';

export const SeccionNosotros = async () => {

  const { video_nosotros } =  (await getHomeContenido()).contenido

  const youtubId = getYouTubeId(video_nosotros);

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
          <LinkButton text='VER MÁS' href='/quienes-somos'/>
        </div>
      </div>
      
      <div className='flex justify-center max-w-6xl mx-auto'>
        <div className="rounded-xs">
          <YouTubeVideoCard width={720} youTubeId={youtubId!}/>
        </div>
      </div>
    </section>
  )
}
