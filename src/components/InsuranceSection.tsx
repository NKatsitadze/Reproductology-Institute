import styled from "styled-components";

import insu1 from '../assets/insurance/ardi.png';
import insu2 from '../assets/insurance/tbc.png';
import insu3 from '../assets/insurance/qartu.png';
import insu4 from '../assets/insurance/Alfa.jpg';
import insu5 from '../assets/insurance/igg.png';
import insu6 from '../assets/insurance/unison.jpg';
import insu7 from '../assets/insurance/psp.png';

const InsuranceSection = function() {
    return (
        <InsuSection className="insurance-section">
            <span></span>
                <div className="insurance-box">
                <div className="logo-box"><img className="logo" src={insu1} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu2} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu3} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu4} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu5} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu6} alt="Insurance company logo" /></div>
                <div className="logo-box"><img className="logo" src={insu7} alt="Insurance company logo" /></div>
                </div>
            </InsuSection>
    )
}

export default InsuranceSection;

const InsuSection = styled.section`
    margin: 2rem 0;

    .insurance-box {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        justify-content: space-between;
        position: relative;
        border: 2px solid var(--Hover-Lightblue);
        border-radius: 0.3rem;
        padding: 1rem 2.5rem;

        .logo-box {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 0.3rem 0.5rem;
            
            &:hover .logo {
                transform: scale(1.05);
                filter: grayscale(0%);
                -webkit-filter: grayscale(0%);
            }
            
            .logo {
                transition: all 0.15s;
                width: 10rem;
                filter: grayscale(100%);
                -webkit-filter: grayscale(100%);
            }
        }
    }

            // Below 1650px
            @media(max-width: 103.125em) {
                .insurance-box {
                    .logo-box {
                        .logo {
                            width: 8rem;
                        }
                    }
                }
            }
                    // Below 1400px
                    @media(max-width: 87.5em) {
                        .insurance-box {
                            .logo-box {
                                .logo {
                                    width: 7rem;
                                }
                            }
                        }
                    }
                            // Below 1250px
                            @media(max-width: 78.125em) {
                                .insurance-box {
                                    grid-template-columns: repeat(4,1fr);
                                    .logo-box {
                                        .logo {
                                            width: 8rem;
                                        }
                                    }
                                }
                            }
                            // Below 650px
                            @media(max-width: 40.625em) {
                                .insurance-box {
                                    grid-template-columns: repeat(3,1fr);
                                }
                            }
                                    // Below 520px
                                    @media(max-width: 32.5em) {
                                        .insurance-box {
                                            grid-template-columns: repeat(2,1fr);  
                                        }
                                    }

                                            // Below 400px
                                            @media(max-width: 25em) {
                                                .insurance-box {
                                                    .logo-box {
                                                        .logo {
                                                            width: 6rem;
                                                        }
                                                    }
                                                }
                                            }
`