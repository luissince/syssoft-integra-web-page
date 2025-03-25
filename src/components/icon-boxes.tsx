import type React from "react"
import { Laptop, FileText, Bookmark, SmartphoneIcon as Android, ShieldCheck, Award } from "lucide-react"

interface IconBoxProps {
  icon: React.ReactNode
  title: string
  description: string
  soon?: boolean
}

function IconBox({ icon, title, description, soon = false }: IconBoxProps) {
  return (
    <div className="flex flex-col items-stretch h-full bg-white rounded-lg shadow-custom p-8 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
      <div className="text-primary text-4xl mb-6 bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-gray-800 text-xl font-semibold mb-3">
        {title}
        {soon && <span className="text-red-500 text-sm italic ml-2 bg-red-50 px-2 py-0.5 rounded">PRONTO</span>}
      </h4>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  )
}

export function IconBoxes() {
  return (
    <section id="solutions" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title centered text-gray-800 inline-block">Nuestras Soluciones</h2>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para la gestión de su negocio, desde software especializado hasta equipos de
            punto de venta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IconBox
            icon={<Laptop />}
            title="Venta de equipos"
            description="Contamos con equipos para punto de venta como: impresoras tiketeras, lectoras de codigo, pantallas tactiles, etc."
          />
          <IconBox
            icon={<FileText />}
            title="Facturación y boletas electrónicas"
            description="Crea facturas y boletas, envíalas por correo e imprímelas con todos los requisitos de la SUNAT."
          />
          <IconBox
            icon={<Bookmark />}
            title="Cotizaciones"
            description="Crea cotizaciones y luego conviértelas en facturas, boletas o envialas por whatsapp."
          />
          <IconBox
            icon={<Android />}
            title="App móvil"
            description="Prodra vender, cotizar, ver los distintos tipos de reportes y mas desde el móvil."
            soon={true}
          />
          <IconBox
            icon={<ShieldCheck />}
            title="Seguridad garantizada"
            description="Todos nuestros sistemas cuentan con protocolos de seguridad avanzados para proteger su información."
          />
          <IconBox
            icon={<Award />}
            title="Soporte técnico"
            description="Brindamos soporte técnico especializado para resolver cualquier incidencia en el menor tiempo posible."
          />
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://api.whatsapp.com/send?phone=51966750883"
            target="_blank"
            className="btn-primary"
            rel="noreferrer"
          >
            Solicitar una demostración
          </a>
        </div>
      </div>
    </section>
  )
}

