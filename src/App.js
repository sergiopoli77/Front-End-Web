import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Clients from "./Components/Clients";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
