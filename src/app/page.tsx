import {
  AboutSection,
  AudienceSection,
  HeroSection,
  ServicesSection,
} from '@/components';

export default function Home() {
  return (
    <main className="font-sans font-normal text-white">
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
    </main>
  );
}
