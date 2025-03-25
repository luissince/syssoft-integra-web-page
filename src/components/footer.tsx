import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Youtube, Facebook, MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Image src="/images/logo.png" alt="SysSoft Integra Logo" width={50} height={50} className="mr-3" />
                <div>
                  <h3 className="text-xl font-bold">SysSoftIntegra</h3>
                  <p className="text-sm text-gray-400">Soluciones Empresariales</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                En SysSoftIntegra trabajamos para ayudar a los negocios a crecer organizados con soluciones tecnológicas
                innovadoras.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.youtube.com/channel/UC1yuF3XITbRHAcwud_78BXQ"
                  target="_blank"
                  title="YouTube SysSoftIntegra"
                  className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  aria-label="Canal de YouTube"
                  rel="noreferrer"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/SysSoftIntegra"
                  target="_blank"
                  title="Facebook SysSoftIntegra"
                  className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  aria-label="Página de Facebook"
                  rel="noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://m.me/SysSoftIntegra"
                  target="_blank"
                  title="Messenger SysSoftIntegra"
                  className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  aria-label="Messenger"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=51966750883"
                  target="_blank"
                  title="WhatsApp SysSoftIntegra"
                  className="bg-gray-800 hover:bg-primary text-white p-2 rounded-full transition-colors"
                  aria-label="WhatsApp"
                  rel="noreferrer"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
                Enlaces Útiles
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Inicio</span>
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Nosotros</span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Características</span>
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Precios</span>
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Contacto</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
                Servicios
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Facturación Electrónica</span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Control de Inventario</span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Gestión de Clientes</span>
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Reportes Financieros</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#solutions"
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    <span>Venta de Equipos</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
                Contáctanos
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
                  <span className="text-gray-400">
                    Carr. Central 6300, Ate 15487 <br />
                    Ate Vitarte
                    <br />
                    Perú
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-400">+51 966750883</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:syssoftintegra@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                    syssoftintegra@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SysSoftIntegra. Todos los derechos reservados.
            </div>
            <div className="text-sm text-gray-400">
              <span className="mr-4">
                <Link href="/politica-privacidad" className="hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </span>
              <span>
                <Link href="/terminos-servicio" className="hover:text-white transition-colors">
                  Términos de Servicio
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

