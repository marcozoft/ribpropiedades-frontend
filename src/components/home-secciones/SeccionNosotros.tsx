import { LinkButton, VideoPopupCardImage } from '@/src/components';
import { getHomeContenido } from '@/src/requests';
import { getYouTubeId } from '@/src/utils/media-src';


export const SeccionNosotros = async () => {

  const { video_nosotros } =  (await getHomeContenido()).contenido

  const youtubeId = getYouTubeId(video_nosotros);

  return (
    <section className='max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 my-4'>
        <div className='col-span-1'>
          <span className="bg-foreground text-white px-4 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Nosotros
          </span>
          <h1 className='text-2xl sm:text-3xl md:text-4xl text-black mt-4'>
            <span className='font-bold'>RIB, </span>haciendo el <br /> proyecto de tus sueños <br /><span className='text-foreground font-bold'>una realidad.</span>
          </h1>
          <p className='text-sm sm:text-base text-black mt-4 md:pr-8'>Nuestro servicio es personalizado, atendemos a cada cliente con profesionalismo, entendiendo sus necesidades
            y dándole soluciones a su medida.
          </p>
          <LinkButton href='/quienes-somos' text='VER MÁS' className='my-4'/>
        </div>
        <div className='col-span-1'>
          <VideoPopupCardImage youtubeId={youtubeId!} imageSrc='/images/home-video-nosotros.jpg' />
        </div>
      </div>
    </section>
  )
}
