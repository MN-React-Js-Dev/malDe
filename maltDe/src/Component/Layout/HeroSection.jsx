import React from 'react'
import { useTranslation } from 'react-i18next';


import HeroImg from '../../assets/images/banner-right-image.png'
const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 align-self-center">
                                    <div className="left-content header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                                        <div className="row">
                                            {/* <div className="col-lg-4 col-sm-4">
                                                <div className="info-stat">
                                                    <h6>Agency Status:</h6>
                                                    <h4>Ready Work</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="info-stat">
                                                    <h6>Price:</h6>
                                                    <h4>$720/Month</h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-4">
                                                <div className="info-stat">
                                                    <h6>Schedules</h6>
                                                    <h4>$450/Meeting</h4>
                                                </div>
                                            </div> */}
                                         

                                            <div className="col-lg-12">
                                                {/* <h2>Digital Challenges &amp; Generate Growth</h2> */}
                                                {/* <h2>Top Software Developers In Tech for your company.</h2> */}
                                                <h2 className='blink_me'>{t('topSoftwareDeveloper')}</h2>


                                            </div>
                                            <div className="col-lg-12">
                                                <div className="main-green-button scroll-to-section">
                                                    <a href="#contact">{t("contactUs")}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
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