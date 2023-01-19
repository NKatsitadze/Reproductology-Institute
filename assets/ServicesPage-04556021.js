import{s,a as r,j as e,u as a,P as c,w as o,x as l,y as n,L as t}from"./index-15372c02.js";const d="/repro/assets/ardi-1e8c710c.png",m="/repro/assets/tbc-3b0a1550.png",g="/repro/assets/qartu-5a390cd4.png",x="/repro/assets/Alfa-d6c01d6f.jpg",h="/repro/assets/igg-3a0681c9.png",p="/repro/assets/unison-72aeb59c.jpg",b="/repro/assets/psp-7d9ad63a.png",v=function(){return r(u,{className:"insurance-section",children:[e("span",{}),r("div",{className:"insurance-box",children:[e("div",{className:"logo-box",children:e("img",{className:"logo",src:d,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:m,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:g,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:x,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:h,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:p,alt:"Insurance company logo"})}),e("div",{className:"logo-box",children:e("img",{className:"logo",src:b,alt:"Insurance company logo"})})]})]})},u=s.section`
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
`,S="/repro/assets/gov-84ff0c73.png",w="/repro/assets/learning-ab28894d.webp",f="/repro/assets/syndrome-0b25ce3a.webp",N="/repro/assets/kids-f878137a.webp",B=function(){const{t:i}=a();return e(y,{children:r("div",{className:"center-container",children:[r("div",{className:"ui-box",children:[r("div",{className:"service-box",children:[e("img",{className:"service-img aid-fix fit",src:S,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesPage.aidBox.title")}),e("li",{children:i("ServicesPage.aidBox.p1")}),e("li",{children:i("ServicesPage.aidBox.p2")}),e("li",{children:i("ServicesPage.aidBox.p3")}),e("li",{children:i("ServicesPage.aidBox.p4")}),e("li",{children:i("ServicesPage.aidBox.p5")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:c,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesSection.title1")}),e("li",{children:i("ServicesSection.1box1")}),e("li",{children:i("ServicesSection.1box2")}),e("li",{children:i("ServicesSection.1box3")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:o,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesSection.title2")}),e("li",{children:i("ServicesSection.2box1")}),e("li",{children:i("ServicesSection.2box2")}),e("li",{children:i("ServicesSection.2box3")}),e("li",{children:i("ServicesSection.2box4")}),e("li",{children:i("ServicesSection.2box5")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:l,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesSection.title3")}),e("li",{children:i("ServicesSection.3boxExtra1")}),e("li",{children:i("ServicesSection.3boxExtra2")}),e("li",{children:i("ServicesSection.3box2")}),e("li",{children:i("ServicesSection.3boxExtra3")}),e("li",{children:i("ServicesSection.3box1")}),e("li",{children:i("ServicesSection.3box3")}),e("li",{children:i("ServicesSection.3box4")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:n,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesPage.diagnosis.title")}),e("li",{children:i("ServicesPage.diagnosis.p1")}),e("li",{children:i("ServicesPage.diagnosis.p2")}),e("li",{children:i("ServicesPage.diagnosis.p3")}),e("li",{children:i("ServicesPage.diagnosis.p4")}),e("li",{children:i("ServicesPage.diagnosis.p5")}),e("li",{children:i("ServicesPage.diagnosis.p6")}),e("li",{children:i("ServicesPage.diagnosis.p7")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:f,alt:"service image"}),r("ul",{className:"list-box",children:[e("li",{className:"bold",children:i("ServicesPage.syndrom.title")}),e("li",{children:i("ServicesPage.syndrom.p1")}),e("li",{children:i("ServicesPage.syndrom.p2")}),e("li",{children:i("ServicesPage.syndrom.p3")})]})]}),r("div",{className:"service-box",children:[e("img",{className:"service-img",src:N,alt:"service image"}),e("ul",{className:"list-box",children:e("li",{className:"bold",children:i("ServicesPage.kids.title")})})]}),r(t,{className:"service-box",to:"/repro/residency",children:[e("img",{className:"service-img",src:w,alt:"service image"}),e("div",{className:"list-box",children:r("span",{className:"bold",children:[i("ServicesPage.residency.title"),e("span",{className:"arrow",children:"»"})]})})]})]}),e(v,{})]})})},y=s.div`
    margin-top: 5.8rem;
    width: 100%;

    .center-container {
        width: 80%;
        margin: 0 auto;
        padding: 1rem 0;

        .ui-box {
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 0.5rem;

            .service-box {
                width: 100%;
                display: flex;
                border-radius: 0.3rem;
                overflow: hidden;
                gap: 1rem;
                border: 2px solid transparent;
                border-bottom: 2px solid var(--Hover-Lightblue);
                transition: all 0.3s;
                text-decoration: none;

                &:hover {
                    border: 2px solid var(--Catalina-Blue);
                    background: var(--Background-Lightblue);
                    margin-left: 0.5rem;
                }

                .aid-fix {
                    width: 13rem !important;
                    padding-bottom: 0.5rem;
                }

                .service-img {
                    width: 13rem;
                }

                .list-box {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    gap: 0.5rem;
                    padding: 1rem 0rem;
                    font-size: 1.2rem;
                    list-style: none;

                    .arrow {
                        font-size: 2rem;
                        animation-name: vanish;
                        animation-iteration-count: infinite;
                        animation-duration: 4s;
                    }

                    @keyframes vanish {
                        0% {
                            opacity: 0;
                        }
                        25% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0;
                        }
                        75% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                        }
                    }

                    .bold {
                        font-size: 1.2rem;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    .fit {
        object-fit: cover;
    }

                // Below 1150px
                @media(max-width: 71.875em) {
                    .center-container {
                        width: 90%;
                    }
                }

                        // Below 950px
                        @media(max-width: 59.375em) {
                            .center-container {
                                width: 99%;

                                .ui-box {
                                    .service-box {
                                        &:hover {
                                            margin-left: 0rem;
                                        }
                                    }
                                }
                            }
                        }

                                // Below 850px
                                @media(max-width: 53.125em) {

                                    .center-container {

                                      .ui-box {
                                          .service-box {
                                            gap: 0.5rem;

                                            .list-box {
                                                font-size: 1rem;

                                                .bold {
                                                    font-size: 1rem;
                                                }
                                            }

                                            .aid-fix {
                                                width: 10rem !important;
                                                padding-bottom: 0rem;
                                                object-fit: contain;
                                            }   
                                              
                                              .service-img {
                                                  width: 10rem;
                                                }
                                            }  
                                        }
                                    }
                                }
                                            // Below 650px
                                            @media(max-width: 40.625em) {

                                                .center-container {

                                                .ui-box {
                                                    .service-box {

                                                        .aid-fix {
                                                            width: 9rem !important;
                                                        }   
                                                        
                                                        .service-img {
                                                            width: 9rem;
                                                            }
                                                        }  
                                                    }
                                                }
                                            }
                                                        // Below 550px
                                                        @media(max-width: 34.375em) {

                                                            .center-container {
                                                                width: 100%;

                                                            .ui-box {
                                                                .service-box {
                                                                    padding: 0 1rem;
                                                                    flex-direction: column;
                                                                    align-items: center;

                                                                    .list-box {
                                                                        text-align: center;
                                                                    }

                                                                    .aid-fix {
                                                                        width: 13rem !important;
                                                                    }   
                                                                    
                                                                    .service-img {
                                                                        width: 13rem;
                                                                        border-bottom-right-radius: 0.3rem;
                                                                        border-bottom-left-radius: 0.3rem;
                                                                        }
                                                                    }  
                                                                }
                                                            }
                                                        }
                                                                    // Below 425px
                                                                    @media(max-width: 26.5625em) {
                                                                        margin-top: 4webprem;

                                                                        .center-container {

                                                                        .ui-box {
                                                                            .service-box {

                                                                                .list-box {
                                                                                    font-size: 1.1rem;
                                                                                }

                                                                                .aid-fix {
                                                                                    width: 10rem !important;
                                                                                }   
                                                                                
                                                                                .service-img {
                                                                                    width: 10rem;
                                                                                    }
                                                                                }  
                                                                            }
                                                                        }
                                                                    }
`;export{B as default};
