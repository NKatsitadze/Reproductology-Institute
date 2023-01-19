import styled from "styled-components";

import { useState, useRef } from "react";

import { useTranslation } from "react-i18next";

import IMG0 from '../assets/staff/ArchilKhomasuridze.png';
import IMG1 from '../assets/staff/LaliPkhaladze.png';
import IMG2 from '../assets/staff/DiakonidzeTamar.png';
import IMG3 from '../assets/staff/DatoshviliNino.png';
import IMG4 from '../assets/staff/ChopikashviliNana.png';
import IMG5 from '../assets/staff/ViviBibilashvili.png';
import IMG6 from '../assets/staff/DavidovaNino.png';
import IMG7 from '../assets/staff/DjafaridzeKetevan.png';
import IMG8 from '../assets/staff/EkaterineLezhava.png';
import IMG9 from '../assets/staff/LevidzeNana.png';
import IMG10 from '../assets/staff/LiudmilaBarbaqadze.png';
import IMG11 from '../assets/staff/MarghaniaIrine.png';
import IMG12 from '../assets/staff/NadareishviliGiorgi.png';
import IMG13 from '../assets/staff/NanaKvashilava.png';
import IMG14 from '../assets/staff/PirtskhalavaTinatin.png';
import IMG15 from '../assets/staff/RazhamashviliNino.png';
import IMG16 from '../assets/staff/TsitsishviliRevaz.png';
import IMG17 from '../assets/staff/MariamTophuria.png';

const TeamPage = function(){

const { t } = useTranslation();

   const staff = [
        {
            id: 0,
            imgPath: IMG0,
            name: `${t("TeamPage.team.staff0.name")}`,
            lastname: `${t("TeamPage.team.staff0.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff0.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff0.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff0.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: `${t("TeamPage.team.staff0.participentInfo")}`,
        },
        {
            id: 1,
            imgPath: IMG1,
            name: `${t("TeamPage.team.staff1.name")}`,
            lastname: `${t("TeamPage.team.staff1.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff1.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff1.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff1.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff1.pedagogyInfo")}`,
            participentInfo: `${t("TeamPage.team.staff1.participentInfo")}`,
        },
        {
            id: 2,
            imgPath: IMG2,
            name: `${t("TeamPage.team.staff2.name")}`,
            lastname: `${t("TeamPage.team.staff2.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff2.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff2.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff2.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff2.pedagogyInfo")}`,
            participentInfo: `${t("TeamPage.team.staff2.participentInfo")}`,
        },
        {
            id: 3,
            imgPath: IMG3,
            name: `${t("TeamPage.team.staff3.name")}`,
            lastname: `${t("TeamPage.team.staff3.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff3.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff3.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff3.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff3.pedagogyInfo")}`,
            participentInfo: '',
        },
        {
            id: 4,
            imgPath: IMG4,
            name: `${t("TeamPage.team.staff4.name")}`,
            lastname: `${t("TeamPage.team.staff4.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff4.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff4.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff4.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 5,
            imgPath: IMG5,
            name: `${t("TeamPage.team.staff5.name")}`,
            lastname: `${t("TeamPage.team.staff5.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff5.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff5.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff5.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 6,
            imgPath: IMG16,
            name: `${t("TeamPage.team.staff6.name")}`,
            lastname: `${t("TeamPage.team.staff6.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff6.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff6.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff6.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 7,
            imgPath: IMG7,
            name: `${t("TeamPage.team.staff7.name")}`,
            lastname: `${t("TeamPage.team.staff7.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff7.shortInfo")}`,
            longInfo: '',
            experienceInfo: ``,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 8,
            imgPath: IMG15,
            name: `${t("TeamPage.team.staff8.name")}`,
            lastname: `${t("TeamPage.team.staff8.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff8.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff8.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff8.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff8.pedagogyInfo")}`,
            participentInfo: `${t("TeamPage.team.staff8.participentInfo")}`,
        },
        {
            id: 9,
            imgPath: IMG9,
            name: `${t("TeamPage.team.staff9.name")}`,
            lastname: `${t("TeamPage.team.staff9.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff9.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff9.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff9.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff9.pedagogyInfo")}`,
            participentInfo: ``,
        },
        {
            id: 10,
            imgPath: IMG14,
            name: `${t("TeamPage.team.staff10.name")}`,
            lastname: `${t("TeamPage.team.staff10.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff10.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff10.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff10.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff10.pedagogyInfo")}`,
            participentInfo: ``,
        },
        {
            id: 11,
            imgPath: IMG11,
            name: `${t("TeamPage.team.staff11.name")}`,
            lastname: `${t("TeamPage.team.staff11.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff11.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff11.longInfo")}`,
            experienceInfo: ``,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 12,
            imgPath: IMG12,
            name: `${t("TeamPage.team.staff12.name")}`,
            lastname: `${t("TeamPage.team.staff12.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff12.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff12.longInfo")}`,
            experienceInfo: ``,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 13,
            imgPath: IMG13,
            name: `${t("TeamPage.team.staff13.name")}`,
            lastname: `${t("TeamPage.team.staff13.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff13.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff13.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff13.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff13.pedagogyInfo")}`,
            participentInfo: `${t("TeamPage.team.staff13.participentInfo")}`,
        },
        {
            id: 14,
            imgPath: IMG10,
            name: `${t("TeamPage.team.staff14.name")}`,
            lastname: `${t("TeamPage.team.staff14.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff14.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff14.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff14.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff14.pedagogyInfo")}`,
            participentInfo: ``,
        },
        {
            id: 15,
            imgPath: IMG8,
            name: `${t("TeamPage.team.staff15.name")}`,
            lastname: `${t("TeamPage.team.staff15.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff15.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff15.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff15.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
        {
            id: 16,
            imgPath: IMG6,
            name: `${t("TeamPage.team.staff16.name")}`,
            lastname: `${t("TeamPage.team.staff16.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff16.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff16.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff16.experienceInfo")}`,
            pedagogyInfo: `${t("TeamPage.team.staff16.pedagogyInfo")}`,
            participentInfo: `${t("TeamPage.team.staff16.participentInfo")}`,
        },
        {
            id: 17,
            imgPath: IMG17,
            name: `${t("TeamPage.team.staff17.name")}`,
            lastname: `${t("TeamPage.team.staff17.lastname")}`,
            shortInfo: `${t("TeamPage.team.staff17.shortInfo")}`,
            longInfo: `${t("TeamPage.team.staff17.longInfo")}`,
            experienceInfo: `${t("TeamPage.team.staff17.experienceInfo")}`,
            pedagogyInfo: ``,
            participentInfo: ``,
        },
    ]

    const [state, setState] = useState(0);
    const refBox: any = useRef(null);

    return(
        <TeamWrap>
            <div className="center-container">
                <div className="image-container">
                    {staff.map(each => {
                        return <div key={each.id} onClick={() => { refBox.current.scrollIntoView(), setState(each.id) }} className="image-box"><img className="doc-img" src={each.imgPath} alt="doctor photo" /></div>
                    })}
                </div>

                <div className="scroll-box">
                 <div ref={refBox} className="scroll-fix"></div>
                </div>
                <div className="member-box">
                    <div className="img-box">
                        <img className="img" src={staff[state].imgPath} alt="" />
                    </div>
                    <div className="info-list">
                        <p className="name">{staff[state].name} {staff[state].lastname}</p>
                        <p>{staff[state].shortInfo}</p>
                        <p>{staff[state].longInfo}</p>
                        <p>{staff[state].experienceInfo}</p>
                        <p>{staff[state].participentInfo}</p>
                    </div>
                </div>
            </div>
        </TeamWrap>
    )
}

export default TeamPage;

const TeamWrap = styled.section`
    margin-top: 5.8rem;
    padding: 0.1rem 0;
    width: 100%;

    .center-container {
        width: 90%;
        margin: 0 auto;

        .image-container {
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            grid-row-gap: 0.15rem;
            grid-column-gap: 0.2rem;
            overflow: hidden;
            width: 100%;
            overflow: hidden;

            .image-box {
                overflow: hidden;
                width: 100%;
                height: 17rem;
                border: 1px solid var(--Hover-Lightblue);
                display: flex;
                justify-content: center;
                align-items: center;
                background: var(--Hover-Lightblue);
                cursor: pointer;

                &:hover .doc-img {
                    transform: scale(1.1);
                    filter: brightness(1.1);
                }

                .doc-img {
                    width: 100%;
                    height: 100%;
                    transform: scale(1.05);
                    object-fit: cover; 
                    transition: all 0.2s;  
                    object-position: top;                 
                }
            }
        }

        .scroll-box {
            position: relative;
            .scroll-fix {
                position: absolute;
                bottom: 0%;
                opacity: 0;
                height: 2.8rem;
                width: 4rem;
                pointer-events: none;
            }
        }

        .member-box {
            margin-top: 2rem;
            background: var(--Hover-Lightblue);
            display: flex;
            border-radius: 0.3rem;
            overflow: hidden;
           
            .img-box {
                
                .img {
                    width: 15rem;
                    object-fit: cover;
                }
            }

            .info-list {
                padding: 2rem 1rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                font-size: 1.05rem;

                .name {
                    font-weight: 700;
                    font-size: 1.3rem;
                }
            }
        }
    }

        //    Below 1440px
           @media(max-width: 90em) {
                .center-container {
                    width: 100%;
                }
           }
                    // Below 1150px
                    @media(max-width: 71.875em) {
                        .center-container {
                            .image-container {
                                grid-template-columns: repeat(5,1fr);
                            }

                            .member-box {
                                .img-box {
                                    display: none;
                                }

                                .info-list {
                                    padding: 2rem 2.5rem;
                                    .name {
                                        text-align: center;
                                    }
                                }
                            }
                        }
                    }
                            // Below 950px
                            @media(max-width: 59.375em) {
                                .center-container {
                                    .image-container {
                                        grid-template-columns: repeat(4, 1fr);
                                    }
                                }
                            }
                                        // Below 750px
                                        @media(max-width: 46.875em) {
                                            .center-container {
                                                .image-container {
                                                    grid-template-columns: repeat(3, 1fr);
                                                    grid-row-gap: 0.1rem;
                                                    grid-column-gap: 0.1rem;
                                                }
                                            }
                                        }
                                                // Below 550px
                                                @media(max-width: 34.375em) {
                                                    .center-container {
                                                        .image-container {
                                                            grid-template-columns: repeat(2, 1fr);
                                                        }

                                                        .member-box {
                                                            .info-list {
                                                                padding: 1rem 0.5rem;
                                                            }
                                                        }
                                                    }
                                                }

                                                        // Below 425px
                                                        @media(max-width: 26.5625em) {
                                                            margin-top: 4.6rem;
                                                        }
`