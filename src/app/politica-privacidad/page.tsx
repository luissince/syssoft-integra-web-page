import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PoliticaPrivacidad() {
  return (
    <main className="flex min-h-screen flex-col pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Política de Privacidad</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-custom p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Política de Privacidad</h1>
          <p className="text-gray-600 mb-6">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none text-gray-700">
            <p>
              En SysSoft Integra, accesible desde https://syssoftintegra.com, una de nuestras principales prioridades es
              la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de
              información que se recopilan y registran por SysSoft Integra y cómo la utilizamos.
            </p>

            <p>
              Si tiene preguntas adicionales o requiere más información sobre nuestra Política de Privacidad, no dude en
              contactarnos a través de nuestro correo electrónico: syssoftintegra@gmail.com
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Información que recopilamos</h2>

            <p>
              Cuando se registra en nuestro sitio, como parte del proceso, recopilamos la información personal que nos
              proporciona, como su nombre, dirección y dirección de correo electrónico. Su información personal será
              utilizada solo para los motivos específicos indicados a continuación.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Información personal</h3>

            <p>Podemos recopilar la siguiente información personal:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Dirección de facturación</li>
              <li>Información de la empresa (para clientes corporativos)</li>
              <li>RUC o DNI (para facturación)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-3">Información de uso</h3>

            <p>
              También podemos recopilar información sobre cómo se accede y utiliza nuestro sitio web y servicios. Esta
              información puede incluir:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Páginas visitadas</li>
              <li>Tiempo de acceso</li>
              <li>Sistema operativo</li>
              <li>Proveedor de servicios de Internet</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cómo utilizamos su información</h2>

            <p>Utilizamos la información que recopilamos de varias formas, incluyendo:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Proporcionar, operar y mantener nuestros servicios</li>
              <li>Mejorar, personalizar y ampliar nuestros servicios</li>
              <li>Entender y analizar cómo utiliza nuestros servicios</li>
              <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
              <li>
                Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, para proporcionarle
                actualizaciones y otra información relacionada con el servicio
              </li>
              <li>Enviarle correos electrónicos</li>
              <li>Encontrar y prevenir fraudes</li>
              <li>Cumplir con obligaciones legales y fiscales</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>

            <p>
              SysSoft Integra utiliza cookies para mejorar la experiencia del usuario. Las cookies son pequeños archivos
              que un sitio o su proveedor de servicios transfiere al disco duro de su computadora a través de su
              navegador web (si usted lo permite) que permite a los sistemas del sitio o proveedor de servicios
              reconocer su navegador y capturar y recordar cierta información.
            </p>

            <p>
              Utilizamos cookies para entender y guardar las preferencias del usuario para futuras visitas y compilar
              datos agregados sobre el tráfico del sitio y la interacción del sitio para poder ofrecer mejores
              experiencias y herramientas en el futuro.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Seguridad de la información</h2>

            <p>
              Implementamos una variedad de medidas de seguridad para mantener la seguridad de su información personal
              cuando ingresa, envía o accede a su información personal. Utilizamos encriptación de última generación
              para proteger datos sensibles transmitidos en línea, y también protegemos su información fuera de línea.
            </p>

            <p>
              Solo los empleados que necesitan realizar un trabajo específico (por ejemplo, facturación o servicio al
              cliente) tienen acceso a información personal identificable. Las computadoras/servidores en los que
              almacenamos información personal identificable se mantienen en un entorno seguro.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Divulgación a terceros</h2>

            <p>
              No vendemos, intercambiamos ni transferimos de ninguna otra manera a terceros externos su información de
              identificación personal. Esto no incluye terceros de confianza que nos ayudan a operar nuestro sitio web,
              realizar nuestro negocio o brindarle servicio, siempre que esas partes acuerden mantener esta información
              confidencial.
            </p>

            <p>
              También podemos divulgar su información cuando creemos que la divulgación es apropiada para cumplir con la
              ley, hacer cumplir las políticas de nuestro sitio o proteger nuestros derechos, propiedad o seguridad o la
              de otros.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">
              Cumplimiento con la Ley de Protección de Datos Personales del Perú
            </h2>

            <p>
              Nuestra política de privacidad cumple con la Ley N° 29733, Ley de Protección de Datos Personales del Perú
              y su Reglamento aprobado por el Decreto Supremo N° 003-2013-JUS. Respetamos los principios de
              consentimiento, finalidad, proporcionalidad, calidad, seguridad, disposición de recurso y nivel de
              protección adecuado establecidos en dicha ley.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Sus derechos</h2>

            <p>
              De acuerdo con la Ley de Protección de Datos Personales del Perú, usted tiene los siguientes derechos en
              relación con sus datos personales:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>Derecho de información:</strong> Ser informado sobre la finalidad del tratamiento de sus datos
                personales.
              </li>
              <li>
                <strong>Derecho de acceso:</strong> Obtener la información sobre sus datos personales objeto de
                tratamiento.
              </li>
              <li>
                <strong>Derecho de actualización, inclusión, rectificación y supresión:</strong> Modificar sus datos
                personales cuando sean parcial o totalmente inexactos, incompletos o desactualizados.
              </li>
              <li>
                <strong>Derecho a impedir el suministro:</strong> Impedir que sus datos sean suministrados,
                especialmente cuando ello afecte sus derechos fundamentales.
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos personales.
              </li>
              <li>
                <strong>Derecho al tratamiento objetivo:</strong> No verse sometido a una decisión con efectos jurídicos
                sobre usted basada únicamente en un tratamiento de datos personales.
              </li>
            </ul>

            <p>
              Para ejercer estos derechos, puede contactarnos a través de nuestro correo electrónico:
              syssoftintegra@gmail.com.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Cambios a esta política de privacidad</h2>

            <p>
              SysSoft Integra se reserva el derecho de cambiar esta política de privacidad en cualquier momento. Cuando
              lo hagamos, publicaremos un aviso en la página principal de nuestro sitio web y actualizaremos la fecha de
              modificación en la parte superior de esta página. Le recomendamos que revise periódicamente esta política
              de privacidad para estar informado sobre cómo estamos protegiendo su información.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contacto</h2>

            <p>
              Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos utilizando la siguiente
              información:
            </p>

            <p className="mt-4">
              <strong>SysSoft Integra</strong>
              <br />
              Carr. Central 6300, Ate 15487, Ate Vitarte Perú
              <br />
              Correo electrónico: syssoftintegra@gmail.com
              <br />
              Teléfono: +51 966750883
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

