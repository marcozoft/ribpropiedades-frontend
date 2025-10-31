import { secondaryFont } from '@/src/app/config/fonts'
// import '@/src/styles/flat-icon/flaticon.css'

type Props = {
   barrio: string
}

// TODO: Agregar icon marker
// TODO: Agregar contador de fotos y videos
export const IndicadorBarrio = ({barrio}: Props) => {
   return (
      <div className={`absolute z-10 opacity-60 bottom-0 w-full inline-flex select-none bg-black px-2 py-2 text-sm ${secondaryFont.className}`}>
         <i className="flaticon-pin text-white"></i>
         <span className='text-white'>
            {barrio}
         </span>
      </div>
   )
}
