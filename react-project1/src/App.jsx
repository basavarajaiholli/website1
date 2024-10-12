import HomeSection from "./Components/HomeSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs.jsx";
import ContactUs from "./Components/ContactUs.jsx";
import Footer from "./Components/footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <HeroSection />
        <HomeSection />
        <AboutUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}
