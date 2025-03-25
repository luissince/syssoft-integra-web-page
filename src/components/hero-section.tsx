"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"

interface SlideProps {
  title: string
  description: string
  image: string
  imageWidth: number
  benefits: string[]
}

const slides: SlideProps[] = [
  {
    title: "Facturación y boletas electrónicas",
    description:
      "Con SisSoftIntegra es la forma más fácil de emitir los comprobantes. Cuenta con una interfaz muy fácil y amigable que lo puede entender cualquiera.",
    image: "/images/modulo-venta.png",
    imageWidth: 200,
    benefits: [
      "Cumple con todos los requisitos de la SUNAT",
      "Envío automático por correo electrónico",
      "Interfaz intuitiva y fácil de usar",
    ],
  },
  {
    title: "Impresora POS-D BASIC 230",
    description:
      "Impresora térmica de 80 mm, cable USB, cable de poder, adaptador de corriente 220v - 12v, velocidad de impreción de 260 mm/s.",
    image: "/images/basic-230.png",
    imageWidth: 130,
    benefits: ["Compatible con Windows 7, 8.1, 10 y 11", "Velocidad de impresión de 260 mm/s", "Garantía de 1 año"],
  },
  {
    title: "Lector de código de barras",
    description:
      "Lector de código de barras imager 1D y 2D con excelente capacidad de lectura de códigos incluso sobre pantallas electrónicas y reconstrucción de códigos dañados.",
    image: "/images/codigo-barras.png",
    imageWidth: 150,
    benefits: ["Grado de protección IP-54", "Lectura de códigos 1D y 2D", "Funciona en pantallas electrónicas"],
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="gradient-bg text-white pt-40 pb-20 min-h-[700px] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/about-bg.png')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${currentSlide === index ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
            >
              <div className="pt-2">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`px-5 ${currentSlide === index ? "animate-slideInRight" : ""}`}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                    <p className="text-white/90 text-lg mb-6">{slide.description}</p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Beneficios:</h3>
                      <ul className="space-y-3">
                        {slide.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-4">
                      <Link
                        href="https://api.whatsapp.com/send?phone=51966750883"
                        target="_blank"
                        className="btn-primary"
                      >
                        Contactar
                      </Link>
                      <Link
                        href="#about"
                        className="btn-outline border-white text-white hover:bg-white hover:text-primary"
                      >
                        Más información
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`flex justify-center items-center px-5 ${currentSlide === index ? "animate-fadeIn" : ""}`}
                  >
                    <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        width={slide.imageWidth * 1.5}
                        height={slide.imageWidth * 1.5}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
          <span className="sr-only">Previous</span>
        </button>

        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6 text-white" />
          <span className="sr-only">Next</span>
        </button>

        <div className="flex justify-center mt-10 space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="sr-only">Slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

