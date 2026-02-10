type Props = {
   onClick: () => void
}

export const MensajeEnviado = ({onClick}: Props) => {
   return (
      <div className="text-center py-12">
         <div className="mb-4">
            <svg
               className="w-16 h-16 mx-auto text-green-500"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
               />
            </svg>
         </div>
         <h4 className="text-xl font-bold text-gray-900 mb-2">
            ¡Mensaje enviado con éxito!
         </h4>
         <p className="text-gray-600 mb-6">
            Nos pondremos en contacto pronto.
         </p>
         <button
            onClick={onClick}
            className="bg-foreground text-white px-6 py-2 rounded-lg cursor-pointer font-semibold hover:bg-foreground/90 transition-all duration-300"
         >
            Enviar otra consulta
         </button>
      </div>
   )
}
