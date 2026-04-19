
import './App.css';
import AboutSection from './components/AboutSection';
import BestSellers from './components/BestSellers';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestSellers />
      <AboutSection />
    </div>
  );
}

export default App;
