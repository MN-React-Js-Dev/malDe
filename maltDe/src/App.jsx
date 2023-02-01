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
import Pricing from './Component/Layout/Pricing'

function App() {

  return (
    <>
    
          <Header />
          <HeroSection />
          <AboutUsSection />
          <CorosalSection />
          {/* <Newsection /> */}
          <OurServicesSection />
          <Logosection />
          <Pricing/>
          <FeatureSection />
          <ContactUsForm />
           <Footer />
     </>
  )
}

export default App
