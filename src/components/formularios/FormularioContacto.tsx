'use client';

import { RECAPTCHA_CLIENT_API_KEY } from '@/src/constants/constants';
import { useEffect, useState } from 'react';
import { MensajeEnviado } from './MensajeEnviado';
import { Button } from '@/src/components';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { PROMPT_WHATSAPP_FICHA } from '@/src/constants/constants';

interface FormData {
   nombre: string;
   email: string;
   telefono: string;
   servicio: string;
   mensaje: string;
}

const servicios = [
   'Seleccionar tipo de servicio',
   'Compra de propiedad',
   'Venta de propiedad',
   'Alquiler',
   'Tasación',
   'Asesoramiento',
   'Otro',
];

const formInitialData = {
   nombre: '',
   email: '',
   telefono: '',
   servicio: servicios[0],
   mensaje: '',
}

export const FormularioContacto = () => {

   const [formData, setFormData] = useState<FormData>(formInitialData);
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   
   
   /**
    *  POST Formulario
   */
  const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsLoading(true);
     try {
        const token = await grecaptcha.execute(RECAPTCHA_CLIENT_API_KEY, {
           action: "contacto_form",
         });
         
         const urlCurrent = window.location.href;
         await fetch("/api/contacto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               ...formData,
               servicio: `${formData.servicio}: ${urlCurrent}`,
               recaptchaToken: token,
            }),
         });

         setIsSubmitted(true);
      } catch (error) {
         console.error('Error al enviar formulario:', error);
      } finally {
         setIsLoading(false);
      }
   };

   const onClickButtonWhattsap = (e: React.FormEvent) => {

      handleSubmit(e);
      const urlCurrent = window.location.href;
      const whatsappUrl = `${PROMPT_WHATSAPP_FICHA}${encodeURIComponent(urlCurrent)}`;
      window.open(whatsappUrl, '_blank');
   }

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   useEffect(() => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_CLIENT_API_KEY}`;
      script.async = true;
      document.body.appendChild(script);
   }, []);


   const onClickReenviar = () => {
      setIsSubmitted(false);
      setFormData(formInitialData);
   }

   return (
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
         <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Enviar consulta
         </h3>

         {
            isSubmitted
               ? (<MensajeEnviado onClick={onClickReenviar}/>)
               : (<form onSubmit={handleSubmit}>
                  <div className="space-y-4 mb-4">
                     {/* Nombre */}
                     <div className="relative">
                        <input
                           type="text"
                           name="nombre"
                           value={formData.nombre}
                           onChange={handleChange}
                           placeholder="Nombre"
                           className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                           required
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <i className="flaticon-user text-lg"></i>
                        </span>
                     </div>

                     {/* Email */}
                     <div className="relative">
                        <input
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="Email"
                           className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                           required
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <i className="flaticon-google-docs text-lg"></i>
                        </span>
                     </div>

                  </div>

                  <div className="space-y-4 mb-4">
                     {/* Servicio */}
                     <div className="relative">
                        <select
                           name="servicio"
                           value={formData.servicio}
                           onChange={handleChange}
                           className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors appearance-none bg-white"
                        >
                           {servicios.map((servicio, index) => (
                              <option key={index} value={servicio} disabled={index === 0}>
                                 {servicio}
                              </option>
                           ))}
                        </select>
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <i className="flaticon-home-2 text-lg"></i>
                        </span>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                           <i className="flaticon-expand text-sm"></i>
                        </span>
                     </div>

                     {/* Teléfono */}
                     <div className="relative">
                        <input
                           type="tel"
                           name="telefono"
                           value={formData.telefono}
                           onChange={handleChange}
                           placeholder="Tel/Cel*"
                           className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                           required
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                           <i className="flaticon-phone-call text-lg"></i>
                        </span>
                     </div>
                  </div>

                  {/* Mensaje */}
                  <div className="relative mb-6">
                     <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Comentario"
                        rows={5}
                        className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                        required
                     ></textarea>
                     <span className="absolute left-4 top-6 text-gray-400">
                        <i className="flaticon-pencil text-lg"></i>
                     </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">*Requeridos</p>

                  <div className='flex flex-col gap-2'>
                     {/* Botón */}
                     <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full gap-2 bg-foreground hover:bg-foreground/80 text-white"
                     >
                        <Mail size={18} />
                        {isLoading ? 'Enviando...' : 'Contactar por email'}
                     </Button>

                     {/* Botón Whattsapp */}
                     <Button
                        disabled={isLoading}
                        onClick={ onClickButtonWhattsap }
                        className="w-full gap-2 bg-foreground hover:bg-foreground/80 text-white"
                     >
                        <Image src="/images/navbar-whatsapp.svg" height={18} width={18} alt=''/>
                        Contactar por WhatsApp
                     </Button>
                  </div>
               </form>
               )}
      </div>
   )
}
