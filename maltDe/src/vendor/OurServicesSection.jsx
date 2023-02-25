import React from 'react'
import { useTranslation } from 'react-i18next'
import ServiceIcon from '../assets/images/service-icon-01.png'
import ServiceIcon2 from '../assets/images/service-icon-02.png'
import ServiceIcon3 from '../assets/images/service-icon-03.png'

const OurServicesSection = () => {
    const { t } = useTranslation();

    return (
        <>
            <div id="services" class="our-services section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                {/* <h6>Our Services</h6> */}
                                <h2>{t("discoverWhatWeDo")}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("webDevelopment")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon2} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("softwareDevelopment")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon3} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("devOpsCloud")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon3} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("mobileAppDevlopment")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon2} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("digitalTranformation")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon3} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("blockchainDevelopment")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon3} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("productEngineering")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>UI & UX Design</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon3} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("fullStackDevelopment")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="icon">
                                            <img src={ServiceIcon2} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="right-content">
                                            <h4>{t("qualityAssuranceTesting")}</h4>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dormque laudantium.</p>
                                        </div>
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

export default OurServicesSection