import{u as a,j as e,a as r,s as o}from"./index-321e470b.js";const i="/repro/assets/ArchilAbout-8b83074d.webp",l="/repro/assets/baneriFin-8b9ac475.png",d="/repro/assets/tsu-0dc49926.webp",b=function(){const{t:n}=a(),t={start1:`${n("AboutPage.p1")}`,start2:`${n("AboutPage.p2")}`,bannerContent:`${n("AboutPage.p3")}`,expContent:`${n("AboutPage.p4")}`,labContent:`${n("AboutPage.p5")}`,radContent:`${n("AboutPage.p6")}`,facultyContent:`${n("AboutPage.p7")}`,endingContent3:`${n("AboutPage.p8")}`,endingContent2:`${n("AboutPage.p9")}`,endingContent1:`${n("AboutPage.p10")}`};return e(c,{children:r("div",{className:"center-box",children:[r("div",{className:"start-box",children:[r("div",{className:"flex",children:[e("img",{className:"banner",src:i,alt:"banner"}),e("p",{children:t.start1})]}),e("p",{children:t.start2})]}),r("div",{className:"banner-box",children:[e("p",{children:t.bannerContent}),e("img",{className:"banner",src:l,alt:"banner"})]}),e("p",{children:t.expContent}),e("br",{}),e("p",{children:t.labContent}),e("br",{}),e("p",{children:t.radContent}),r("div",{className:"faculty",children:[e("img",{className:"logo",src:d,alt:"banner"}),e("p",{children:t.facultyContent})]}),e("p",{children:t.endingContent3}),e("br",{}),e("p",{children:t.endingContent2}),e("br",{}),e("p",{children:t.endingContent1})]})})},c=o.section`
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
`;export{b as default};
