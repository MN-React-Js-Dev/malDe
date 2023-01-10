import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import AboutImg from '../../assets/images/about-img.svg';
import UiuxImg from '../../assets/images/ui_ux.jpg';
import Img1 from '../../assets/images/imgnew-4.jpg'
import Img2 from '../../assets/images/consiting.jpg'
import Img3 from '../../assets/images/thisisengineering.jpg'
import Img4 from '../../assets/images/cstwebDev.jpg'
import Img5 from '../../assets/images/niclas-ill.jpg'
import Img6 from '../../assets/images/jasonTeam.jpg'
import Img7 from '../../assets/images/ux-indonesia.jpg'
import Img8 from '../../assets/images/images.jpg'




const CorosalSection = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <>
            <section className='corosal_cst'>
                <h1 className='text-center m-5 cst-ehading'>Industries<span className='cst-ehading-span'>We</span>Serve</h1>
                <Carousel className='cst-coro-m' responsive={responsive} swipeable={false}
                >
                    <div class='row'>
                        <section id="aboutnnew_corosal " class="aboutnew ">
                            <div class="container">
                                <div class="row right-content ">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img ">
                                        <img src={Img1} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6 ">
                                        <h4><b>Web Application & Devlopmemt</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Web & software</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img2} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>DevOps Consuting</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img3} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Legnacy software Modernization</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img4} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Custom software Devlopment</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img4} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Mobile App Devlopment</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img6} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Dedicated Devlopment Teams</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={UiuxImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Ui/Ux Design</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img7} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Testing & QA</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={Img8} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>E-commerce Application Development</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                     
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Deigital Tranformation</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>AR/VR</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Blockchain</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Product Enginnering</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Enterprise Mobility</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>IOT</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Cloud Computing</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Machine Learning</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Data Enginnering</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Data Analytics</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class='row'>
                        <section id="aboutnnew_corosal" class="aboutnew">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-6 d-flex align-items-center justify-content-center about-img">
                                        <img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in" />
                                    </div>
                                    <div class="col-lg-6">
                                        <h4><b>Design Studio</b></h4>
                                        <p>Deliver the kind of experience every fan dreams about with modern digital interfaces and expansive online reach</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </Carousel>
            </section>
        </>
    )
}

export default CorosalSection