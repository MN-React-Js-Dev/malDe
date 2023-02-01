import React, { useState, useEffect } from 'react'
import ContactIcon from '../../assets/images/contact-icon-01.png'
import ContactIcon2 from '../../assets/images/contact-icon-02.png'
import LocationIcon3 from '../../assets/images/contact-icon-03.png'

const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const ContactUsForm = () => {
  const [submit, setsubmit] = useState(false)

  const [formData, setformData] = useState({
    name: "",
    surname: "",
    email: "",
    subject: "",
    message: ""
  })
  const [error, setError] = useState({ ...formData })

  const handleInpues = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
    switch (name) {
      case "name":
        error.name = value.length > 0 ? "" : "Fields Are Required"
        break;
      case "surname":
        error.surname = value.length > 0 ? "" : "Fields Are Required"
        break;
      case "email":
        if (!value) {
          error.email = value.length > 0 ? "" : "Enter your email"
        }
        else {
          error.email = emailRegx.test(value) === false && "Enter your valid email"
        }
        break;

      default:
        break;
    }

    setError(error)
  }
  function validate(value) {
    if (!formData.email) {
      error.email = "Enter email"
    }
    if (!formData.surname) {
      error.surname = "Enter surname"
    }
    if (!formData.name) {
      error.name = "Enter name"
    }

    return error
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && Object.keys(formData).length !== 0) {
    }
  }, [])


  const hanldeContactForm = (e) => {
    e.preventDefault();
    setsubmit(true)
    setError(validate(formData));
  }

  return (
    <>
      <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                      <h2>Contact Us </h2>
                      {/* <h2>Fill Out The Form Below To <span>Get</span> In <em>Touch</em> With Us</h2> */}
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="row">
                      <div className="col-lg-6">
                        <fieldset>
                          <input type="text" name="name" id="name" className={error.name.length > 0 && "error_red"} placeholder="Name" autocomplete="on" value={formData.name} onChange={handleInpues} />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input type="text" name="surname" id="surname" placeholder="Surname" className={error.surname.length > 0 && "error_red"} autocomplete="on" value={formData.surname} onChange={handleInpues} />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className={error.email.length > 0 && "error_red"} placeholder="Your Email" value={formData.email} onChange={handleInpues} />
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <input type="text" name="subject" id="subject" placeholder="Subject" autocomplete="on" value={formData.subject} onChange={handleInpues} />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" value={formData.message} onChange={handleInpues}></textarea>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button type="button" className="main-button" onClick={hanldeContactForm}>Send Message Now</button>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="contact-info">
                      <ul>
                        <li>
                          <div className="icon">
                            <img src={ContactIcon} alt="email icon" />
                          </div>
                          <a href="#">info@company.com</a>
                        </li>
                        <li>
                          <div className="icon">
                            <img src={ContactIcon2} alt="phone" />
                          </div>
                          <a href="#">+001-002-0034</a>
                        </li>
                        <li>
                          <div className="icon">
                            <img src={LocationIcon3} alt="location" />
                          </div>
                          <a href="#">26th Street, Digital Villa</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm