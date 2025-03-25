import Link from "next/link"
import Image from "next/image"
import { Check, Shield, Users, Award, Clock } from "lucide-react"

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title text-gray-800 mb-8">Conocenos</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Somos una solución en la Nube para llevar la administración y facturación de pequeños negocios, Pymes y
              emprendedores de forma pragmática y segura.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">+25</h3>
                </div>
                <p className="text-gray-600 text-sm">Emprendimientos registrados</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">100%</h3>
                </div>
                <p className="text-gray-600 text-sm">Seguridad garantizada</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">5 años</h3>
                </div>
                <p className="text-gray-600 text-sm">De experiencia</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 p-2 rounded-md mr-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">24/7</h3>
                </div>
                <p className="text-gray-600 text-sm">Soporte técnico</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-700">Controla y personaliza cada detalle de tus ítems de venta.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-700">
                  ¡Crea tus Facturas y Boletas Electrónicas de forma fácil y rápida!
                </span>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mr-3 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-gray-700">
                  Todas las funciones para administrar, controlar y hacer crecer tu pyme o negocio.
                </span>
              </li>
            </ul>

            <Link href="https://app.syssoftintegra.com" target="_blank" className="btn-primary">
              Ver demo
            </Link>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg"></div>

              <div className="relative z-10 bg-white p-6 rounded-xl shadow-custom">
                <Image
                  src="/banners/image.png"
                  alt="Dashboard SysSoft Integra"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />

                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Acceso a la versión demo</h3>
                  <p className="text-gray-600 mb-6">
                    Usa las siguientes credenciales para acceder a nuestra versión de demostración:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white mr-4">
                        <span className="text-sm">👤</span>
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Usuario</p>
                        <p className="font-medium text-gray-800">admin</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white mr-4">
                        <span className="text-sm">🔑</span>
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Contraseña</p>
                        <p className="font-medium text-gray-800">admin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

