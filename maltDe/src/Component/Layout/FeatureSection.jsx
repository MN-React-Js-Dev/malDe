import React from 'react'
import { useTranslation } from 'react-i18next';

const FeatureSection = () => {
  const { t } = useTranslation();

  return (
    <>
    <div id="features" className="features section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="features-content">
            <div className="row">
              <div className="col-lg-3">
                <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0s">
                  <div className="first-number number">
                    <h6>01</h6>
                  </div>
                  <div className="icon"></div>
                  <h4>{t("reachOut")}</h4>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="features-item second-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="second-number number">
                    <h6>02</h6>
                  </div>
                  <div className="icon"></div>
                  <h4>{t("developaStrategy")}</h4>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div className="third-number number">
                    <h6>03</h6>
                  </div>
                  <div className="icon"></div>
                  <h4>{t("implementation")}</h4>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="features-item second-feature last-features-item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div className="fourth-number number">
                    <h6>04</h6>
                  </div>
                  <div className="icon"></div>
                  <h4>{t("analyzetheresult")}</h4>
                  <div className="line-dec"></div>
                  <p>Lorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-lg-12">
          <div className="skills-content">
            <div className="row">
              <div className="col-lg-3">
                <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                  <div className="progress" data-percentage="80">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        80%<br/>
                        <span>HTML/CSS/JS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                  <div className="progress" data-percentage="60">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        60%<br/>
                        <span>Wordpress</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                  <div className="progress" data-percentage="90">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        90%<br/>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="skill-item last-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                  <div className="progress" data-percentage="70">
                    <span className="progress-left">
                      <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                      <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                      <div>
                        70%<br/>
                        <span>Photoshop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </div>
  </>
  )
}

export default FeatureSection