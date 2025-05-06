import styled from "styled-components";

import { Link } from "react-router-dom";

import governmentIcon from '../assets/svgs/governmentPNG.png';
import mortar from '../assets/svgs/mortarboardPNG.png';

import hero from '../assets/hero.jpg';

import { useTranslation } from "react-i18next";

const Header = function() {
    const { t } = useTranslation();

    return ( <>
        <HeaderStyled>
            <div className="extras-box">
                <Link className="u-fix" to='/services'>
                    <div className="gov-box"><img className="icon" src={governmentIcon} alt="" />{t("Navigation.govPrograms")}</div>
                </Link>
                <Link className="u-fix" to='/residency'>
                    <div className="residency-box"><img className="icon" src={mortar} alt="" />{t("Navigation.residency")}</div>
                </Link>
            </div>
        </HeaderStyled>
    </>
    )
}

export default Header;

const HeaderStyled = styled.header`
height: 100vh;
width: 100vw;
position: relative;

background-repeat: no-repeat;
background-size: cover;
background-position: center ;
background-image: url(${hero}); 
overflow: hidden; 

.extras-box {
    position: absolute;
    bottom: 1%;
    right: 1.5%;
    display: flex;
    gap: 1rem;
    font-size: 1.3rem;

    .u-fix {
        text-decoration: none;
    }

    .icon {
        height: 2rem;
    }

    .gov-box {
        cursor: pointer;
        background: #0b6642;
        color: #FFF;
        font-weight: 700;
        border-radius: 0.3rem;
        padding: 1rem;
        transition: all 0.3s;
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:hover {
            transform: translateY(-3px);
        }
    }

    .residency-box {
        cursor: pointer;
        background: lightgreen;
        border-radius: 0.3rem;
        color: #FFF;
        background: var(--Catalina-Blue);
        font-weight: 700;
        padding: 1rem;
        transition: all 0.3s;
        display: flex;
        gap: 0.5rem;
        align-items: center;

        &:hover {
            transform: translateY(-3px);
        }
    }
}

        // Below 1400px
        @media(max-width: 87.5em) {
            .extras-box {
                font-size: 1.1rem;
                
                .icon {
                }
            }
        }
                        // Below 1250px
                        @media(max-width: 78.125em) {
                            .extras-box {
                                font-size: 1rem;
                                flex-direction: column;
                                gap: 0.2rem;

                                .icon {
                                    height: 1.5rem;
                                }
                            }
                        }
        }
                                    // Below 900px
                                    @media(max-width: 56.25em) {
                                        .extras-box {
                                            display: none;
                                        }
                                    }
`