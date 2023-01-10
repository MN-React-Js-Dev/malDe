import React from 'react'
import AboutImg from '../../assets/images/about-img.svg'
const Newsection = () => {
    return (
        <>
            <section id="aboutnnew" class="aboutnew">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-lg-6 pt-5 pt-lg-0 section-heading">
                            <h2>Top Software Developers in <em>Tech</em> Recruiting &amp; fur ihr <span>Unternehmen </span></h2>


                            <p data-aos="fade-up" data-aos-delay="100">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                            <div class="row features-item">


                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <i class="bx bx-cube-alt"></i>
                                    <h4 className='cstm_h4'>Infrastructure</h4>
                                    <ul>
                                        <li className='cstm'><p>Sysytem Administrations</p></li>
                                        <li className='cstm'><p>DevOps</p></li>
                                        <li className='cstm'><p>Cloud</p></li>
                                    </ul>
                                </div>
                                <div class="col-md-6" data-aos="fade-up" data-aos-delay="200">
                                    <i class="bx bx-cube-alt"></i>
                                    <h4 className='cstm_h4'>Beratung</h4>
                                    <ul>
                                        <li className='cstm'><p>IT-sysyeme</p></li>
                                        <li className='cstm'><p>SAP</p></li>
                                    </ul>
                                </div>
                                <div class="col-md-12" data-aos="fade-up" data-aos-delay="100">
                                    <i class="bx bx-receipt"></i>
                                    <h4 className='cstm_h4'>Software Devlopmemt </h4>
                                    <ul>
                                        <li className='cstm'><p>Web(Frontend, backend, Fullstack)</p></li>
                                        <li className='cstm'><p>Mobile(Ioc, Android)</p></li>
                                        <li className='cstm'><p>Embeded</p></li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="main-green-button"><a href="#">Join Now</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
                            <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Newsection