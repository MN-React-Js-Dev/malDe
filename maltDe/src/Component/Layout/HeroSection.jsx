import React from 'react'
import HeroImg from '../../assets/images/banner-right-image.png'
const HeroSection = () => {
    return (
        <>
            <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-6 align-self-center">
                                    <div class="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <div class="row">
                                            <div class="col-lg-4 col-sm-4">
                                                <div class="info-stat">
                                                    <h6>Agency Status:</h6>
                                                    <h4>Ready Work</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-sm-4">
                                                <div class="info-stat">
                                                    <h6>Price:</h6>
                                                    <h4>$720/Month</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-sm-4">
                                                <div class="info-stat">
                                                    <h6>Schedules</h6>
                                                    <h4>$450/Meeting</h4>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">                                          
                                                <h2>Digital Challenges &amp; Generate Growth</h2>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="main-green-button scroll-to-section">
                                                    <a href="#contact">Get Your Quote</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <img src={HeroImg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection