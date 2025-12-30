import SharpHeader from '../components/SharpHeader';
import Hero from '../components/Hero';
import LogoTicker from '../components/LogoTicker';
import Tickers from '../components/Tickers';
import AllInOne from '../components/AllInOne';
import SplashSection from '../components/SplashSection';
import ScrollingGallery from '../components/ScrollingGallery';
import Clients from '../components/Clients';
import Proof from '../components/Proof';
import Features from '../components/Features';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <SharpHeader />
      <Hero />
      <LogoTicker />
      <SplashSection imageSrc="/hero-2.png" alt="Splash 1" title="IMMERSIVE" />
      <Tickers />
      <div id="about">
        <AllInOne />
        <ScrollingGallery />
        <Clients />
        <SplashSection imageSrc="/hero-3.png" alt="Splash 2" title="EXPERIENCE" />
        <Proof />
        <Features />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <FAQ />
      <Footer />
    </main>
  );
}
