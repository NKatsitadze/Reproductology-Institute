import styled from "styled-components";

import logo from '../assets/logo.png';

const LoadingPage = function() {
    return(
        <Page>
            <img className="logo" src={logo} alt="logo" />
        </Page>
    )
}

export default LoadingPage;

const Page = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background: var(--Hover-Lightblue);
    justify-content: center;
    align-items: center;

    .logo {
        height: 10rem;
        width: 10rem;
        animation-name: rotation;
        animation-duration: 7s;
        animation-iteration-count: infinite;
    }

   @keyframes rotation {
    0% {
        transform: scaleX(1);
    }
    50% {
        transform: scaleX(-1);
    }
    
    100% {
        transform: scaleX(1);
    }
   }
`