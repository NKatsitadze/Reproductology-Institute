import styled from "styled-components";

import galleryIMG1 from '../assets/students/1.webp';
import galleryIMG2 from '../assets/students/2.webp';
import galleryIMG4 from '../assets/students/4.webp';
import galleryIMG5 from '../assets/students/5.webp';
import galleryIMG6 from '../assets/students/6.webp';
import galleryIMG7 from '../assets/students/7.webp';
import galleryIMG8 from '../assets/students/8.webp';
import galleryIMG9 from '../assets/students/9.webp';
import galleryIMG10 from '../assets/students/10.webp';
import galleryIMG11 from '../assets/students/11.webp';
import galleryIMG12 from '../assets/students/12.webp';

import { useTranslation } from "react-i18next";

const ResidencyPage = function() {

    const { t } = useTranslation();

    return (
        <ResidencyWrap>
            <div className="center-container">
                <div className="res-container">
                    <ul className="res-box">
                        <li>{t("ResidencyPage.p1")}</li>
                        <li>{t("ResidencyPage.p2")}</li>
                        <li>{t("ResidencyPage.p2")}</li>
                        <li>{t("ResidencyPage.p3")}</li>
                        <li>{t("ResidencyPage.p4")}</li>
                        <li>{t("ResidencyPage.p5")}</li>
                        <li>{t("ResidencyPage.p6")}</li>
                        <li>{t("ResidencyPage.p7")}</li>
                        <li>{t("ResidencyPage.p8")}</li>
                   </ul>
                </div>
                <div className="grid-gallery">
                    <div className="img-box-1 fixed"><img className="img" src={galleryIMG10} alt="student photo" /></div>
                    <div className="img-box-2 fixed"><img className="img" src={galleryIMG1} alt="student photo" /></div>
                    <div className="img-box-3 fixed"><img className="img" src={galleryIMG9} alt="student photo" /></div>
                    <div className="img-box-7 fixed"><img className="img" src={galleryIMG5} alt="student photo" /></div>
                    <div className="img-box-8 fixed"><img className="img" src={galleryIMG7} alt="student photo" /></div>
                    <div className="img-box-9 fixed"><img className="img" src={galleryIMG11} alt="student photo" /></div>
                </div>
            </div>
        </ResidencyWrap>
    )
}

export default ResidencyPage;

const ResidencyWrap = styled.section`
    width: 100%;
    margin-top: 6.8rem;

    .center-container {
        width: 80%;
        margin: 0 auto;

        .grid-gallery {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2px;
            margin-bottom: 1.5rem;

            .fixed {
                overflow: hidden;
            }

            .img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transform: scale(1.1);
                filter: brightness(1);
                transition: all 0.3s;

                &:hover {
                    filter: brightness(1.1);
                    transform: scale(1.15);
                }
            }

            .img-box-1 {
                grid-column: 1 / span 8;
                grid-row: 1 / span 2;
            }
            .img-box-2 {
                grid-column: 9 / span 4;
                grid-row: 1 / span 1;
            }
            .img-box-3 {
                grid-column: 9 / span 4;
                grid-row: 2 / span 1;
            }
            .img-box-4 {
                grid-column: 1 / span 4;
                grid-row: 3 / span 1;
            }
            .img-box-5 {
                grid-column: 5 / span 4;
                grid-row: 3 / span 1;
            }
            .img-box-6 {
                grid-column: 9 / span 4;
                grid-row: 3 / span 1;
            }
            .img-box-7 {
                grid-column: 1/ span 4;
                grid-row: 4 / span 1;
            }
            .img-box-8 {
                grid-column: 5 / span 8;
                grid-row: 4 / span 2;
            }
            .img-box-9 {
                grid-column: 1 / span 4;
                grid-row: 5 / span 1;
            }
            .img-box-10 {
                grid-column: 1 / span 8;
                grid-row: 6 / span 2;
            }
            .img-box-11 {
                grid-column: 9 / span 4;
                grid-row: 6 / span 2;
            }
        }

        .res-container {
            padding: 1.5rem 1rem;
            margin: auto;
            margin-bottom: 1.5rem;
            border: 1px solid var(--Catalina-Blue);
            background: var(--Hover-Lightblue);
            border-radius: 0.3rem;
            transition: 0.2s;

            .res-box {
                font-size: 1.2rem;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
        }
    }

    // Below 900px
    @media(max-width: 56.25em) {
        margin-top: 5.5rem;

        .center-container {
            width: 100%;

            .res-container {
                width: 100%;
                border: none;
                border-radius: 0rem;

                &:hover {
                    transform: translateX(0rem);
                }
            }
        }
    }
                        // Below 425px
                        @media(max-width: 26.5625em) {
                            margin-top: 4.5rem;
                        }
`