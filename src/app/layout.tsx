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
  title: "SysSoft Integra - web 🌐",
  description:
    "Sistema web y escritorio para realizar ventas, compras, control de inventario, facturación electrónica, etc.",
  keywords:
    "Facturación electrónica, ventas de productos, compras, inventario de productos, kardex, cuentas por pagar, cuentas por cobrar",
  authors: [
    { name: "SysSoft Integra" },
    { name: "Luis Lara", url: "https://www.linkedin.com/in/xander-ls-907566350/" }
  ],
  icons: 'favicon.ico',
  robots: "index, follow",
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

