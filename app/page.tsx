import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Clients from '@/components/clients';
import About from '@/components/about';
import Products from '@/components/products';
import ERPModules from '@/components/erp-modules';
import Industries from '@/components/industries';
import Testimonials from '@/components/testimonials';
import WhyChooseUs from '@/components/why-choose-us';
import CTA from '@/components/cta';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Products />
      <ERPModules />
      <Industries />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
