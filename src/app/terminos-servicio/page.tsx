import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TerminosServicio() {
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Términos de Servicio</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-custom p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Términos y Condiciones de Servicio</h1>
          <p className="text-gray-600 mb-6">Última actualización: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none text-gray-700">
            <p>
              Bienvenido a SysSoft Integra. Estos términos y condiciones describen las reglas y regulaciones para el uso
              del sitio web y servicios de SysSoft Integra, ubicado en https://syssoftintegra.com.
            </p>

            <p>
              Al acceder a este sitio web, asumimos que acepta estos términos y condiciones en su totalidad. No continúe
              usando el sitio web de SysSoft Integra si no acepta todos los términos y condiciones establecidos en esta
              página.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Definiciones</h2>

            <p>Para los propósitos de estos Términos y Condiciones:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>"Cliente"</strong> se refiere a cualquier persona o entidad que contrata los servicios de
                SysSoft Integra.
              </li>
              <li>
                <strong>"Servicio"</strong> se refiere a los productos y servicios ofrecidos por SysSoft Integra,
                incluyendo pero no limitado a software de facturación electrónica, sistemas de gestión empresarial y
                equipos para punto de venta.
              </li>
              <li>
                <strong>"Plataforma"</strong> se refiere al software y sistemas proporcionados por SysSoft Integra para
                el uso del Cliente.
              </li>
              <li>
                <strong>"Usuario"</strong> se refiere a cualquier persona que acceda o utilice la Plataforma, ya sea en
                nombre propio o en nombre del Cliente.
              </li>
              <li>
                <strong>"Contenido"</strong> se refiere a toda la información y datos almacenados o transmitidos a
                través de la Plataforma.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Licencia de uso</h2>

            <p>
              A menos que se indique lo contrario, SysSoft Integra y/o sus licenciantes poseen los derechos de propiedad
              intelectual de todo el material en SysSoft Integra. Todos los derechos de propiedad intelectual están
              reservados.
            </p>

            <p>
              Al contratar nuestros servicios, se le otorga una licencia limitada, no exclusiva y no transferible para
              utilizar nuestra Plataforma de acuerdo con estos Términos y Condiciones.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Restricciones</h3>

            <p>Está específicamente prohibido:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Publicar cualquier material del sitio web o la Plataforma en otros medios</li>
              <li>Vender, sublicenciar y/o comercializar cualquier material del sitio web o la Plataforma</li>
              <li>Realizar y/o mostrar públicamente cualquier material del sitio web o la Plataforma</li>
              <li>
                Usar este sitio web o la Plataforma de cualquier manera que cause, o pueda causar, daño al sitio web o a
                la Plataforma
              </li>
              <li>
                Usar este sitio web o la Plataforma de cualquier manera que impacte el acceso de usuarios al sitio web o
                a la Plataforma
              </li>
              <li>
                Usar este sitio web o la Plataforma de manera contraria a las leyes y regulaciones aplicables, o de
                cualquier manera que pueda causar daño al sitio web, a la Plataforma o a cualquier persona o entidad
                comercial
              </li>
              <li>
                Realizar minería de datos, recolección de datos, extracción de datos o cualquier otra actividad similar
                en relación con este sitio web o la Plataforma
              </li>
              <li>Usar este sitio web o la Plataforma para participar en cualquier publicidad o marketing</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Suscripciones y pagos</h2>

            <p>
              Algunos de nuestros servicios están disponibles mediante suscripción. Se le facturará por adelantado según
              el plan de suscripción que elija. Las tarifas de suscripción no son reembolsables.
            </p>

            <p>
              Nos reservamos el derecho de cambiar las tarifas de suscripción en cualquier momento, previa notificación
              con al menos 30 días de anticipación. Dicha notificación puede ser enviada a la dirección de correo
              electrónico especificada en su cuenta o mediante un aviso en nuestra Plataforma.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Renovación automática</h3>

            <p>
              A menos que cancele su suscripción antes de la fecha de renovación, su suscripción se renovará
              automáticamente y se le cobrará según su plan de suscripción.
            </p>

            <h3 className="text-lg font-semibold mt-6 mb-3">Cancelación</h3>

            <p>
              Puede cancelar su suscripción en cualquier momento contactando a nuestro equipo de soporte. La cancelación
              será efectiva al final del período de facturación actual.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Responsabilidades del cliente</h2>

            <p>Como Cliente o Usuario de nuestra Plataforma, usted es responsable de:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Mantener la confidencialidad de cualquier información de inicio de sesión y contraseña</li>
              <li>Restringir el acceso a su computadora y/o cuenta para evitar el uso no autorizado</li>
              <li>Asegurarse de que toda la información proporcionada a SysSoft Integra sea precisa y completa</li>
              <li>Informar inmediatamente a SysSoft Integra sobre cualquier cambio en la información proporcionada</li>
              <li>
                Informar inmediatamente a SysSoft Integra sobre cualquier uso no autorizado de su cuenta o cualquier
                otra violación de seguridad
              </li>
              <li>Utilizar la Plataforma de acuerdo con todas las leyes y regulaciones aplicables</li>
              <li>Obtener y mantener todo el equipo y servicios necesarios para acceder y utilizar la Plataforma</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Contenido del usuario</h2>

            <p>
              Nuestra Plataforma permite a los Usuarios publicar, enlazar, almacenar, compartir y poner a disposición
              cierta información, texto, gráficos, videos u otro material ("Contenido"). Usted es responsable del
              Contenido que publica en o a través de la Plataforma, incluyendo su legalidad, confiabilidad y
              apropiación.
            </p>

            <p>Al publicar Contenido en o a través de la Plataforma, usted declara y garantiza que:</p>

            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                El Contenido es suyo y/o tiene el derecho de usarlo y el derecho de otorgarnos los derechos y licencia
                como se establece en estos Términos y Condiciones
              </li>
              <li>
                El Contenido no infringe los derechos de privacidad, derechos de publicidad, derechos de autor, derechos
                contractuales o cualquier otro derecho de cualquier persona o entidad
              </li>
            </ul>

            <p>
              Nos reservamos el derecho de terminar la cuenta de cualquier Usuario que infrinja los derechos de autor.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Disponibilidad, errores y inexactitudes</h2>

            <p>
              Estamos constantemente actualizando nuestras ofertas de productos y servicios en la Plataforma. Los
              productos o servicios disponibles en nuestra Plataforma pueden tener precios incorrectos, estar descritos
              incorrectamente o no estar disponibles, y podríamos experimentar retrasos en la actualización de la
              información en la Plataforma y en nuestra publicidad en otros sitios web.
            </p>

            <p>
              No podemos garantizar la exactitud o integridad de cualquier información en nuestra Plataforma o en
              cualquier otro sitio web. Nos reservamos el derecho de cambiar o actualizar la información y corregir
              errores, inexactitudes u omisiones en cualquier momento sin previo aviso.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitación de responsabilidad</h2>

            <p>
              En ningún caso SysSoft Integra, nuestros directores, funcionarios, empleados, afiliados, agentes,
              contratistas, pasantes, proveedores, prestadores de servicios o licenciantes serán responsables por
              cualquier lesión, pérdida, reclamo, o cualquier daño directo, indirecto, incidental, punitivo, especial o
              consecuente de cualquier tipo, incluyendo, sin limitación, pérdida de beneficios, pérdida de ingresos,
              pérdida de ahorros, pérdida de datos, costos de reemplazo o daños similares, ya sea basado en contrato,
              agravio (incluyendo negligencia), responsabilidad estricta o de otra manera, como consecuencia del uso de
              cualquiera de los servicios o productos adquiridos usando la Plataforma, o por cualquier otro reclamo
              relacionado de alguna manera con su uso de la Plataforma o cualquier producto, incluyendo, pero no
              limitado a, cualquier error u omisión en cualquier contenido, o cualquier pérdida o daño de cualquier tipo
              incurrido como resultado del uso de la Plataforma o cualquier contenido (o producto) publicado,
              transmitido o puesto a disposición a través de la Plataforma, incluso si se avisa de su posibilidad.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Indemnización</h2>

            <p>
              Usted acepta indemnizar, defender y mantener indemne a SysSoft Integra y a nuestras subsidiarias,
              afiliadas, socios, funcionarios, directores, agentes, contratistas, licenciantes, proveedores de
              servicios, subcontratistas, proveedores, pasantes y empleados, de cualquier reclamo o demanda, incluyendo
              honorarios razonables de abogados, realizados por cualquier tercero debido a o que surjan de su
              incumplimiento de estos Términos y Condiciones o los documentos que incorporan por referencia, o su
              violación de cualquier ley o los derechos de un tercero.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Terminación</h2>

            <p>
              Las obligaciones y responsabilidades de las partes incurridas antes de la fecha de terminación
              sobrevivirán a la terminación de este acuerdo para todos los propósitos.
            </p>

            <p>
              Estos Términos y Condiciones son efectivos a menos que y hasta que sean terminados por usted o nosotros.
              Usted puede terminar estos Términos y Condiciones en cualquier momento notificándonos que ya no desea
              utilizar nuestros Servicios, o cuando deje de usar nuestra Plataforma.
            </p>

            <p>
              Si a nuestro juicio usted falla, o sospechamos que ha fallado, en cumplir con cualquier término o
              disposición de estos Términos y Condiciones, también podemos terminar este acuerdo en cualquier momento
              sin previo aviso y usted seguirá siendo responsable de todos los montos adeudados hasta la fecha de
              terminación inclusive; y/o en consecuencia podemos negarle el acceso a nuestros Servicios (o cualquier
              parte de los mismos).
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Cambios a los términos de servicio</h2>

            <p>
              Puede revisar la versión más actualizada de los Términos y Condiciones en cualquier momento en esta
              página.
            </p>

            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de actualizar, cambiar o reemplazar cualquier parte
              de estos Términos y Condiciones mediante la publicación de actualizaciones y cambios en nuestro sitio web.
              Es su responsabilidad revisar nuestro sitio web periódicamente para ver los cambios. Su uso continuo o
              acceso a nuestro sitio web o la Plataforma después de la publicación de cualquier cambio en estos Términos
              y Condiciones constituye la aceptación de esos cambios.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Ley aplicable</h2>

            <p>
              Estos Términos y Condiciones y cualquier acuerdo separado por el cual le proporcionamos Servicios se
              regirán e interpretarán de acuerdo con las leyes de la República del Perú.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">12. Contacto</h2>

            <p>Las preguntas sobre los Términos y Condiciones deben enviarse a syssoftintegra@gmail.com.</p>

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

