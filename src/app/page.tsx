import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { IconBoxes } from "@/components/icon-boxes"
import { AboutUs } from "@/components/about-us"
// import { Clients } from "@/components/clients"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
// import { FacebookChat } from "@/components/facebook-chat"
import { TrustBadges } from "@/components/trust-badges"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* <FacebookChat /> */}
      <ScrollToTop />
      <TopBar />
      <Header />
      <div id="home">
        <HeroSection />
      </div>
      <div id="trust">
        <TrustBadges />
      </div>
      <div id="solutions">
        <IconBoxes />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      {/* <div id="clients">
        <Clients />
      </div> */}
      <div id="services">
        <Features />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

