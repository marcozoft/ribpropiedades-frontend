'use client';

import { RECAPTCHA_CLIENT_API_KEY } from '@/src/constants/constants';
import { useEffect, useState } from 'react';

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


export const FormularioContacto = () => {

   const [formData, setFormData] = useState<FormData>({
      nombre: '',
      email: '',
      telefono: '',
      servicio: servicios[0],
      mensaje: '',
   });
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isLoading, setIsLoading] = useState(false);


   /**
    *  POST Formulario
    */
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      try {
         console.log('contacto_form:', formData);
         const token = await grecaptcha.execute(RECAPTCHA_CLIENT_API_KEY, {
            action: "contacto_form",
         });

         await fetch("/api/contacto", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               ...formData,
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

   return (
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
         <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Enviar consulta
         </h3>

         {isSubmitted ? (
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
                  Nos pondremos en contacto contigo pronto.
               </p>
               <button
                  onClick={() => {
                     setIsSubmitted(false);
                     setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        servicio: servicios[0],
                        mensaje: '',
                     });
                  }}
                  className="bg-foreground text-white px-6 py-2 rounded-lg cursor-pointer font-semibold hover:bg-foreground/90 transition-all duration-300"
               >
                  Enviar otra consulta
               </button>
            </div>
         ) : (
            <form onSubmit={handleSubmit}>
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

               {/* Botón */}
               <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-foreground text-white px-8 py-3 rounded-lg cursor-pointer font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
               >
                  {isLoading ? 'Enviando...' : 'Enviar'}
               </button>
            </form>
         )}
      </div>
   )
}
