import type React from "react"
import { Monitor, BarChart, Users, Database, Shield, ClipboardList, CheckCircle } from "lucide-react"
import Image from "next/image"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white rounded-lg shadow-custom p-8 h-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border border-gray-100">
      <div className="text-primary text-3xl mb-6">{icon}</div>
      <h4 className="text-gray-800 text-xl font-semibold mb-4">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export function Features() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title centered text-gray-800 inline-block">Características</h2>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            Sistema contable, administrativo y de facturación en la Nube. Descubre todas las características diseñadas
            para que tomes el control de tu empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <Feature
            icon={<Monitor />}
            title="Reportes inteligentes"
            description="Genera tus reportes en tiempo real para analizar tu negocio: ventas, productos más vendidos, flujo de efectivo, balance general, estado de resultados, impuestos, lo que debes, lo que te deben."
          />
          <Feature
            icon={<BarChart />}
            title="Cotizaciones"
            description="Crea cotizaciones y luego conviértelas en facturas o boletas. Envíalas por correo electrónico o WhatsApp directamente desde el sistema."
          />
          <Feature
            icon={<Users />}
            title="Clientes"
            description="Lleva el registro de todos tus clientes, el histórico de tus ventas, los saldos y todos sus movimientos. Gestiona eficientemente tu cartera de clientes."
          />
          <Feature
            icon={<Database />}
            title="Proveedores"
            description="Lleva el registro unificado de proveedores y utilícelo cuando usted los requiera. Gestiona órdenes de compra y pagos pendientes."
          />
          <Feature
            icon={<Shield />}
            title="Control de Usuarios"
            description="Controla las acciones de cada usuario en la plataforma de acuerdo a su perfil. Asigna permisos específicos para cada área de tu empresa."
          />
          <Feature
            icon={<ClipboardList />}
            title="Inventario al día"
            description="Controla la entrada y salida de todos los productos de tus bodegas en tiempo real. Recibe alertas de stock mínimo y gestiona múltiples almacenes."
          />
        </div>

        <div className="bg-white rounded-xl shadow-custom overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">¿Por qué elegir SysSoftIntegra?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Cumplimiento normativo</h4>
                      <p className="text-gray-600">
                        Nuestro sistema cumple con todas las normativas de la SUNAT para facturación electrónica.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Soporte técnico especializado</h4>
                      <p className="text-gray-600">
                        Contamos con un equipo de soporte técnico disponible para resolver cualquier incidencia.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Actualizaciones constantes</h4>
                      <p className="text-gray-600">
                        Nuestro sistema se actualiza regularmente para incluir nuevas funcionalidades y mejoras.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Seguridad de datos</h4>
                      <p className="text-gray-600">
                        Implementamos protocolos de seguridad avanzados para proteger la información de su empresa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-primary/5 p-10 flex items-center justify-center">
              <Image
                src="/images/hero-bg.jpg"
                alt="Dashboard de características"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

