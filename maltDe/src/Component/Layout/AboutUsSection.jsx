import React from 'react'
import { useTranslation } from 'react-i18next';
import AboutLeft from '../../assets/images/about-left-image.png'
const AboutUsSection = () => {
    const { t } = useTranslation();
    
 
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
                                <h6>{t('aboutUs')}</h6>
                                <h2>{t("top")} <em>{t("tech")}</em> {t("agency")} &amp; {t("with")} {t("global")} <span>{t("outreach")}</span></h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>5+</h4>
                                        <h6>{t("countriesServed")}</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>60+</h4>
                                        <h6>{t("developersTeam")}</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <div className="about-item">
                                        <h4>750+</h4>
                                        <h6>{t("projectsFinished")}</h6>
                                    </div>
                                </div>
                            </div>
                            <p> {t("WeareservinggloballyPara")}</p>
                            <div className="main-green-button"><a href="#">{t("discoverCompany")}</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection