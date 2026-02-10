import Link from 'next/link';
import Image from 'next/image';
import { EMAIL, EMAIL2, EMAIL2_LINK, EMAIL_LINK, WHATSAPP_LINK } from '@/src/constants/constants';
import { FormularioContacto } from '@/src/components';

export const SeccionFormularioContacto = () => {

  return (
    <section className="py-10 md:py-15 bg-gray-50" id="formulario">
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
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contacto y consultas:</h3>
                <p className="text-gray-600">
                  <Link href={EMAIL_LINK} className="text-foreground hover:underline">{EMAIL}</Link>
                </p>
                <p className="text-gray-600">
                  <Link href={EMAIL2_LINK} className="text-foreground hover:underline">{EMAIL2}</Link>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Móvil</h3>
                <p className="text-gray-600"><a href="tel:+5491134201500" className="text-foreground hover:underline">(+549) 11 3420 1500</a></p>

                <p>
                  <Link href={WHATSAPP_LINK}>
                    <Image src='/images/whatsapp-logo.svg' alt='whatsapp logo' height={35} width={35} className=''/>
                  </Link>
                </p>
                
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
          <FormularioContacto />

        </div>  
      </div>
    </section>
  );
};
