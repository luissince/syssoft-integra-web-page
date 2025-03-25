"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Mail, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title centered text-gray-800 inline-block">Contáctanos</h2>
          <p className="text-gray-600 mt-8 max-w-3xl mx-auto">
            Estamos aquí para responder a tus preguntas y ayudarte a encontrar la mejor solución para tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-custom p-8 mb-8">
              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Ubicación:</h4>
                  <p className="text-gray-600">Carr. Central 6300, Ate 15487, Perú</p>
                  <p className="text-gray-600 mb-1">Avenida Ote., Concepción 12125, Perú</p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Email:</h4>
                  <p className="text-gray-600">
                    <a href="mailto:syssoftintegra@gmail.com" className="hover:text-primary transition-colors">
                      syssoftintegra@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Teléfono:</h4>
                  <p className="text-gray-600 mb-1">
                    <a href="tel:+51966750883" className="hover:text-primary transition-colors">
                      +51 966750883
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+51931341082" className="hover:text-primary transition-colors">
                      +51 931341082
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-custom p-8">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Horario de atención</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes - Viernes:</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado:</span>
                  <span className="text-gray-800 font-medium">9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo:</span>
                  <span className="text-gray-800 font-medium">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-xl shadow-custom p-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-6">Envíanos un mensaje</h4>

              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 mb-6">
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-700">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>

                  <div className="space-y-2 mb-6">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-custom">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.2003837965693!2d-76.86683990141188!3d-12.008978098997126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c2498a58f57f%3A0x1f06655c9ca8ddc7!2sCarr.%20Central%206300%2C%20Ate%2015487!5e0!3m2!1ses-419!2spe!4v1742922566799!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Ubicación de SysSoft Integra"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

