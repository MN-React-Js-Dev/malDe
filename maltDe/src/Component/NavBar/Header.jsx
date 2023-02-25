import React, { useState } from 'react'
import { Link } from "react-scroll"
import { useTranslation } from "react-i18next";
import "../../i18n.jsx";
import i18n from "i18next";


const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('gr');
  const [flag, setflag] = useState(false)
  const handleonclick = (e) => {
    e.preventDefault();
    setflag(!flag)
  }

  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo" >
                  <h4>devvy co
                    {/* <img src="assets/images/logo-icon.png" alt="" /> */}
                  </h4>
                </a>

                <ul className={`nav ${flag ? "cst-open-close" : ""} `}>
                  <li><Link className="scroll-to-section gap-to" to="top" spy={true} smooth={true}>{t("home")}</Link> </li>
                  <li><Link className="scroll-to-section gap-to" to="about" spy={true} smooth={true}>{t("aboutUs")}</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="features" spy={true} smooth={true}>{t("howItWorks")}</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="services" spy={true} smooth={true}>{t("services")}</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="pricing-section" spy={true} smooth={true}>{t("pricing")} </Link></li>
                  <li><Link className="scroll-to-section gap-to" to="contact" spy={true} smooth={true}>{t("contactUs")}</Link></li>
                  <li><Link className="scroll-to-section" to="contact" spy={true} smooth={true}>
                    <div className="main-blue-button">
                      <a href="#contact">{t("getYourQuote")}</a>
                    </div>
                  </Link>
                  </li>
                  <li>
                    <select name="language" id="language" className="scroll-to-section gap-to language-class" onClick={handleOnclick} >
                      <option value="en">English</option>
                      <option value="gr" selected>Germany</option>
                    </select>
                  </li>
                </ul>
                <a className='menu-trigger' onClick={handleonclick}>
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>

  )
}

export default Header