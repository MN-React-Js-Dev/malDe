import React from 'react'
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation();

    return (
        <>
            <div class="pricing-section" id="pricing-section">
                <div class="container p-5">
                    <h3 class="newh2 text-center p-5">{t("Flexibilityiscore")} </h3>
                    <div class="row">
                        <div class="col-lg-3 col-md-12 mb-2">
                            <div class="card extrclss-cst">
                                <div class="h-100 flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <span class="price"> € </span><br />
                                            <br />
                                            <h2 class="card-title">{t("perHour")}</h2>
                                            <small>{t("individual")}</small>
                                        </div>
                                        <div class="flip-card-back">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>{t("getintouch")}</li>
                                            </ul>
                                            <button class=" main-button-m">{t("select")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 mb-2">
                            <div class="card extrclss-cst">
                                <div class="h-100 flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <span class="price"> € </span><br />
                                            <br />
                                            <h2 class="card-title">{t("perMonthBasis")}</h2>
                                            <small>{t("smallBusiness")}</small>
                                        </div>
                                        <div class="flip-card-back">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg> {t("getintouch")}</li>
                                            </ul>
                                            <button class=" main-button-m">{t("select")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 mb-2">
                            <div class="card extrclss-cst">
                                <div class="h-100 flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <span class="price"> € </span><br />
                                            <br />
                                            <h2 class="card-title">{t("longtermContracts")}</h2>
                                            <small>{t("largeCompany")}</small>
                                        </div>
                                        <div class="flip-card-back">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg> {t("getintouch")}</li>
                                            </ul>
                                            <button class=" main-button-m">{t("select")}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-12 mb-2">
                            <div class="card extrclss-cst">
                                <div class="h-100 flip-card">
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <span class="price"> € </span><br />
                                            <br />
                                            <h2 class="card-title">24/7 {t("packages")}</h2>
                                            <small>{t("largeCompany")}</small>
                                        </div>
                                        <div class="flip-card-back">
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg> {t("getintouch")}</li>
                                            </ul>
                                            <button class=" main-button-m">{t("select")}</button>
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

export default Pricing