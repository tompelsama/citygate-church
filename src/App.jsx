import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Story from "./components/Story/Story";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      {/* <Story /> */}
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
