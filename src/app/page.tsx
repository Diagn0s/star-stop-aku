import { HeroSection } from "@/components/hero-section";
import { ContactBar } from "@/components/contact-bar";
import { BatterySelector } from "@/components/battery-selector";
import { AboutSection } from "@/components/about-section";
import { FeaturesSection } from "@/components/features-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { BlogSection } from "@/components/blog-section";
import { BrandsSection } from "@/components/brands-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ContactBar />
      <BatterySelector />
      <AboutSection />
      <FeaturesSection />
      <ProductsSection />
      <ServicesSection />
      <FaqSection />
      <CtaSection />
      <BlogSection />
      <BrandsSection />
    </>
  );
}
