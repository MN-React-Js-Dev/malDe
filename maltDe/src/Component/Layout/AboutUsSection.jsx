import React from 'react'
import AboutLeft from '../../assets/images/about-left-image.png'
const AboutUsSection = () => {
    return (
        <>
            <div id="about" className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                <img src={AboutLeft} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="section-heading">
                                <h6>About Us</h6>
                                <h2>Top <em>marketing</em> agency &amp; consult your website <span>with us</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>750+</h4>
                                        <h6>projects finished</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>340+</h4>
                                        <h6>happy clients</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>128+</h4>
                                        <h6>awards</h6>
                                    </div>
                                </div>
                            </div>
                            <p><a rel="nofollow" href="#" target="_parent">SEO Dream</a> is free digital marketing CSS template provided by TemplateMo website. You are allowed to use this template for your business websites. Please DO NOT redistribute this template ZIP file on any Free CSS collection websites. You may contact us for more information. Thank you.</p>
                            <div className="main-green-button"><a href="#">Discover company</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection