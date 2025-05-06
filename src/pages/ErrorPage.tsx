import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from '../assets/logo.png';

import { useTranslation } from 'react-i18next';

const ErrorPage = function() {

    const { t } = useTranslation();

    return (
        <Page>
            <img className="logo" src={logo} alt="logo" />
            <div className="info">
                 <span className="notFound">{t("ErrorPage.p1")}</span>
                 <span className="returning">{t("ErrorPage.p2")}</span>
                 <Link className="link" to='/'>{t("ErrorPage.p4")}</Link>
            </div>
        </Page>
    )
}

export default ErrorPage;

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    background: var(--Hover-Lightblue);
    display: flex;
    justify-content: center;
    align-items: center;

    .logo {
        height: 7.5rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        color: var(--Catalina-Blue);

        .notFound {
            font-size: 1.5rem;
        }

        .returning {
            font-size: 1.2rem;
        }

        .link {
            font-size: 1.35rem;
        }

    }
`