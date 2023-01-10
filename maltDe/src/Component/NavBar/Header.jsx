import React, { useState } from 'react'
import { Link } from "react-scroll"

const Header = () => {
  const [flag, setflag] = useState(false)
  const handleonclick = (e) => {
    e.preventDefault();
    setflag(!flag)
  }
  return (
    <>
      <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <a href="#" className="logo" >
                  <h4>MALTDE
                    {/* <img src="assets/images/logo-icon.png" alt="" /> */}
                  </h4>
                </a>

                <ul className={`nav ${flag ? "cst-open-close" : ""} `}>
                  <li><Link className="scroll-to-section gap-to" to="top" spy={true} smooth={true}>Home</Link> </li>
                  <li><Link className="scroll-to-section gap-to" to="about" spy={true} smooth={true}>About Us</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="features" spy={true} smooth={true}>Features</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="services" spy={true} smooth={true}>Services</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="portfolio" spy={true} smooth={true}>Hire Team</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="portfolio" spy={true} smooth={true}>Careear</Link></li>
                  <li><Link className="scroll-to-section gap-to" to="contact" spy={true} smooth={true}>Contact Us</Link></li>
                  <li><Link className="scroll-to-section"  to="contact" spy={true} smooth={true}>
                    <div className="main-blue-button">
                      <a href="#contact">Get Your Quote</a>
                    </div>
                  </Link>
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