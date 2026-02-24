import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import MissionGallery from "@/components/MissionGallery";
import HeartOfService from "@/components/HeartOfService";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <MissionGallery />
      <HeartOfService />
      <Footer />
    </main>
  );
}
