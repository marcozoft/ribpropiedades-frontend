'use client';

import { useState } from 'react';

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

// TODO: Generalizar y usar un unico form
export const FormularioContactoLateral = () => {

   const [formData, setFormData] = useState<FormData>({
      nombre: '',
      email: '',
      telefono: '',
      servicio: servicios[0],
      mensaje: '',
   });

   // TODO: POST formulario
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Formulario lateral:', formData);
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

  return (
   <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
         Enviar consulta
      </h3>

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
            ></textarea>
            <span className="absolute left-4 top-6 text-gray-400">
               <i className="flaticon-pencil text-lg"></i>
            </span>
         </div>

         <p className="text-sm text-gray-500 mb-4">*Requeridos</p>

         {/* Botón */}
         <button
            type="submit"
            className="w-full bg-foreground text-white px-8 py-3 rounded-lg cursor-pointer font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl"
         >
            Enviar
         </button>
      </form>
   </div>
  )
}
