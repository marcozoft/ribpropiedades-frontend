'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  mensaje: string;
  guardarDatos: boolean;
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

export const SeccionFormularioContacto = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    servicio: servicios[0],
    mensaje: '',
    guardarDatos: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí iría la lógica de envío del formulario
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda - Información */}
          <div>
            <span className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Cómo podemos ayudar?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Complete nuestro formulario de contacto y nos pondremos en contacto con usted en breve.<br />
              O escríbanos a <a href="mailto:info@ribpropiedades.com.ar" className="text-foreground font-semibold hover:underline">info@ribpropiedades.com.ar</a> para conectarse ahora.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contacto y consultas:</h3>
                <p className="text-gray-600">
                  e-mail: <a href="mailto:info@ribpropiedades.com.ar" className="text-foreground hover:underline">info@ribpropiedades.com.ar</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Si el llamado es desde Pilar</h3>
                <p className="text-gray-600">Tel./Fax: +54 0230 4384500</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Si el llamado es desde Capital e interior del País</h3>
                <p className="text-gray-600">Tel./Fax: +54 0230 4384500</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Desde otro país</h3>
                <p className="text-gray-600">Tel./Fax: +54 0230 4384500</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Móvil</h3>
                <p className="text-gray-600">(54911) 3420 1500</p>
                <a
                  href="https://api.whatsapp.com/send?phone=5491134201500&text=Hola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold"
                >
                  <i className="flaticon-chat text-xl"></i>
                  <span>Contactar por WhatsApp</span>
                </a>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Oficina</h3>
                <p className="text-gray-600">
                  Edificio Bureau Pilar Norte - Of. 255, Piso 2.<br />
                  Ruta Panamericana Km 49.5, Pilar.<br />
                  Buenos Aires.
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.servicio}
                  onChange={handleChange}
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
                  value={formData.telefono}
                  onChange={handleChange}
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
              className="w-full bg-foreground text-white px-8 py-3 rounded-lg font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl"
            >
              Enviar
            </button>
          </form>
          </div>
        </div>
      </div>
    </section>
  );
};
