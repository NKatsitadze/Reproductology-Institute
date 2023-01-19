import styled from "styled-components";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const FooterSection = function() {

    const { t } = useTranslation();

    return (
        <FooterWrap>
            <div className="center-container">
                <div className="box">
                    <Link className="header lnk" to='/repro/services'>{t("Footer.box1.link1")}</Link>
                    <Link className='lnk' to='/repro/services'>{t("Footer.box1.link2")}</Link>
                    <Link className='lnk' to='/repro/services'>{t("Footer.box1.link3")}</Link>
                    <Link className='lnk' to='/repro/services'>{t("Footer.box1.link4")}</Link>
                </div>
                <div className="box">
                    <Link className="header lnk" to='/repro/about-us'>{t("Footer.box2.link1")}</Link>
                    <Link className='lnk' to='/repro/about-us'>{t("Footer.box2.link2")}</Link>
                    <Link className='lnk' to='/repro/about-us'>{t("Footer.box2.link3")}</Link>
                    <Link className='lnk' to='/repro/about-us'>{t("Footer.box2.link4")}</Link>
                </div>
                <div className="box">
                <Link className="header lnk" to='/repro/contact-us'>{t("Footer.box3.link1")}</Link>
                <span>{t("Footer.box3.link3")}: <br /> (+995 32) 224 00 99 <br /> (+995 32) 224 00 98</span> 
                <span>info@reproinstitute.ge</span>
                </div>
            </div>
        </FooterWrap>
    )
}

export default FooterSection;

const FooterWrap = styled.section`
    width: 100%;
    background: var(--Catalina-Blue);
    padding: 2rem 0;

    .center-container {
        width: 70%;
        margin: 0 auto;
        color: #FFF;
        display: flex;
        justify-content: space-around;
    }

    .box {
        display: flex;
        flex-direction: column; 
        text-align: center;
        gap: 0.3rem;

        .header {
            font-weight: 700;
            font-size: 1.1rem;
        }

        .lnk {
            color: #FFF;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9rem;
            letter-spacing: 1px;
            transition: all 0.3s;

            &:hover {
                transform: translateX(0.2rem);
            }
        }

        .arrow {
            font-size: 1.5rem;
        }

    }

    // Below 1000px
    @media(max-width: 62.5em) {
        .center-container {
            width: 100%;
        }
    }
            // Below 600px
            @media(max-width: 37.5em) {
                .center-container {
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .box {
                    margin: 0 auto;
                    width: auto;
                }
            }
`