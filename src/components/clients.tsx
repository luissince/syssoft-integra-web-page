"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const clients = [
  { id: 1, image: "/images/clients/client-1.png", name: "Cliente 1" },
  { id: 2, image: "/images/clients/client-2.png", name: "Cliente 2" },
  { id: 3, image: "/images/clients/client-3.png", name: "Cliente 3" },
  { id: 4, image: "/images/clients/client-4.png", name: "Cliente 4" },
  { id: 5, image: "/images/clients/client-5.png", name: "Cliente 5" },
  { id: 6, image: "/images/clients/client-6.png", name: "Cliente 6" },
  { id: 7, image: "/images/clients/client-7.png", name: "Cliente 7" },
  { id: 8, image: "/images/clients/client-8.png", name: "Cliente 8" },
]

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    position: "Gerente de Operaciones",
    company: "Distribuidora Central",
    image: "/images/team/team-1.jpg",
    text: "SysSoftIntegra ha transformado la manera en que gestionamos nuestro inventario y facturación. El sistema es intuitivo y el soporte técnico es excelente.",
  },
  {
    id: 2,
    name: "María Sánchez",
    position: "Dueña",
    company: "Farmacia San José",
    image: "/images/team/team-1.jpg",
    text: "Desde que implementamos SysSoftIntegra, hemos reducido los errores en facturación en un 95%. La integración con SUNAT funciona perfectamente.",
  },
  {
    id: 3,
    name: "Jorge Mendoza",
    position: "Director Financiero",
    company: "Importaciones del Sur",
    image: "/images/team/team-1.jpg",
    text: "El control de inventario y la generación de reportes nos ha permitido tomar mejores decisiones. Recomiendo ampliamente este sistema.",
  },
]

export function Clients() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleClients, setVisibleClients] = useState<number[]>([])
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Determine how many clients to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      let clientsToShow = 2
      if (window.innerWidth >= 768) clientsToShow = 3
      if (window.innerWidth >= 1024) clientsToShow = 4
      if (window.innerWidth >= 1280) clientsToShow = 5

      const indices = []
      for (let i = 0; i < clientsToShow; i++) {
        indices.push((currentIndex + i) % clients.length)
      }
      setVisibleClients(indices)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [currentIndex])

  // Auto-scroll clients
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title centered text-gray-800 inline-block">Nuestros Clientes</h2>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            Empresas que confían en nuestras soluciones para optimizar sus procesos de negocio.
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden mb-20">
          <div className="flex justify-center items-center space-x-12 py-8">
            {visibleClients.map((index) => (
              <div
                key={clients[index].id}
                className="transition-all duration-500 ease-in-out transform hover:scale-110 grayscale hover:grayscale-0"
              >
                <Image
                  src={clients[index].image || "/placeholder.svg"}
                  alt={clients[index].name}
                  width={140}
                  height={80}
                  className="object-contain h-20"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">Lo que dicen nuestros clientes</h3>

          <div className="relative">
            <div className="max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${activeTestimonial === index ? "opacity-100" : "opacity-0 absolute top-0 left-0 right-0"}`}
                >
                  <div className="bg-white rounded-xl shadow-custom p-8 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-white p-1 rounded-full shadow-md">
                        <Image
                          src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="pt-10 text-center">
                      <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
                      <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? "bg-primary w-8" : "bg-gray-300"}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

