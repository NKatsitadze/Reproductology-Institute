import styled from "styled-components";
import LocationSection from "../components/LocationSection";
import location from '../assets/svgs/locationPNG.png';
import facebook from '../assets/svgs/facebookPNG.png';
import gmail from '../assets/svgs/gmailPNG.png';
import phone from '../assets/svgs/phonePNG.png';
import youtube from '../assets/svgs/iconYwhite.png';

import { useTranslation } from "react-i18next";

const ContactPage = function(){

    const { t } = useTranslation();

    type mapSettingsType = {
        width: string,
        height: string,
    }

    const mapSettings:mapSettingsType = {
        width: '100%',
        height: '450px',
    }

    return(
        <AboutWrap>
            <div className="info-container">
                <div className='info-box'>
                    <img className="icon" src={location} alt="icon" />
                    {t("ContactPage.streetName")}</div>
                <div className='info-box'>
                    <a className="link" target="_blank" href="https://www.facebook.com/reproinstitute.ge">
                <img className="icon" src={facebook} alt="icon" />
                Facebook/reproinstitute.ge
                    </a>
                    </div>
                <div className='info-box'>
                    <img className="icon" src={phone} alt="icon" />
                    (+995 32) 224 00 99</div>

                <div className='info-box'>
                    <img className="icon" src={phone} alt="icon" />
                    (+995 32) 224 00 98</div>
                <div className='info-box'>
                    <img className="icon" src={gmail} alt="icon" />
                    info@reproinstitute.ge</div>
                    
                <div className='info-box'>
                <a className="link" target="_blank" href="https://www.youtube.com/@reproinstitute3031">
                <img className="icon" src={youtube} alt="icon" />
                YouTube </a></div>
            </div>
            <LocationSection mapSettings={mapSettings} />
        </AboutWrap>
    )
}

export default ContactPage;

const AboutWrap = styled.section`
    width: 100%;
    margin-top: 7.8rem;

    .info-container {
        width: 50%;
        margin: 2rem auto;
        gap: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        color: #FFF;
        font-weight: 700;

        .info-box {
            display: flex;
            gap: 0.7rem;
            justify-content: start;
            align-items: center;
            background: var(--Totem-Pole);
            padding: 0.7rem 1.4rem;
            border-radius: 0.3rem;
            cursor: pointer;
            transition: all 0.15s;

            &:hover {
                transform: translateX(0.2rem);
            }

            &:hover {
                background: var(--Totem-Pole-Pale);
            }

            .icon {
                height: 2rem;
            }

            .link {
                display: flex;
                gap: 0.7rem;
                align-items: center;
                justify-content: center;
                color: #FFF;
            }
        }
    }

    // Below 1200px
    @media(max-width: 75em) {
        .info-container {
            width: 70%;
        }
    }
            // Below 850px
            @media(max-width: 53.125em) {
                .info-container {
                    width: 80%;
                    gap: 0.5rem;

                    .info-box {
                        gap: 0.3rem;
                        padding: 0.4rem 1.1rem;
                    }
                }
            }
                    // Below 700px
                    @media(max-width: 43.75em) {
                        .info-container {
                            width: 95%;
                            gap: 0.5rem;

                            .info-box {
                                gap: 0.3rem;
                                padding: 0.4rem 1.1rem;
                                font-size: 0.8rem;
                            }
                        }
                    }
                            // Below 500px
                            @media(max-width: 31.25em) {
                                .info-container {
                                    width: 80%;
                                    gap: 0.3rem;
                                    grid-template-columns: 1fr;

                                    .info-box {
                                        gap: 0.3rem;
                                        padding: 0.3rem 1rem;
                                        font-size: 0.8rem;
                                    }
                                }
                            }
`