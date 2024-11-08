import {
  AboutSection,
  AudienceSection,
  FAQSection,
  Footer,
  HeroSection,
  Preloader,
  ServicesSection,
  TeamSection,
  TestimonialSection,
} from '@/components';

export default function Home() {
  return (
    <main className="font-sans font-normal text-white">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
