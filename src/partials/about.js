import React from "react";


function AboutSection() {
    return (

        <section className="ola-box about-us py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-12">
                        <h1 className="text-center mb-5 fw-bold">About US</h1>
                        <p className="text-center mb-3">
                            At OlaGee, we understand that in today's digital age, having a strong online presence is essential for businesses to compete and succeed. That's why we offer a range of design and marketing services to help businesses grow their brand and reach their target audience.
                        </p>
                        <p className="text-center mb-3">
                            Our team of experienced professionals specializes in a variety of services, including logo design, website development, social media marketing, search engine marketing (SEM), and search engine optimization (SEO). We take a personalized approach to every project, working closely with our clients to understand their unique needs and create customized solutions.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        01. Logo Design
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Your logo is the face of your brand and the first impression your customers will have. We work closely with you to design a logo that reflects your brand's values, personality, and vision.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        02. Website Development
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        A well-designed website is crucial for your business's success. We create user-friendly, responsive websites that are optimized for search engines and designed to convert visitors into customers.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        03. Social Media Marketing
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Social media is a powerful tool for building brand awareness and engaging with your target audience. We create engaging content and develop targeted advertising campaigns to reach your audience and increase your social media following.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        04. Search Engine Marketing (SEM)
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        SEM is a powerful way to reach potential customers through targeted advertising. We create and manage SEM campaigns to drive traffic to your website and increase conversions.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        05. Search Engine Optimization (SEO)
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        SEO is a critical component of any online marketing strategy. We optimize your website to improve its visibility and search engine rankings, driving more organic traffic to your site.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6">

                    </div>
                </div>

            </div>

        </section>
    );
}
export default AboutSection;