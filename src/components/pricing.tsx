"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, X } from "lucide-react"

interface PlanFeature {
  name: string
  included: boolean
}

interface PlanProps {
  title: string
  price: string
  period: string
  description: string
  features: PlanFeature[]
  contactNumber: string
  popular?: boolean
}

function PricingPlan({ title, price, period, description, features, contactNumber, popular = false }: PlanProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl border ${popular ? "border-primary shadow-lg scale-105" : "border-gray-200"} relative`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
        </div>
      )}

      <div className={`p-8 ${popular ? "bg-primary text-white" : "bg-gray-50 text-gray-800"}`}>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className={`text-sm mb-4 ${popular ? "text-white/80" : "text-gray-500"}`}>{description}</p>
        <div className="flex items-baseline">
          <span className="text-sm">S/</span>
          <span className="text-4xl font-bold mx-1">{price}</span>
          <span className="text-sm">/ {period}</span>
        </div>
      </div>

      <div className="p-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              ) : (
                <X className="h-5 w-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
              )}
              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
            </li>
          ))}
        </ul>

        <Link
          href={`https://api.whatsapp.com/send?phone=${contactNumber}`}
          target="_blank"
          className={`block w-full text-center py-3 rounded-md transition-colors ${
            popular
              ? "bg-primary text-white hover:bg-primary/90"
              : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
          }`}
        >
          Contactar
        </Link>
      </div>
    </div>
  )
}

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const desktopFeatures = [
    { name: "Ventas ilimitadas", included: true },
    { name: "Compras ilimitadas", included: true },
    { name: "Clientes / proveedores ilimitados", included: true },
    { name: "Control de stock", included: true },
    { name: "Kardex de producto", included: true },
    { name: "Capacitación y soporte", included: true },
    { name: "Facturación y boletas electrónicas", included: true },
    { name: "Múltiples usuarios", included: true },
    { name: "Guia de Remisión", included: true },
    { name: "Ecommerce", included: false },
    { name: "Actualizaciones de por vida", included: false },
  ]

  const pymeFeatures = [
    { name: "Ventas ilimitadas", included: true },
    { name: "Compras ilimitadas", included: false },
    { name: "Clientes / proveedores ilimitados", included: true },
    { name: "Control de stock", included: true },
    { name: "Kardex de producto", included: true },
    { name: "Capacitación y soporte", included: true },
    { name: "Facturación y boletas electrónicas", included: true },
    { name: "Múltiples usuarios", included: false },
    { name: "Guia de Remisión", included: true },
    { name: "Ecommerce", included: false },
    { name: "Actualizaciones de por vida", included: true },
  ]

  const businessFeatures = [
    { name: "Ventas ilimitadas", included: true },
    { name: "Compras ilimitadas", included: true },
    { name: "Clientes / proveedores ilimitados", included: true },
    { name: "Control de stock", included: true },
    { name: "Kardex de producto", included: true },
    { name: "Capacitación y soporte", included: true },
    { name: "Facturación y boletas electrónicas", included: true },
    { name: "Múltiples usuarios", included: true },
    { name: "Guia de Remisión", included: true },
    { name: "Ecommerce", included: true },
    { name: "Actualizaciones de por vida", included: true },
  ]

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title centered text-gray-800 inline-block">Precios</h2>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            ¿Aún no encuentras el plan ideal para ti? Impulsa tu negocio con las mejores opciones que tenemos para tí.
          </p>

          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${!isAnnual ? "bg-white shadow-sm text-gray-800" : "text-gray-600"}`}
              onClick={() => setIsAnnual(false)}
            >
              Mensual
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${isAnnual ? "bg-white shadow-sm text-gray-800" : "text-gray-600"}`}
              onClick={() => setIsAnnual(true)}
            >
              Anual <span className="text-xs text-green-500 font-bold">-15%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingPlan
            title="Versión desktop"
            price="4500.00"
            period="de por vida"
            description="Ideal para negocios que prefieren una solución local"
            features={desktopFeatures}
            contactNumber="51966750883"
          />
          <PricingPlan
            title="Pyme"
            price={isAnnual ? "816.00" : "80.00"}
            period={isAnnual ? "año" : "mes"}
            description="Perfecto para pequeñas y medianas empresas"
            features={pymeFeatures}
            contactNumber="51966750883"
            popular={true}
          />
          <PricingPlan
            title="Business"
            price={isAnnual ? "1224.00" : "120.00"}
            period={isAnnual ? "año" : "mes"}
            description="Para empresas con necesidades avanzadas"
            features={businessFeatures}
            contactNumber="51966750883"
          />
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">¿Necesitas una solución personalizada?</h3>
          <p className="text-gray-600 text-center mb-6">
            Contáctanos para diseñar un plan que se adapte perfectamente a las necesidades específicas de tu empresa.
          </p>
          <div className="text-center">
            <Link
              href="https://api.whatsapp.com/send?phone=51966750883"
              target="_blank"
              className="btn-primary inline-flex items-center"
            >
              Solicitar cotización personalizada
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

