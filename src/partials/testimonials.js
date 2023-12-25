import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {


    const [results, setResults] = useState([])
    const [isloading, setIsloading] = useState(false)


    useEffect(() => {
        fetchFrontPageData()
    }, [])

    const fetchFrontPageData = () => {
        fetch("https://app.olagee.com/api/testimonials")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setResults(data.list)
                setIsloading(true);
            })
    }

    const renderTestimonialSlider = (data) => {

        var settings = {
            dots: false,
            infinite: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        
                    }
                },
                {
                    breakpoint: 912,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };

        return (

            <Slider {...settings}>



                {data.map((item, index) => (
                    <div key={item.id + '-test'} className="row-full">
                        
                            <div className="box-review">
                                <div className="box-padding">
                                    <div className="d-flex justify-content-baseline align-item-start">
                                        <div className="user-img">
                                            <img src={'https://app.olagee.com/writable/uploads/testimonials/' + item.id + '/' + item.image} width="40px" height="40px" alt="" />
                                        </div>
                                        <div className=" ps-2 ">
                                            <h1 className="fw-bolder">
                                                {item.name}
                                            </h1>
                                            <h6>
                                                {item.title}
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="review-img">
                                        <img src="assets/images/review.png" alt="" />
                                    </div>
                                    <div className="pt-2 box-review-paragraph">
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}


            </Slider>
        )
    }



    return (
        <section className="combo-bg py-5 reviews">

            <div className="container">
                <div>
                    <h1 className=" text-white fw-bold pb-4 text-center">
                        OUR RECENT CUSTOMER REVIEWS
                    </h1>
                </div>
                {isloading ? renderTestimonialSlider(results) : ''}

            </div>
        </section>
    );
}
export default Testimonials;