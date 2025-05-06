import styled from "styled-components";

import { Link } from "react-router-dom";

import InsuranceSection from "../components/InsuranceSection";

import PregnancyPic from '../assets/services/pregnancy.webp';
import ginecologyPic from '../assets/services/ginecology.webp';
import endocrinologyPic from '../assets/services/endocrinology.webp';
import researchPic from '../assets/services/research.webp';
import aid from '../assets/services/gov.png';
import learning from '../assets/services/learning.webp';
import syndrome from '../assets/services/syndrome.webp';
import kidPic from '../assets/services/kids.webp';

import { useTranslation } from "react-i18next";

const ServicesPage = function(){

    const { t } = useTranslation();

    return(
        <PageWrap>
            <div className="center-container">
             <div className="ui-box">
             <div className="service-box">
                    <img className="service-img aid-fix fit" src={aid} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesPage.aidBox.title")}</li>
                        <li>{t("ServicesPage.aidBox.p1")}</li>
                        <li>{t("ServicesPage.aidBox.p2")}</li>
                        <li>{t("ServicesPage.aidBox.p3")}</li>
                        <li>{t("ServicesPage.aidBox.p4")}</li>
                        <li>{t("ServicesPage.aidBox.p5")}</li>
                    </ul>
                </div>

              <div className="service-box">
                    <img className="service-img" src={PregnancyPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesSection.title1")}</li>
                        <li>{t("ServicesSection.1box1")}</li>
                        <li>{t("ServicesSection.1box2")}</li>
                        <li>{t("ServicesSection.1box3")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={endocrinologyPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesSection.title2")}</li>
                        <li>{t("ServicesSection.2box1")}</li>
                        <li>{t("ServicesSection.2box2")}</li>
                        <li>{t("ServicesSection.2box3")}</li>
                        <li>{t("ServicesSection.2box4")}</li>
                        <li>{t("ServicesSection.2box5")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={ginecologyPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesSection.title3")}</li>
                        <li>{t("ServicesSection.3boxExtra1")}</li>
                        <li>{t("ServicesSection.3boxExtra2")}</li>
                        <li>{t("ServicesSection.3box2")}</li>
                        <li>{t("ServicesSection.3boxExtra3")}</li>
                        <li>{t("ServicesSection.3box1")}</li>
                        <li>{t("ServicesSection.3box3")}</li>
                        <li>{t("ServicesSection.3box4")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={researchPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesPage.diagnosis.title")}</li>
                        <li>{t("ServicesPage.diagnosis.p1")}</li>
                        <li>{t("ServicesPage.diagnosis.p2")}</li>
                        <li>{t("ServicesPage.diagnosis.p3")}</li>
                        <li>{t("ServicesPage.diagnosis.p4")}</li>
                        <li>{t("ServicesPage.diagnosis.p5")}</li>
                        <li>{t("ServicesPage.diagnosis.p6")}</li>
                        <li>{t("ServicesPage.diagnosis.p7")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={syndrome} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesPage.syndrom.title")}</li>
                        <li>{t("ServicesPage.syndrom.p1")}</li>
                        <li>{t("ServicesPage.syndrom.p2")}</li>
                        <li>{t("ServicesPage.syndrom.p3")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={kidPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesPage.kids.title")}</li>
                    </ul>
                </div>

                <Link className="service-box" to='/residency'>
                    <img className="service-img" src={learning} alt="service image" />
                    <div className="list-box">
                        <span className="bold">{t("ServicesPage.residency.title")}<span className="arrow">&#187;</span></span>
                    </div>
                </Link>

             </div>
                <InsuranceSection />
            </div>
        </PageWrap>
    )
}

export default ServicesPage;

const PageWrap = styled.div`
    margin-top: 5.8rem;
    width: 100%;

    .center-container {
        width: 80%;
        margin: 0 auto;
        padding: 1rem 0;

        .ui-box {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0.5rem;

            .service-box {
                width: 100%;
                display: flex;
                border-radius: 0.3rem;
                overflow: hidden;
                gap: 1rem;
                border: 2px solid transparent;
                border-bottom: 2px solid var(--Hover-Lightblue);
                transition: all 0.3s;
                text-decoration: none;

                &:hover {
                    border: 2px solid var(--Catalina-Blue);
                    background: var(--Background-Lightblue);
                    margin-left: 0.5rem;
                }

                .aid-fix {
                    width: 13rem !important;
                    padding-bottom: 0.5rem;
                }

                .service-img {
                    width: 13rem;
                }

                .list-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem 0rem;
                    font-size: 1.2rem;
                    list-style: none;

                    .arrow {
                        font-size: 2rem;
                        animation-name: vanish;
                        animation-iteration-count: infinite;
                        animation-duration: 4s;
                    }

                    @keyframes vanish {
                        0% {
                            opacity: 0;
                        }
                        25% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0;
                        }
                        75% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }

                    .bold {
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    .fit {
        object-fit: cover;
    }

                // Below 1150px
                @media(max-width: 71.875em) {
                    .center-container {
                        width: 90%;
                    }
                }

                        // Below 950px
                        @media(max-width: 59.375em) {
                            .center-container {
                                width: 99%;

                                .ui-box {
                                    .service-box {
                                        &:hover {
                                            margin-left: 0rem;
                                        }
                                    }
                                }
                            }
                        }

                                // Below 850px
                                @media(max-width: 53.125em) {

                                    .center-container {

                                      .ui-box {
                                          .service-box {
                                            gap: 0.5rem;

                                            .list-box {
                                                font-size: 1rem;

                                                .bold {
                                                    font-size: 1rem;
                                                }
                                            }

                                            .aid-fix {
                                                width: 10rem !important;
                                                padding-bottom: 0rem;
                                                object-fit: contain;
                                            }   
                                              
                                              .service-img {
                                                  width: 10rem;
                                                }
                                            }  
                                        }
                                    }
                                }
                                            // Below 650px
                                            @media(max-width: 40.625em) {

                                                .center-container {

                                                .ui-box {
                                                    .service-box {

                                                        .aid-fix {
                                                            width: 9rem !important;
                                                        }   
                                                        
                                                        .service-img {
                                                            width: 9rem;
                                                            }
                                                        }  
                                                    }
                                                }
                                            }
                                                        // Below 550px
                                                        @media(max-width: 34.375em) {

                                                            .center-container {
                                                                width: 100%;

                                                            .ui-box {
                                                                .service-box {
                                                                    padding: 0 1rem;
                                                                    flex-direction: column;
                                                                    align-items: center;

                                                                    .list-box {
                                                                        text-align: center;
                                                                    }

                                                                    .aid-fix {
                                                                        width: 13rem !important;
                                                                    }   
                                                                    
                                                                    .service-img {
                                                                        width: 13rem;
                                                                        border-bottom-right-radius: 0.3rem;
                                                                        border-bottom-left-radius: 0.3rem;
                                                                        }
                                                                    }  
                                                                }
                                                            }
                                                        }
                                                                    // Below 425px
                                                                    @media(max-width: 26.5625em) {
                                                                        margin-top: 4webprem;

                                                                        .center-container {

                                                                        .ui-box {
                                                                            .service-box {

                                                                                .list-box {
                                                                                    font-size: 1.1rem;
                                                                                }

                                                                                .aid-fix {
                                                                                    width: 10rem !important;
                                                                                }   
                                                                                
                                                                                .service-img {
                                                                                    width: 10rem;
                                                                                    }
                                                                                }  
                                                                            }
                                                                        }
                                                                    }
`