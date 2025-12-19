import { EMAIL, TELEFONO_LINK, WHATSAPP_TASACION } from '@/src/constants/constants';
import Image from 'next/image';
import Link from 'next/link';

export const SeccionHeroTasaciones = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tasaciones/background-tasaciones.webp"
          alt="RIB Propiedades Tasaciones"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay negro transparente */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-lg font-semibold uppercase tracking-wider">
            Tasaciones RIB
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          ¿Listo para vender o alquilar?
        </h1>

        {/* Descripción */}
        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
          Complete nuestro formulario de contacto y nos pondremos en contacto con usted en breve.<br />
          O escríbanos a <a href="mailto:info@ribpropiedades.com.ar" className="text-white font-semibold hover:underline">{EMAIL}</a> para conectarse ahora.
        </p>

        {/* Botones de contacto */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href={TELEFONO_LINK}
            className="inline-flex items-center gap-3 bg-foreground text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ededed] hover:text-black transition-all duration-300 hover:shadow-xl"
          >
            <i className="flaticon-phone-call text-lg"></i>
            <span>Llamar por teléfono</span>
          </Link>

          <Link
            href={WHATSAPP_TASACION}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#ededed] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#5f021f] hover:text-white transition-all duration-300 hover:shadow-xl"
          >
            <i className="flaticon-chat text-lg"></i>
            <span>Escribir al WhatsApp</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
