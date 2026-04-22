'use client';

import HeroVideo from './components/HeroVideo';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <HeroVideo />
      <About />
      <Services />
      <Testimonials />
      <CTAFinal />
      <div className="divider"></div>
      <Footer />
    </main>
  );
}