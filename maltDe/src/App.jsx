import './App.css'
import AboutUsSection from './Component/Layout/AboutUsSection'
import CorosalSection from './Component/Layout/CorosalSection'
import ContactUsForm from './Component/Layout/ContactUsForm'
import FeatureSection from './Component/Layout/FeatureSection'
import HeroSection from './Component/Layout/HeroSection'
import Logosection from './Component/Layout/Logosection'
import Newsection from './Component/Layout/Newsection'
import Portfolio from './Component/Layout/Portfolio'
import Footer from './Component/NavBar/Footer'
import Header from './Component/NavBar/Header'
import OurServicesSection from './vendor/OurServicesSection'
import { Route, Router } from 'react-router-dom'

function App() {

  return (
    <>
    
          <Header />
          <HeroSection />
          <FeatureSection />
          <AboutUsSection />
          <CorosalSection />
          <Newsection />
          <OurServicesSection />
          <Logosection />
          {/* <Portfolio /> */}
          <ContactUsForm />
          <Footer />
     </>
  )
}

export default App
