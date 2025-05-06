import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Link } from "react-router-dom";

import styled from "styled-components";

import { useTranslation } from "react-i18next";

import IMG1 from '../assets/staff/ArchilKhomasuridze.png';
import IMG2 from '../assets/staff/LaliPkhaladze.png';
import IMG3 from '../assets/staff/DiakonidzeTamar.png';
import IMG4 from '../assets/staff/DatoshviliNino.png';
import IMG5 from '../assets/staff/ChopikashviliNana.png';
import IMG6 from '../assets/staff/ViviBibilashvili.png';
import IMG7 from '../assets/staff/TsitsishviliRevaz.png';
import IMG8 from '../assets/staff/DjafaridzeKetevan.png';
import IMG9 from '../assets/staff/RazhamashviliNino.png';
import IMG10 from '../assets/staff/LevidzeNana.png';
import IMG11 from '../assets/staff/PirtskhalavaTinatin.png';
import IMG12 from '../assets/staff/MarghaniaIrine.png';
import IMG13 from '../assets/staff/NadareishviliGiorgi.png';
import IMG14 from '../assets/staff/NanaKvashilava.png';
import IMG15 from '../assets/staff/LiudmilaBarbaqadze.png';
import IMG16 from '../assets/staff/EkaterineLezhava.png';
import IMG17 from '../assets/staff/DavidovaNino.png';
import IMG18 from '../assets/staff/MariamTophuria.png';


const CarouselSection = function() {

    const { t } = useTranslation();

    type ArrowTypes = any;

    function SampleNextArrow(props: ArrowTypes) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--Catalina-Blue)", borderRadius: '50%', opacity: '0.5' }}
            onClick={onClick}
          />
        );
      }

      function SamplePrevArrow(props: ArrowTypes) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "var(--Catalina-Blue)", borderRadius: '50%', opacity: '0.5' }}
            onClick={onClick}
          />
        );
      }

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const carouselStaff = [
        {
            id: 1,
            imgPath: IMG1,
            name: `${t("CarouselSection.staff1.name")}`,
            lastname: `${t("CarouselSection.staff1.lastname")}`,
            profession: `${t("CarouselSection.staff1.profession")}`,
        },
        {
            id: 2,
            imgPath: IMG2,
            name: `${t("CarouselSection.staff2.name")}`,
            lastname: `${t("CarouselSection.staff2.lastname")}`,
            profession: `${t("CarouselSection.staff2.profession")}`,
        },
        {
            id: 3,
            imgPath: IMG3,
            name: `${t("CarouselSection.staff3.name")}`,
            lastname: `${t("CarouselSection.staff3.lastname")}`,
            profession: `${t("CarouselSection.staff3.profession")}`,
        },
        {
            id: 4,
            imgPath: IMG4,
            name: `${t("CarouselSection.staff4.name")}`,
            lastname: `${t("CarouselSection.staff4.lastname")}`,
            profession: `${t("CarouselSection.staff4.profession")}`,
        },
        {
            id: 5,
            imgPath: IMG5,
            name: `${t("CarouselSection.staff5.name")}`,
            lastname: `${t("CarouselSection.staff5.lastname")}`,
            profession: `${t("CarouselSection.staff5.profession")}`,
        },
        {
            id: 6,
            imgPath: IMG6,
            name: `${t("CarouselSection.staff6.name")}`,
            lastname: `${t("CarouselSection.staff6.lastname")}`,
            profession: `${t("CarouselSection.staff6.profession")}`,
        },
        {
            id: 7,
            imgPath: IMG7,
            name: `${t("CarouselSection.staff7.name")}`,
            lastname: `${t("CarouselSection.staff7.lastname")}`,
            profession: `${t("CarouselSection.staff7.profession")}`,
        },
        {
            id: 8,
            imgPath: IMG8,
            name: `${t("CarouselSection.staff8.name")}`,
            lastname: `${t("CarouselSection.staff8.lastname")}`,
            profession: `${t("CarouselSection.staff8.profession")}`,
        },
        {
            id: 9,
            imgPath: IMG9,
            name: `${t("CarouselSection.staff9.name")}`,
            lastname: `${t("CarouselSection.staff9.lastname")}`,
            profession: `${t("CarouselSection.staff9.profession")}`,
        },
        {
            id: 10,
            imgPath: IMG10,
            name: `${t("CarouselSection.staff10.name")}`,
            lastname: `${t("CarouselSection.staff10.lastname")}`,
            profession: `${t("CarouselSection.staff10.profession")}`,
        },
        {
            id: 11,
            imgPath: IMG11,
            name: `${t("CarouselSection.staff11.name")}`,
            lastname: `${t("CarouselSection.staff11.lastname")}`,
            profession: `${t("CarouselSection.staff11.profession")}`,
        },
        {
            id: 12,
            imgPath: IMG12,
            name: `${t("CarouselSection.staff12.name")}`,
            lastname: `${t("CarouselSection.staff12.lastname")}`,
            profession: `${t("CarouselSection.staff12.profession")}`,
        },
        {
            id: 13,
            imgPath: IMG13,
            name: `${t("CarouselSection.staff13.name")}`,
            lastname: `${t("CarouselSection.staff13.lastname")}`,
            profession: `${t("CarouselSection.staff13.profession")}`,
        },
        {
            id: 14,
            imgPath: IMG14,
            name: `${t("CarouselSection.staff14.name")}`,
            lastname: `${t("CarouselSection.staff14.lastname")}`,
            profession: `${t("CarouselSection.staff14.profession")}`,
        },
        {
            id: 15,
            imgPath: IMG15,
            name: `${t("CarouselSection.staff15.name")}`,
            lastname: `${t("CarouselSection.staff15.lastname")}`,
            profession: `${t("CarouselSection.staff15.profession")}`,
        },
        {
            id: 16,
            imgPath: IMG16,
            name: `${t("CarouselSection.staff16.name")}`,
            lastname: `${t("CarouselSection.staff16.lastname")}`,
            profession: `${t("CarouselSection.staff16.profession")}`,
        },
        {
            id: 17,
            imgPath: IMG17,
            name: `${t("CarouselSection.staff17.name")}`,
            lastname: `${t("CarouselSection.staff17.lastname")}`,
            profession: `${t("CarouselSection.staff17.profession")}`,
        },
        {
            id: 18,
            imgPath: IMG18,
            name: `${t("CarouselSection.staff18.name")}`,
            lastname: `${t("CarouselSection.staff18.lastname")}`,
            profession: `${t("CarouselSection.staff18.profession")}`,
        },
      ]

    return (
        <CarouselWrap>
           <div className="center-container">
                <Slider {...settings}>
                    {carouselStaff.map(member => {
                        return <div key={member.id} className="staff-container">
                        <div className="img-box">
                            <img className="img" src={member.imgPath} alt="doctor photo" />
                        </div>
                        <div className="name">{member.name} {member.lastname}</div>
                        <div className="proff">{member.profession}</div>
                    </div>
                    })}
                </Slider>
            </div> 
                <Link className="btn" to='/repro/team'>{t("CarouselSection.carouselButton")}</Link>
        </CarouselWrap>
    )
}

export default CarouselSection;

const CarouselWrap = styled.section`
    background: var(--Background-Lightblue);
    padding: 2rem 0 4rem 0;
    position: relative;

    .center-container { 
        width: 80%;
        margin: 0 auto;
        text-align: center;

        &:hover {
            cursor: pointer;
        }

        &:active {
            cursor: grabbing;
        }
    }

    .staff-container {
        display: flex !important;
        flex-direction: column !important;
        text-align: center;
        gap: 1rem;
        align-items: center;
        transition: all 0.5s !important;
        position: relative;
        overflow: hidden;
        border-radius: 0.3rem;
        color: var(--Catalina-Blue);

        &:hover::after {
            transform: scale(20);
            opacity: 1;
        }
        
        &::after {
            content: '';
            background: linear-gradient(90deg, rgba(255,255,255,1) 15%, rgba(210,228,242,1) 40%, rgba(255,255,255,1) 90%);
            position: absolute;
            transition: all 0.3s;
            z-index: -1;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 10%;
            width: 10%;
            opacity: 0;
        }
    }

    .name {
        font-weight: 700;
        font-size: 1.2rem;
    }

    .proff {
        font-size: 1.1rem;
    }

    .img-box {
        height: 23rem;
        overflow: hidden;
        display: flex;
        justify-content: center;

        &:hover .img {
            transform: scale(1.05);
        }
    }

    .img {
        height: 100%;
        object-fit: cover;
        transition: all 0.5s;
    }

    .btn {
        font-size: 1.3rem;
        font-weight: 700;
        padding: 0.7rem 1.5rem;
        border: 1px solid var(--Catalina-Blue);
        border-radius: 0.3rem;
        color: var(--Catalina-Blue);
        cursor: pointer;
        background: var(--Hover-Border);
        transition: all 0.25s;
        text-decoration: none;
        position: absolute;
        left: 50%;
        bottom: -1%;
        transform: translateX(-50%);
    }

    .btn:hover {
        bottom: 0%;
        color: #fff;
        background: var(--Catalina-Blue);
        box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
        -webkit-box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 13px 13px 1px rgba(0,0,0,0.25);
    }

                    // Below 1200px
                    @media(max-width: 75em) {
                        .center-container {
                            width: 90%;
                        }
                    }
                        // Below 1150px
                        @media(max-width: 71.875em) {
                            .btn {
                                font-size: 1.1rem;
                                bottom: 2%;
                            }
                        }
                                // Below 1100px
                                @media(max-width: 68.75em) {
                                    .center-container {
                                        width: 93%;
                                    }

                                    .img-box {
                                        height: 20rem;
                                    }
                                }
                                            // Below 850px
                                            @media(max-width: 53.125em) {
                                                .center-container {
                                                    width: 100%;
                                                }

                                                .img-box {
                                                    height: 23rem;
                                                }
                                            }
`