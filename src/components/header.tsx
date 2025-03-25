"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"} mt-10 lg:mt-10`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="#" className="flex items-center">
          <Image src="/images/logo.png" alt="SysSoft Integra Logo" width={45} height={45} className="mr-2" />
          <div className="flex flex-col">
            <span
              className={`text-primary text-xl font-bold transition-colors ${isScrolled ? "text-primary" : "text-primary"}`}
            >
              SysSoftIntegra
            </span>
            <span className="text-xs text-gray-500">Soluciones Empresariales</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-8">
            <li>
              <Link
                href="#home"
                className={`flex items-center text-gray-700 hover:text-primary font-medium transition-colors ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
                title="Inicio"
              >
                <Home className="h-5 w-5" />
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`text-gray-700 hover:text-primary font-medium transition-colors ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
              >
                Nosotros
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="#services"
                className={`flex items-center text-gray-700 hover:text-primary font-medium transition-colors ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
              >
                Características
                <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1">
                  <Link href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Reportes Inteligentes
                  </Link>
                  <Link href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Cotizaciones
                  </Link>
                  <Link href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Clientes
                  </Link>
                  <Link href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Inventario
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="#pricing"
                className={`text-gray-700 hover:text-primary font-medium transition-colors ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
              >
                Precios
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className={`text-gray-700 hover:text-primary font-medium transition-colors ${isScrolled ? "text-gray-700" : "text-gray-700"}`}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="https://app.syssoftintegra.com"
                target="_blank"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm"
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute w-full shadow-lg">
          <ul className="flex flex-col py-4 px-4">
            <li className="py-2 border-b border-gray-100">
              <Link
                href="#home"
                className="text-gray-700 hover:text-primary font-medium flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5 mr-2" /> Inicio
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link
                href="#about"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link
                href="#services"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Características
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link
                href="#pricing"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Precios
              </Link>
            </li>
            <li className="py-2 border-b border-gray-100">
              <Link
                href="#contact"
                className="text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li className="py-2 mt-2">
              <Link
                href="https://app.syssoftintegra.com"
                target="_blank"
                className="bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-sm inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

