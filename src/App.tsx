import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50/30 to-yellow-50/20">
      <Header />
      <div className="pt-20">
        <Hero />
        <Services />
        <About />
        <Process />
        <Portfolio />
        <WhyChooseUs />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
