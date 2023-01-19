import styled from "styled-components";

import image from '../assets/staff/ArchilAbout.webp';
import banner from '../assets/baneriFin.png';
import tsu from '../assets/tsu.webp';

import { useTranslation } from "react-i18next";

const AboutPage = function(){

    const { t } = useTranslation();

    const pageContent = {
        start1: `${t("AboutPage.p1")}`,
        start2:`${t("AboutPage.p2")}`,
        bannerContent: `${t("AboutPage.p3")}`,
        expContent: `${t("AboutPage.p4")}`,
        labContent: `${t("AboutPage.p5")}`,
        radContent: `${t("AboutPage.p6")}`,
        facultyContent: `${t("AboutPage.p7")}`,
        endingContent3: `${t("AboutPage.p8")}`,
        endingContent2: `${t("AboutPage.p9")}`,
        endingContent1: `${t("AboutPage.p10")}`,
    }

    return(
        <AboutWrap>
          <div className="center-box">
                <div className="start-box">
                    <div className="flex">
                        <img className="banner" src={image} alt="banner" />
                        <p>{pageContent.start1}</p>
                    </div>
                    <p>{pageContent.start2}</p>
                </div>
                <div className="banner-box">
                    <p>{pageContent.bannerContent}</p>
                    <img className="banner" src={banner} alt="banner" />
                </div>
                <p>{pageContent.expContent}</p>
                <br />
                <p>{pageContent.labContent}</p>
                <br />
                <p>{pageContent.radContent}</p>
                <div className="faculty">
                        <img className="logo" src={tsu} alt="banner" />
                        <p>{pageContent.facultyContent}</p>
                </div>
                <p>{pageContent.endingContent3}</p>
                    <br />
                <p>{pageContent.endingContent2}</p>
                    <br />
                <p>{pageContent.endingContent1}</p>
          </div>
        </AboutWrap>
    )
}

export default AboutPage;

const AboutWrap = styled.section`
    width: 100%;
    margin-top: 5.4rem;
    background: #effaf6;

    .center-box {
        padding: 2rem 0;
        width: 80%;
        margin: 0 auto;
        font-size: 1.2rem;

        .start-box {
            display: flex;
            flex-direction: column;
            gap: 1rem;

            .flex {
                display: flex;
                gap: 1rem;
            }

            .banner {
                width: 25rem;
                object-fit: contain;
            }
        }

        .banner-box {
            display: flex;
            align-items: center;

            .banner {
                width: 20rem;
                object-fit: cover;
            }
        }

        .faculty {
            display: flex;
            padding: 1rem 0;
            gap: 1rem;
            align-items: center;

            .logo {
                width: 20rem;
                object-fit: cover;
            }
        }
    }

    // Below 1200px
    @media(max-width: 75em) {
        .center-box {
            width: 90%;

            .start-box {
                .flex {
                    flex-direction: column;
    
                    .banner {
                        width: 30rem;
                        align-self: center;
                        border-radius: 0.3rem;
                    }
                }
            }

            .banner-box {
                .banner {
                    width: 15rem;
                }
            }

            .faculty {
                .logo {
                    width: 12rem;
                }
            }
        }
    }
                // Below 700px
                @media(max-width: 43.75em) {
                    .center-box {
                        width: 95%;

                        .start-box {
                            .flex {
                                flex-direction: column;
                
                                .banner {
                                    width: 22rem;
                                    align-self: center;
                                    border-radius: 0.3rem;
                                }
                            }
                        }

                        .banner-box {
                            .banner {
                                width: 15rem;
                            }
                        }

                        .faculty {
                            .logo {
                                width: 9rem;
                            }
                        }
                    }
                }
                                // Below 500px
                                @media(max-width: 31.25em) {
                                    .center-box {
                                        width: 95%;

                                        .start-box {
                                            .flex {
                                                flex-direction: column;
                                
                                                .banner {
                                                    width: 18rem;
                                                    align-self: center;
                                                    border-radius: 0.3rem;
                                                }
                                            }
                                        }

                                        .banner-box {
                                            flex-direction: column-reverse;
                                        }

                                        .faculty {
                                            flex-direction: column;
                                        }
                                    }
                                }
                                            // Below 425px
                                            @media(max-width: 26.5625em) {
                                                margin-top: 3.5rem;
                                                .center-box {
                                                    .start-box {
                                                        .flex {
                                                            .banner {
                                                                width: 15rem;
                                                            }
                                                        }
                                                    }

                                                    .banner-box {
                                                        .banner {
                                                            width: 12rem;
                                                        }
                                                    }

                                                    .faculty {
                                                        .logo {

                                                        }
                                                    }
                                                }
                                            }
`