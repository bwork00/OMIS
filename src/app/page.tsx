import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ClientsSection from "./ClientsSection";
import ChaosSection from "./ChaosSection";
import BusinessMapSection from "./BusinessMapSection";
import IndustriesSection from "./IndustriesSection";
import SolutionsSection from "./SolutionsSection";
import AIAgentsSection from "./AIAgentsSection";
import ProductsAndVRSection from "./ProductsAndVRSection";
import AuditCalculatorSection from "./AuditCalculatorSection";
import CasesSection from "./CasesSection";
import MethodologySection from "./MethodologySection";
import WhyOMISSection from "./WhyOMISSection";
import FounderSection from "./FounderSection";
import CareerSection from "./CareerSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import FloatingWidget from "./FloatingWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ClientsSection />
      <ChaosSection />
      <BusinessMapSection />
      <IndustriesSection />
      <SolutionsSection />
      <AIAgentsSection />
      <ProductsAndVRSection />
      <AuditCalculatorSection />
      <CasesSection />
      <MethodologySection />
      <WhyOMISSection />
      <FounderSection />
      <CareerSection />
      <ContactSection />
      <Footer />
      <FloatingWidget />
    </main>
  );
}
