import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ImpactPackages from "@/components/ImpactPackages";
import MissionGallery from "@/components/MissionGallery";
import ImpactProcess from "@/components/ImpactProcess";
import ImpactMap from "@/components/ImpactMap";
import HeartOfService from "@/components/HeartOfService";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileDonateBar from "@/components/MobileDonateBar";

export default function Home() {
  return (
    <main className="relative min-h-screen pb-28 md:pb-0">
      <Navbar />
      <Hero />
      <TrustBar />
      <ImpactPackages />
      <MissionGallery />
      <ImpactProcess />
      <ImpactMap />
      <HeartOfService />
      <Testimonials />
      <Partners />
      <FinalCTA />
      <Footer />
      <MobileDonateBar />
    </main>
  );
}
