import Image from 'next/image'
import Link from 'next/link'
import { secondaryFont } from '@/src/config/fonts'
import '@/src/styles/icomoon/icomoon.css';
import { TELEFONO_NUMERO, WHATSAPP_LINK } from '@/src/constants/constants';
import { RoundedButton, SocialNetworks } from '../ui';


export const Footer = () => {
   return (
      <footer className="bg-foreground">

         <div className='hidden xl:flex xl:justify-center bg-amber-400 max-w-6xl mx-auto'>
            <div>
               <p className='font-extrabold text-4xl text-foreground'>¿Necesitas ayuda para Vender o Alquilar?</p>
               <p className='text-foreground text-lg'>Consutános para asesorarte sobre Tasaciones.</p>
            </div>
               <div>
                  <RoundedButton text='WhatsApp' href={WHATSAPP_LINK}></RoundedButton>
               </div>
         </div>

         <div className="flex max-w-6xl mx-auto py-15 px-5 text-white justify-between" >
            {/* Imagen */}
            <div>
               <Image src={'/images/footer-logo.png'} width={133} height={260} alt='RIB Logo'></Image>
            </div>

            {/* Menu */}
            <div className='flex flex-col justify-between'>
               <p className='font-bold text-lg'>Menú</p>
               <Link className='text-sm hover:text-background' href={'/quienes-somos'}>Quienes somos</Link>
               <Link className='text-sm hover:text-background' href={'/propiedades'}>Propiedades</Link>
               <Link className='text-sm hover:text-background' href={'/emprendimientos'}>Emprendimientos</Link>
               <Link className='text-sm hover:text-background' href={'/tasaciones'}>Tasaciones</Link>
               <Link className='text-sm hover:text-background' href={'/servicios'}>Servicios</Link>
               <Link className='text-sm hover:text-background' href={'/contacto'}>Contacto</Link>
            </div>

            {/* Ubicacion y contacto */}
            <div className='flex flex-col justify-between'>
               <i className="icon-placeholder text-white text-3xl" />
               <div className="text-sm font-light">
                  {/* <p className='line-clamp-5'>Edificio Bureau Pilar Norte Of. 255, Piso 2 Ruta Panamericana Km 49.5 Pilar Buenos Aires</p> */}
                  <p>Edificio Bureau Pilar Norte</p> 
                  <p>Of. 255, Piso 2</p>
                  <p>Ruta Panamericana</p>
                  <p>Km 49.5 Pilar</p>
                  <p>Buenos Aires</p>
               </div>

               <div className='mt-6'>
                  <i className="icon-call text-white text-3xl" />
                  <p className='text-sm font-light mt-1'>{TELEFONO_NUMERO}</p>
               </div>

               <div className='my-2 flex flex-row justify-start gap-2'>
                  <SocialNetworks />
               </div>

            </div>

         </div>
         <div className="bg-white/11 py-5">
            <div className='flex max-w-6xl text-white mx-auto justify-between'>
               <p className={`${secondaryFont.className} text-sm`}>Osvaldo Sobico - Matrícula: CSI 5901 - Maria Julieta Rozas Martillera y Corredora Pública CUCIBA Matricula: 7490</p>
               <p className={`${secondaryFont.className} text-sm text-white`}>MARCOZOFT 2025</p>
            </div>
         </div>

      </footer>
   )
}


// flex flex-col items-center max-w-6xl mx-auto px-4 py-10