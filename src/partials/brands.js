import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brands() {


    var settings = {
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    };

    return (
        <section className="brands py-4 shadow">
            <div className="container">

                <div className="">

                    <Slider {...settings}>
                        <div className="brand-logo-img  ">
                            <img src="assets/company-logos/Technically.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img">
                            <img src="assets/company-logos/Salesloft.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/philadelphia.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Meltwater.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Marriot.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Jet-pack.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Huffpost.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Calendly.png " className="brand-img" alt="logo" />
                        </div>
                        <div className="brand-logo-img ">
                            <img src="assets/company-logos/Audible.png " className="brand-img" alt="logo" />
                        </div>
                    </Slider>


                </div>
            </div>
        </section>
    );
}
export default Brands;