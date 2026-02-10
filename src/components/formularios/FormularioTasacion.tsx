"use client";

import { RECAPTCHA_CLIENT_API_KEY } from "@/src/constants/constants";
import { useEffect, useState } from "react";
import { MensajeEnviado } from "./MensajeEnviado";

interface FormData {
   nombre: string;
   email: string;
   telefono: string;
   direccion: string;
   mensaje: string;
}

const formInitialData = {
   nombre: '',
   email: '',
   telefono: '',
   direccion: '',
   mensaje: '',
}

export const FormularioTasacion = () => {

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
            action: "tasacion_form",
         });

         await fetch("/api/tasacion", {
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


   /**
    * 
    */
   const onClickReenviar = () => {
      setIsSubmitted(false);
      setFormData(formInitialData);
   }

   /**
    * 
    */
   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <div className="max-w-4xl mx-auto px-4">
         <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
            <div className="text-center mb-10">
               <span className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-lg font-semibold uppercase tracking-wider mb-4">
                  Solicitar Tasación
               </span>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  ¿Tiene alguna pregunta?
               </h2>
               <p className="text-lg text-gray-600">
                  Complete el formulario y nos pondremos en contacto con usted para agendar la tasación
               </p>
            </div>

            {
               isSubmitted
                  ? (<MensajeEnviado onClick={onClickReenviar} />)
                  : (<form onSubmit={handleSubmit}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Nombre */}
                        <div className="relative">
                           <input
                              type="text"
                              name="nombre"
                              value={formData.nombre}
                              onChange={handleChange}
                              placeholder="Nombre"
                              className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
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
                              className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                           />
                           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <i className="flaticon-google-docs text-lg"></i>
                           </span>
                        </div>

                        {/* Teléfono */}
                        <div className="relative">
                           <input
                              type="tel"
                              name="telefono"
                              value={formData.telefono}
                              onChange={handleChange}
                              placeholder="Teléfono*"
                              className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                              required
                           />
                           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <i className="flaticon-phone-call text-lg"></i>
                           </span>
                        </div>

                        {/* Dirección */}
                        <div className="relative">
                           <input
                              type="text"
                              name="direccion"
                              value={formData.direccion}
                              onChange={handleChange}
                              placeholder="Dirección de la propiedad"
                              className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                           />
                           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                              <i className="flaticon-location text-lg"></i>
                           </span>
                        </div>
                     </div>

                     {/* Mensaje */}
                     <div className="relative mb-6">
                        <textarea
                           name="mensaje"
                           value={formData.mensaje}
                           onChange={handleChange}
                           placeholder="Información adicional (opcional)"
                           rows={5}
                           className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors resize-none"
                        ></textarea>
                        <span className="absolute left-4 top-6 text-gray-400">
                           <i className="flaticon-pencil text-lg"></i>
                        </span>
                     </div>

                     <p className="text-sm text-gray-500 mb-6">*Requeridos</p>

                     {/* Botón */}
                     <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-foreground cursor-pointer text-lg text-white px-8 py-4 rounded-lg font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                     >
                        {isLoading ? 'Enviando...' : 'Enviar Solicitud de Tasación'}
                     </button>
                  </form>
                  )}
         </div>
      </div>
   )
}
