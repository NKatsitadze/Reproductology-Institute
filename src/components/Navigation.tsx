import styled from "styled-components";
import Logo from '../assets/logo.png';

import fb from '../assets/svgs/iconFB.png';
import youtube from '../assets/svgs/iconY.png';

import { NavLink, Link, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import useWindowDimensions from "../hooks/windowResize";
import FooterSection from "./FooterSection";

import { useTranslation } from 'react-i18next';

import flagGe from '../assets/geo.png';
import flagEn from '../assets/eng.png';
import { useState } from "react";


const Navigation = () =>  {
    
    const { width } = useWindowDimensions();
    
    let test = document.getElementById('menu') as HTMLInputElement;
    
    const closeMobileMenu = function() {
        test.checked = false;
    }
    
    const { t, i18n } = useTranslation();
    const changeLanguage = function(language: string) {
        i18n.changeLanguage(language);
        setGeo(prev => !prev);
    }

    const [geo, setGeo] = useState(true);

    return (
        <>
        <NavWrap > 
            <div className="center-container">
                    <Link className="logo-link" to='/'>
                        <img className="logo" src={Logo} alt='Clinic logo' />
                    </Link>
                        
                <div className="title-nav-uti">
                    <span className="title">{t("Navigation.title1")} {width <= 600 ? <br /> : null}{t("Navigation.title2")} <br /> {t("Navigation.title3")}</span>
                    <div className="navlinks-utilities">
                        <div className="utilities">
                            <div className="s-box"><a target="_blank" href="https://www.facebook.com/reproinstitute.ge"><img src={fb} alt="" /></a></div>
                            <div className="s-box"><a target="_blank" href="https://www.youtube.com/@reproinstitute3031"><img src={youtube} alt="" /></a></div>
                            <div onClick={() => changeLanguage(geo ? 'en' : 'ge')} className="s-box"><img className="flag" src={geo ? flagEn : flagGe} alt="" /></div>
                        </div>
                        <ul className="navlinks-container mobile">
                            <li className='li'>
                                <NavLink className={(navData)=> navData.isActive ? 'link active' : 'link'} to='/'>{t("Navigation.home")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink className={(navData)=> navData.isActive ? 'link active' : 'link'} to='/services'>{t("Navigation.services")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink className={(navData)=> navData.isActive ? 'link active' : 'link'} to='/team'>{t("Navigation.team")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink className={(navData)=> navData.isActive ? 'link active' : 'link'} to='/about-us'>{t("Navigation.about")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink className={(navData)=> navData.isActive ? 'link active' : 'link'} to='/contact-us'>{t("Navigation.contact")}</NavLink>
                            </li>
                        </ul>

                        <input id="menu" className="checkbox none" type="checkbox" />
                        <label htmlFor="menu" className={'burger-box' + (width <= 900 ? '' : 'none')}><span className="burger-span"></span></label>
                        <label htmlFor="menu" className={'burger-blur' + (width >= 900 ? 'none' : '')}></label>

                        <ul className={'burger-back' + (width > 900 ? ' back-motion' : '')}>
                            <li className='li'>
                               <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/'>{t("Navigation.home")}</NavLink>
                            </li>
                            <li className='li display'>
                                <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/services'><div>{t("Navigation.services")}</div> <div>{t("Navigation.govPrograms")}</div></NavLink>
                            </li>
                            <li className='li'>
                                <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/team'>{t("Navigation.team")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/residency'>{t("Navigation.residency")}</NavLink>
                            </li>
                            <li className='li nowrap'>
                                <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/about-us'>{t("Navigation.about")}</NavLink>
                            </li>
                            <li className='li'>
                                <NavLink onClick={closeMobileMenu} className={(navData)=> navData.isActive ? 'mobile-link mob-active' : 'mobile-link'} to='/contact-us'>{t("Navigation.contact")}</NavLink>
                            </li>
                            <li className="li panel">
                                 <div className="s-box"><a target="_blank" href="https://www.facebook.com/reproinstitute.ge"><img src={fb} alt="" /></a></div>
                                 <div className="s-box"><a target="_blank" href="https://www.youtube.com/@reproinstitute3031"><img src={youtube} alt="" /></a></div>
                                 <div onClick={() => changeLanguage(geo ? 'en' : 'ge')} className="s-box"><img className="flag" src={geo ? flagEn : flagGe} alt="" /></div>
                            </li>
                        </ul>

                    </div>
                </div> 
            </div>        
        </NavWrap>
        <Outlet  />
        <ScrollToTop />
        <FooterSection />
        </>
    )
}

export default Navigation;

const NavWrap = styled.nav`
width: 100%;
position: fixed;
top: 0;
z-index: 100;
padding: 0.5rem 0 0.5rem 0;
background: var(--Background-Lightblue);

    .center-container {
        width: 85%;
        margin: 0 auto;
        display: flex;
        align-items: center;
    }

    .title-nav-uti {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0.5rem;
    }
    
    .logo-link {
        height: 5.5rem;
        cursor: pointer;
    }

    .logo {
        width: 5.5rem;
        height: 100%;
    }

    .title {
        font-size: 1.3rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: var(--Catalina-Blue);
        word-spacing: -2px;
    }

    .navlinks-utilities {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        position: relative;
        
        .mobile {
        }
    }

    .utilities {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 1rem;
        padding-right: 1rem;

        .s-box {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 1.5rem;
            width: 1.5rem;
            cursor: pointer;
            object-fit: cover;

            &:hover img {
                filter: brightness(0.9);
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            img {
                width: 100%;
                height: 100%;
                transform: scale(1.2);
            }

            .flag {
                width: 100%;
                height: 1rem;
                object-fit: cover;
            }
        }
    }

    .navlinks-container {
        font-size: 1.3rem;
        display: flex;
        word-spacing: -2px;
    }

    .burger-box {
        background: var(--Catalina-Blue);
        cursor: pointer;
        height: 3rem;
        width: 3rem;
        z-index: 102;
        position: absolute;
        top: -50%;
        right: 1%;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;

        &::before {
            content: '';
            position: absolute;
            height: 4px;
            width: 60%;
            border-radius: 4px;
            background: var(--Hover-Lightblue);
            top: 25%;
            transition: all 0.2s;
        }

        &::after {
            content: '';
            position: absolute;
            height: 4px;
            width: 60%;
            border-radius: 4px;
            // background: var(--Catalina-Blue);
            background: var(--Hover-Lightblue);
            bottom: 25%;
            transition: all 0.2s;
        }

        .burger-span {
            height: 4px;
            width: 70%;
            border-radius: 4px;
            background: var(--Hover-Lightblue);
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.2s;
        }
    }

    .checkbox:checked ~ .burger-box span {
        opacity: 0;
    }
    .checkbox:checked ~ .burger-box::before {
        left: 5%;
        top: 46%;
        transform: rotate(-45deg);
        width: 90%;
    }
    .checkbox:checked ~ .burger-box::after {
        left: 5%;
        top: 46%;
        transform: rotate(45deg);
        width: 90%;
    }

    .checkbox:checked ~ .burger-back {
        width: 40%;
        opacity: 0.98;
        pointer-events: auto;
    }

    .back-motion {
        width: 0% !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }


    .checkbox:checked ~ .burger-blur {
        width: 100%;
        backdrop-filter: blur(1px);
    }

    .burger-back {
        pointer-events: none;
        padding-top: 5rem;
        position: fixed;
        background: var(--Hover-Lightblue);
        right: 0%;
        top: 0%;
        height: 100%;
        width: 0%;
        transition: all 0.7s;
        z-index: 101;    
        opacity: 0;    
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        align-items: center;
        font-weight: 700;
        
        .display {
            display: flex;
            flex-direction: column;
            text-align: center;
            white-space: nowrap;
        }

        .nowrap {
            white-space: nowrap;
        }

        .mobile-link {
            text-decoration: none;
            color: var(--Catalina-Blue);
            padding: 0.3rem 0.6rem;
            border-radius: 0.3rem;
        }

        .mob-active {
            background: var(--Catalina-Blue);
            color: #FFF;
        }
    }

    .burger-blur {
        position: fixed;
        right: 0%;
        top: 0%;
        height: 100%;
        width: 0%;
        background: transparent;
    }

    .none {
        display: none;
    }

    .li {
        list-style: none;
    }

    .panel {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1rem;

        .s-box {
            height: 2rem;
            width: 2rem;
            cursor: pointer;

            &:hover img {
                filter: brightness(0.9);
            }

            img {
                height : 100%;
            }
        }
    }
    
    .link {
        color: var(--Catalina-Blue);
        text-decoration: none;
        padding: 0.2rem 0.7rem;
        border-radius: 0.3rem;
        border: 1px solid transparent;
        transition: all 0.15s;
    }

    .link:hover {
        background: var(--Hover-Lightblue);
        border: 1px solid var(--Hover-Border);
    }

    .active {
        color: #f1f6fa;
        background: var(--Catalina-Blue);
    }

    .active:hover {
        background: var(--Catalina-Blue);
        color: #f1f6fa;
        border: 1px solid transparent;
    }
    
                    // Below 1550px
                    @media(max-width: 96.875em) {

                        .logo-link {
                           height: 5rem; 
                        }
                        
                        .logo {
                            width: 5rem;
                           
                        }
                    
                        .title {
                            font-size: 1.2rem;
                        }
                    
                        .navlinks-container {
                            font-size: 1.2rem;
                            gap: 0.6rem;
                        }
                        
                        .link {
                            padding: 0.3rem 0.7rem;
                            border-radius: 0.3rem;
                        }
                    }

                                                            // Below 1400px
                                                            @media(max-width: 87.5em) {
                                                                .title {
                                                                    font-size: 1.1rem;
                                                                }
                                                            
                                                                .navlinks-container {
                                                                    font-size: 1.1rem;
                                                                    gap: 0.3rem;
                                                                }
                                                            
                                                                .link {
                                                                    padding: 0.2rem 0.6rem;
                                                                }
                                                            }
                                                                                    // Below 1250px
                                                                                    @media(max-width: 78.125em) {
                                                                                        .center-container {
                                                                                            width: 90%;
                                                                                        }

                                                                                        .logo-link {
                                                                                            height: 4.5rem;
                                                                                        }
                                                                                    
                                                                                        .logo {
                                                                                            width: 4.5rem;
                                                                                          
                                                                                        }
                                                                                    
                                                                                        .navlinks-container {
                                                                                            gap: 0.2rem;
                                                                                        }
                                                                                    
                                                                                        .link {
                                                                                            padding: 0.15rem 0.55rem;
                                                                                        }
                                                                                    }
                                                                                                    // Below 1150px
                                                                                                    @media(max-width: 71.875em) {
                                                                                                        .center-container {
                                                                                                            padding: 0 0.5rem;
                                                                                                            width: 100%;
                                                                                                        }
                                                                                                    
                                                                                                        .navlinks-container {
                                                                                                            gap: 0.2rem;
                                                                                                        }
                                                                                                    
                                                                                                        .link {
                                                                                                            padding: 0.15rem 0.55rem;
                                                                                                        }
                                                                                                    }

                                                                                                            // Below 1050px
                                                                                                            @media(max-width: 65.625em) {
                                                                                                                .navlinks-container {
                                                                                                                    gap: 0rem;
                                                                                                                }

                                                                                                                .link {
                                                                                                                    padding: 0.1rem 0.35rem;
                                                                                                                }

                                                                                                                .title {
                                                                                                                    font-size: 0.95rem;
                                                                                                                }

                                                                                                                .navlinks-container {
                                                                                                                    font-size: 1.05rem;
                                                                                                                }
                                                                                                            }

                                                                                                            // Below 950px
                                                                                                            @media(max-width: 59.375em) {
                                                                                                                .link {
                                                                                                                    padding: 0.05rem 0.2rem;
                                                                                                                }

                                                                                                                .title-nav-uti {
                                                                                                                    padding-left: 0.2rem;
                                                                                                                }
                                                                                                            }

                                                                                                                    // Below 900px
                                                                                                                    @media(max-width: 56.25em) {
                                                                                                                        .center-container {
                                                                                                                        }

                                                                                                                        .title-nav-uti {
                                                                                                                            align-items: center;
                                                                                                                        }

                                                                                                                        .navlinks-utilities {
                                                                                                                            flex-direction: row;
                                                                                                                            align-items: end;

                                                                                                                            .utilities {
                                                                                                                                padding-right: 4rem;
                                                                                                                            }
                                                                                                                        }

                                                                                                                        .navlinks-container {
                                                                                                                            display: none;
                                                                                                                        }
                                                                                                                    }

                                                                                                                    // Below 550px
                                                                                                                    @media(max-width: 34.375em) {
                                                                                                                        .checkbox:checked ~ .burger-back {
                                                                                                                            width: 100%;
                                                                                                                        }

                                                                                                                        .title-nav-uti {
                                                                                                                            .title {
                                                                                                                                font-size: 0.8rem;
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }

                                                                                                                            // Below 425px
                                                                                                                            @media(max-width: 26.5625em) {

                                                                                                                                .burger-box {
                                                                                                                                    position: fixed;
                                                                                                                                    top: 1.1rem;
                                                                                                                                    right: 0.5rem;
                                                                                                                                }

                                                                                                                                .title-nav-uti {
                                                                                                                                    .title {
                                                                                                                                        font-size: 0.7rem;
                                                                                                                                    }

                                                                                                                                    .navlinks-utilities {
                                                                                                                                        .utilities {
                                                                                                                                            display : none;
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }

                                                                                                                                .logo-link {
                                                                                                                                    height: 4rem;
                                                                                                                                }
                                                                                                                            
                                                                                                                                .logo {
                                                                                                                                    width: 4rem;
                                                                                                                                  
                                                                                                                                }
                                                                                                                            }
                                                                                                                            
`