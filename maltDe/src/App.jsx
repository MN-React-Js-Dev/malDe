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
import { useTranslation } from "react-i18next";
import { ExampleComponent } from './translations/ExampleComponent.jsx'
  

function App() {

  return (
    <>
       <Header />
      <HeroSection />
      <AboutUsSection />
      <CorosalSection />
      <OurServicesSection />
      <Logosection />
      <Pricing />
      <FeatureSection />
      <ContactUsForm />
      <Footer />
      {/* <Newsection /> */}

    </>
  )
}

export default App
