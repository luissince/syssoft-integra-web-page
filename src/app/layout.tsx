import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Raleway, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SysSoft Integra",
  description:
    "Sistema web y escritorio para realizar ventas, compras, control de inventario, facturación electrónica, guia de remisión, para todo tipo de negocios.",
  keywords:
    "Facturación electrónica, ventas de productos, compras, inventario de productos, kardex, cuentas por pagar, cuentas por cobrar, guía de remisión, SUNAT, sunat, CPE",
  authors: [
    { name: "SysSoft Integra" },
    { name: "Luis Lara", url: "https://www.linkedin.com/in/xander-ls-907566350/" }
  ],
  icons: {
    icon: 'favicon.ico',
    apple: 'favicon.ico',
  },
  robots: "index, follow",
  openGraph: {
    title: "SysSoft Integra - Sistema de Gestión Empresarial",
    description: "Sistema web y escritorio para realizar ventas, compras, control de inventario, facturación electrónica, guia de remisión, para todo tipo de negocios.",
    url: "https://www.syssoftintegra.com",
    siteName: "SysSoft Integra",
    images: [
      {
        url: "banners/image.png", // Crea una imagen de vista previa
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_PE", // Específico para Perú
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SysSoft Integra - Sistema de Gestión Empresarial",
    description: "Sistema web y escritorio para realizar ventas, compras, control de inventario, facturación electrónica, guia de remisión, para todo tipo de negocios.",
    images: ["banners/image.png"], // Imagen específica para Twitter
  },
  alternates: {
    canonical: "https://www.syssoftintegra.com", // Reemplaza con tu dominio real
  },
  // ... tus metadatos existentes
  other: {
    'geo.region': 'PE', // Código de país para Perú
    'geo.placename': 'Lima', // Ciudad
    'geo.position': '-12.0464;-77.0428', // Coordenadas de Lima
  },

}

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width',
  userScalable: false,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${raleway.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

