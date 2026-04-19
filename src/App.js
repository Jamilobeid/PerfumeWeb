
import './App.css';
import AboutSection from './components/AboutSection';
import BestSellers from './components/BestSellers';
import Featured from './components/Featured';
import Header from './components/Header';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <AboutSection />
      <Featured />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
