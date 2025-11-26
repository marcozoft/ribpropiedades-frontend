

// TODO: Generalizar y usar un unico form
export const FormularioContacto = () => {


   const servicios = [
      'Seleccionar tipo de servicio',
      'Compra de propiedad',
      'Venta de propiedad',
      'Alquiler',
      'Tasación',
      'Asesoramiento',
      'Otro',
   ];

  return (
   <div className="bg-white rounded-lg shadow-xl p-8 md:p-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
         Enviar consulta
      </h3>

      <form>
      <div className="space-y-4 mb-4">
         {/* Nombre */}
         <div className="relative">
            <input
            type="text"
            name="nombre"
            value=""
            placeholder="Nombre*"
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
            placeholder="Email*"
            className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
            required
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <i className="flaticon-google-docs text-lg"></i>
            </span>
         </div>

      </div>

      <div className="space-y-4 mb-4">
         {/* Teléfono */}
         <div className="relative">
            <select
            name="servicio"
            value=""
            className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors appearance-none bg-white"
            required
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
            placeholder="Tel/Cel"
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
            value=""
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
         className="w-full bg-foreground text-white px-8 py-3 rounded-lg font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl"
      >
         Enviar
      </button>
      </form>
   </div>
  )
}
