import{u as s,j as e,a as i,s as a}from"./index-321e470b.js";const n="/repro/assets/1-50fd2083.webp",o="/repro/assets/2-eacd04f2.webp",d="/repro/assets/4-ff8f8847.webp",g="/repro/assets/5-927e49ef.webp",m="/repro/assets/6-017a3cd0.webp",l="/repro/assets/7-20eb8d9b.webp",c="/repro/assets/8-ca08b0f1.webp",t="/repro/assets/9-604adc98.webp",p="/repro/assets/10-a9353806.webp",x="/repro/assets/11-192da399.webp",b="/repro/assets/12-f01d8481.webp",w=function(){const{t:r}=s();return e(h,{children:i("div",{className:"center-container",children:[i("div",{className:"grid-gallery",children:[e("div",{className:"img-box-1 fixed",children:e("img",{className:"img",src:p,alt:"student photo"})}),e("div",{className:"img-box-2 fixed",children:e("img",{className:"img",src:n,alt:"student photo"})}),e("div",{className:"img-box-3 fixed",children:e("img",{className:"img",src:t,alt:"student photo"})}),e("div",{className:"img-box-4 fixed",children:e("img",{className:"img",src:m,alt:"student photo"})}),e("div",{className:"img-box-5 fixed",children:e("img",{className:"img",src:b,alt:"student photo"})}),e("div",{className:"img-box-6 fixed",children:e("img",{className:"img",src:o,alt:"student photo"})}),e("div",{className:"img-box-7 fixed",children:e("img",{className:"img",src:g,alt:"student photo"})}),e("div",{className:"img-box-8 fixed",children:e("img",{className:"img",src:l,alt:"student photo"})}),e("div",{className:"img-box-9 fixed",children:e("img",{className:"img",src:x,alt:"student photo"})}),e("div",{className:"img-box-10 fixed",children:e("img",{className:"img",src:c,alt:"student photo"})}),e("div",{className:"img-box-11 fixed",children:e("img",{className:"img",src:d,alt:"student photo"})})]}),e("div",{className:"res-container",children:i("div",{className:"res-box",children:[e("b",{children:r("ResidencyPage.p1")}),e("p",{children:r("ResidencyPage.p2")}),e("p",{children:r("ResidencyPage.p3")}),e("p",{children:r("ResidencyPage.p4")}),e("p",{children:r("ResidencyPage.p5")}),e("p",{children:r("ResidencyPage.p6")}),e("p",{children:r("ResidencyPage.p7")}),e("p",{children:r("ResidencyPage.p8")})]})})]})})},h=a.section`
    width: 100%;
    margin-top: 6.8rem;

    .center-container {
        width: 90%;
        margin: 0 auto;


        .grid-gallery {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 2px;

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
            width: 80%;
            margin: 1rem auto;
            border: 2px solid var(--Catalina-Blue);
            background: var(--Hover-Lightblue);
            border-radius: 0.3rem;
            transition: 0.2s;

            &:hover {
                transform: translateX(0.5rem);
            }

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
                // Below 600px
                @media(max-width: 37.5em) {

                    .center-container {

                        .grid-gallery {
                            .img-box-1 {
                                grid-column: 1 / span 12;
                                grid-row: 1 / span 2;
                            }
                            .img-box-2 {
                                grid-column: 1 / span 4;
                                grid-row: 3 / span 1;
                            }
                            .img-box-3 {
                                grid-column: 5 / span 4;
                                grid-row: 3 / span 1;
                            }
                            .img-box-4 {
                                grid-column: 9 / span 4;
                                grid-row: 3 / span 1;
                            }
                            .img-box-5 {
                                grid-column: 1 / span 4;
                                grid-row: 4 / span 1;
                            }
                            .img-box-6 {
                                grid-column: 1 / span 4;
                                grid-row: 5 / span 1;
                            }
                            .img-box-7 {
                                grid-column: 9 / span 4;
                                grid-row: 6 / span 1;
                            }
                            .img-box-8 {
                                grid-column: 1 / span 12;
                                grid-row: 6 / span 2;
                            }
                            .img-box-9 {
                                grid-column: 5 / span 8;
                                grid-row: 8 / span 2;
                            }
                            .img-box-10 {
                                grid-column: 5 / span 8;
                                grid-row: 4 / span 2;
                            }
                            .img-box-11 {
                                grid-column: 1 / span 4;
                                grid-row: 8 / span 2;
                            }
                        }
                    }
                }

                        // Below 425px
                        @media(max-width: 26.5625em) {
                            margin-top: 4.5rem;
                        }
`;export{w as default};
