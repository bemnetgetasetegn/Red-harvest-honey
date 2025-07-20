import About from "./Components/About";
import Features from "./Components/Features";
import Hero from "./Components/Hero";
import HoneyFooter from "./Components/HoneyFooter";
import HoneyServiceSection from "./Components/HoneyServiceSection";
import NavBar from "./Components/NavBar";
import Testimonial from "./Components/Testimonials";

const App = () => {
  return (
    <div className="bg-creamy">
      <NavBar />
      <Hero />
      <Features />
      <About />
      <HoneyServiceSection />
      <Testimonial />
      <HoneyFooter />
    </div>
  );
};

export default App;
