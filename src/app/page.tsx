import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { MainCard } from "@/components/MainCard";
import { SectionTitleSecond } from "@/components/SectionTitleSecond";


export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle />

      <Testimonials />
      {/* <SectionTitleSecond /> */}
      <MainCard />

{/* 
      <Faq />
      <Cta /> */}
    </Container>
  );
}
