import React from 'react'
import htmlLogo from '../../assets/images/html.png'
import CssLogo from '../../assets/images/css-3-.png'
import JavasLogo from '../../assets/images/java-(2).png'
import ReactLogo from '../../assets/images/atom.png'
import SwiftLogo from '../../assets/images/swift.png'
import PythonLogo from '../../assets/images/python.png'
import AngularLogo from '../../assets/images/angularjs.png'
import FlutterLogo from '../../assets/images/flutter.png'
import PhpLogo from '../../assets/images/php-(1).png'
import MysqLogo from '../../assets/images/mysql-(1).png'
import AndroidLogo from '../../assets/images/android-(1).png'
import JavaLogo from '../../assets/images/java-script-(1).png'



const Logosection = () => {
    return (
        <>
          <div class="container p-5">
            <div id='logo-section' className="row brand-style-1">

                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.1s" >
                            <img src={htmlLogo} alt="" className="img-fluid-code blink_me0" />
                        </div>
                    </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.2s" >
                             <img src={CssLogo} alt="" className="img-fluid-code blink_me1 " /></div>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.5s" >
                            <img src={JavaLogo} alt="" className="img-fluid-code blink_me2 " /></div>
                    </div>
                </div>

                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.3s" >
                            <img src={JavasLogo} alt="" className="img-fluid-code blink_me3 " /></div>
                    </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.4s" >
                            <img src={ReactLogo} alt="" className="img-fluid-code blink_me4 " />
                        </div>
                    </div>
                </div>


               


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={PythonLogo} alt="" className="img-fluid-code blink_me5 " />
                        </div>
                    </div>
                </div>


                {/* <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={AngularLogo} alt="" className="img-fluid-code blink_me " />
                        </div>
                    </div>
                </div> */}


                {/* <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={FlutterLogo} alt="" className="img-fluid-code blink_me " />
                        </div>
                    </div>
                </div> */}


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={PhpLogo} alt="" className="img-fluid-code blink_me6 " />
                        </div>
                    </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={MysqLogo} alt="" className="img-fluid-code blink_me7 " />
                        </div>
                    </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={AndroidLogo} alt="" className="img-fluid-code blink_me8 " />
                        </div>
                    </div>
                </div>


                <div className="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-6 text-center">
                    <div className="client-logo">
                        <div className="client-logo-img wow fadeInUp  animated" data-wow-delay="0.6s" >
                            <img src={SwiftLogo} alt="" className="img-fluid-code blink_me9 " />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Logosection