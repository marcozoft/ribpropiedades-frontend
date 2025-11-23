'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  mensaje: string;
}

export const SeccionFormularioTasacion = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario de tasación enviado:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 stripe-marca">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <span className="inline-block bg-foreground/10 text-foreground px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
              Solicitar Tasación
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Tiene alguna pregunta?
            </h2>
            <p className="text-lg text-gray-600">
              Complete el formulario y nos pondremos en contacto con usted para agendar la tasación
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Nombre */}
              <div className="relative">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre*"
                  className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
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
                  className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                  required
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
                  placeholder="Dirección de la propiedad*"
                  className="w-full px-12 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-foreground transition-colors"
                  required
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
              className="w-full bg-foreground text-white px-8 py-4 rounded-lg font-semibold uppercase hover:bg-foreground/90 transition-all duration-300 hover:shadow-xl text-lg"
            >
              Enviar Solicitud de Tasación
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
