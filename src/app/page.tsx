import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MissionGallery from "@/components/MissionGallery";
import ImpactProcess from "@/components/ImpactProcess";
import Partners from "@/components/Partners";
import HeartOfService from "@/components/HeartOfService";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <MissionGallery />
      <ImpactProcess />
      <Partners />
      <HeartOfService />
      <Footer />
    </main>
  );
}
