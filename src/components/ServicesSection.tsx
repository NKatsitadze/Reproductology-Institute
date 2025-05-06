import styled from "styled-components";
import PregnancyPic from '../assets/services/pregnancy.webp';
import ginecologyPic from '../assets/services/ginecology.webp';
import endocrinologyPic from '../assets/services/endocrinology.webp';
import researchPic from '../assets/services/research.webp';

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const ServicesSection = function() {

    const { t } = useTranslation();

    return (
        <Section>
            <div className="center-container">
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
                        <li>{t("ServicesSection.3box1")}</li>
                        <li>{t("ServicesSection.3box2")}</li>
                        <li>{t("ServicesSection.3box3")}</li>
                        <li>{t("ServicesSection.3box4")}</li>
                    </ul>
                </div>
                <div className="service-box">
                    <img className="service-img" src={researchPic} alt="service image" />
                    <ul className="list-box">
                        <li className="bold">{t("ServicesSection.title4")}</li>
                        <li>{t("ServicesSection.4box1")}</li>
                        <li>{t("ServicesSection.4box2")}</li>
                        <li>{t("ServicesSection.4box3")}</li>
                        <li>{t("ServicesSection.4box4")}</li>
                        <li>{t("ServicesSection.4box5")}</li>
                        <li>{t("ServicesSection.4box6")}</li>
                    </ul>
                </div>
            </div>
                <Link className="btn" to='/repro/services'>{t("ServicesSection.servicesButton")}</Link>
        </Section>
    )

}

export default ServicesSection;

const Section = styled.section`
    background: #FFF;
    padding: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .center-container { 
        width: 80%;
        margin: 0 auto;
        display: grid;
        column-gap: 3rem;
        row-gap: 1.5rem;
        grid-template-columns: repeat(2, 1fr);
    }

    .service-box {
        background: var(--Hover-Lightblue);
        border-radius: 0.3rem;
        border: 2px solid var(--Hover-Border);
        font-size: 1.2rem;
        color: var(--Catalina-Blue);
        display: flex;
        gap: 1.5rem;
        transition: all 0.3s;

        &:hover {
            border: 2px solid var(--Catalina-Blue);
        }

        .list-box {
            display: flex;
            flex-direction: column;
            justify-content: start;
            gap: 0.5rem;
            padding: 1rem 0.5rem 1rem 0.5rem;
            list-style: none;

            .bold {
                font-weight: 700;
                font-size: 1.3rem;
                margin-bottom: 0.5rem;
            }
        }
    }

    .service-img {
        width: 15rem;
        object-fit: cover;
    }

    .btn {
        align-self: center;
        font-size: 1.3rem;
        font-weight: 700;
        padding: 0.7rem 1.5rem;
        border: 1px solid var(--Catalina-Blue);
        border-radius: 0.3rem;
        color: var(--Catalina-Blue);
        cursor: pointer;
        background: var(--Hover-Border);
        transition: all 0.25s;
        text-decoration: none;
    }

    .btn:hover {
        transform: translateY(-2px);
        color: #FFF;
        background: var(--Catalina-Blue);
        box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
        -webkit-box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
    }

        @media(max-width: 1600px) {
            .service-box {
                font-size: 1.1rem;

                .list-box {

                    .bold {
                        font-size: 1.2rem;
                    }
                }
            }
        }
                    // Below 1400px
                    @media(max-width: 87.5em) {
                        .center-container {
                            column-gap: 1.5rem;
                            row-gap: 0.7rem;
                        }
                        .service-box {
                            font-size: 1.1rem;

                            .list-box {

                                .bold {
                                    font-size: 1.2rem;
                                }
                            }
                        }

                        .service-img {
                            width: 12rem;
                        }
                    }

                    // Below 1250px
                    @media(max-width: 78.125em) {
                        .center-container {
                            width: 90%;
                        }
                    }
                                // Below 1150px
                                @media(max-width: 71.875em) {
                                    .center-container {
                                        width: 100%;
                                        column-gap: 0.3rem;
                                        row-gap: 0.2rem;
                                    }

                                    .service-box {
                                        font-size: 1.1rem;

                                        .list-box {

                                            .bold {
                                                font-size: 1.2rem;
                                            }
                                        }
                                    }

                                    .service-img {
                                        width: 12rem;
                                    }

                                    .btn {
                                        font-size: 1.1rem;
                                    }
                                }

                                                // Below 1050px
                                                @media(max-width: 65.625em) {
                                                    .service-box {
                                                        font-size: 1rem;

                                                        .list-box {

                                                            .bold {
                                                                font-size: 1.1rem;
                                                            }
                                                        }
                                                    }

                                                    .service-img {
                                                        width: 11rem;
                                                    }
                                                }

                                                                // Below 900px
                                                                @media(max-width: 56.25em) {

                                                                    .center-container {
                                                                        width: 90%;
                                                                        grid-template-columns: 1fr;
                                                                    }

                                                                    .service-box {
                                                                        font-size: 1rem;

                                                                        .list-box {

                                                                            .bold {
                                                                                font-size: 1.1rem;
                                                                            }
                                                                        }
                                                                    }

                                                                    .service-img {
                                                                        width: 11rem;
                                                                    }
                                                                }

                                                                        // Below 600px
                                                                        @media(max-width: 37.5em) {
                                                                            padding: 0rem 0rem 1.5rem 0rem;
                                                                            gap: 0.7rem;

                                                                            .center-container {
                                                                                width: 100%;
                                                                            }
                                                                        }

                                                                            //   Below 425px
                                                                              @media(max-width: 26.5625em) {
                                                                                .service-box {
                                                                                    flex-direction: column;
                                                                                    gap: 0rem;
                                                                                    align-items: center;
                                                                                    text-align: center;

                                                                                    .service-img {
                                                                                        width: 13rem;
                                                                                        border-bottom-left-radius: 0.3rem;
                                                                                        border-bottom-right-radius: 0.3rem;
                                                                                    }
                                                                                }
                                                                              }
    `
