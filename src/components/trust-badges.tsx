import { Shield, Award, CheckCircle, Clock } from "lucide-react"

export function TrustBadges() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Seguridad Garantizada</h3>
            <p className="text-gray-600 text-sm">Protección de datos y transacciones seguras</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Certificado por SUNAT</h3>
            <p className="text-gray-600 text-sm">Cumplimos con todas las normativas fiscales</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Calidad Garantizada</h3>
            <p className="text-gray-600 text-sm">Software probado y de alta calidad</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Soporte 24/7</h3>
            <p className="text-gray-600 text-sm">Asistencia técnica cuando la necesites</p>
          </div>
        </div>
      </div>
    </section>
  )
}

