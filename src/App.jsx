import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Services from "./components/Services";
import TopBanner from "./components/TopBanner";

function App() {
  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <About />
      <Services />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
