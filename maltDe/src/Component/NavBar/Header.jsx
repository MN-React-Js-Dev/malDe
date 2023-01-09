import React, { useState } from 'react'

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
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#features">Features</a></li>
                  <li className="scroll-to-section"><a href="#about">About Us</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#portfolio">Hire Team</a></li>
                  <li className="scroll-to-section"><a href="#portfolio">Careear</a></li>
                  {/* <li className="scroll-to-section"><a href="#portfolio">Case Studies</a></li> */}
                  <li className="scroll-to-section"><a href="#contact">Contact Us</a></li>
                  <li className="scroll-to-section"><div className="main-blue-button"><a href="#contact">Get Your Quote</a></div></li>
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