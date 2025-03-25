import Link from "next/link"
import { Mail, Phone, Facebook, Shield, Clock } from "lucide-react"

export function TopBar() {
  return (
    <div className="hidden lg:block fixed top-0 w-full bg-primary z-50 py-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-white/90" />
              <a
                href="mailto:syssoftintegra@gmail.com"
                title="correo"
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                syssoftintegra@gmail.com
              </a>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-white/90" />
              <a
                href="https://api.whatsapp.com/send?phone=51966750883"
                target="_blank"
                title="whatsapp"
                className="text-sm text-white/90 hover:text-white transition-colors"
                rel="noreferrer"
              >
                +51 966750883
              </a>
              <span className="mx-1 text-white/70">|</span>
              <a
                href="https://api.whatsapp.com/send?phone=51931341082"
                target="_blank"
                title="whatsapp"
                className="text-sm text-white/90 hover:text-white transition-colors"
                rel="noreferrer"
              >
                +51 931341082
              </a>
            </li>
            <li className="flex items-center">
              <Facebook className="h-4 w-4 mr-2 text-white/90" />
              <a
                href="https://www.facebook.com/SysSoftIntegra"
                target="_blank"
                title="facebook"
                className="text-sm text-white/90 hover:text-white transition-colors"
                rel="noreferrer"
              >
                SysSoftIntegra
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-white/90">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm">Soporte Técnico 24/7</span>
          </div>
          <Link
            href="#about"
            className="bg-white text-primary px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors shadow-sm"
          >
            Ver demo
          </Link>
        </div>
      </div>
    </div>
  )
}

