import './App.css'
import AboutUsSection from './Component/Layout/AboutUsSection'
import ContactUsForm from './Component/Layout/ContactUsForm'
import FeatureSection from './Component/Layout/FeatureSection'
import HeroSection from './Component/Layout/HeroSection'
import Logosection from './Component/Layout/Logosection'
import Portfolio from './Component/Layout/Portfolio'
import Footer from './Component/NavBar/Footer'
import Header from './Component/NavBar/Header'
import OurServicesSection from './vendor/OurServicesSection'

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <AboutUsSection />
      <OurServicesSection />
      <Logosection/>
      {/* <Portfolio /> */}
      <ContactUsForm />
      <Footer />
    </>
  )
}

export default App
