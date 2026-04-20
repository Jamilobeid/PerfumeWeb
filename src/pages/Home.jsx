import AboutSection from '../components/AboutSection';
import BestSellers from '../components/BestSellers';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <AboutSection />
      <Featured />
      <CTA />
    </>
  );
}

export default Home;