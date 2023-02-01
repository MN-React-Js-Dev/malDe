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
                                <img src={AboutLeft} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                            <div className="section-heading">
                                <h6>About Us</h6>
                                <h2>Top <em>tech</em> agency &amp; with global <span>outreach</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>5+</h4>
                                        <h6>countries serve</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>60+</h4>
                                        <h6>developer team</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>750+</h4>
                                        <h6>projects finished</h6>
                                    </div>
                                </div>
                            </div>
                            <p> We are serving globally with a team of 60+ qualified developers working to the highest standard and always up to date with the latest technologies. We pride ourselves in quick response time and year round availability of developers as per your requirements and capacity needs.</p>
                            <div className="main-green-button"><a href="#">Discover company</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection