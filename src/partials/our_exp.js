import React from "react";
import { isMobile } from "react-device-detect";

function OurExperience() {
    return (



        <div className="experiene-bg">
            <div className="container">
                {isMobile
                    ?
                    <div className="exp-wrap">

                        <div className="row">
                            <div className="col-12">
                                <div className="experience-info">
                                    <h2>
                                        Over 10+ Years of Experience in the
                                        Online Industry
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">

                            <div className="portfolio-experience">
                                <div className="experience-info">
                                    <h1>
                                        1500+
                                    </h1>
                                    <p>
                                        Wordmark Logos
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-experience ">
                                <div className="experience-info">
                                    <h1>
                                        799+
                                    </h1>
                                    <p>
                                        Symbolic Logos
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-experience">
                                <div className="experience-info">
                                    <h1>
                                        2133+
                                    </h1>
                                    <p>
                                        2D Logos
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-experience">
                                <div className="experience-info">
                                    <h1>
                                        1200+
                                    </h1>
                                    <p>
                                        3D Logos
                                    </p>
                                </div>
                            </div>
                            <div className="portfolio-experience">
                                <div className="experience-info">
                                    <h1>
                                        590+
                                    </h1>
                                    <p>
                                        Ilustration
                                        <br />Logos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="row">
                        <div className="portfolio-experience exp-text">
                            <div className="experience-info">
                                <h2>
                                    Over 10+ Years of Experience in the
                                    Online Industry
                                </h2>
                            </div>
                        </div>
                        <div className="portfolio-experience">
                            <div className="experience-info">
                                <h1>
                                    1500+
                                </h1>
                                <p>
                                    Wordmark Logos
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-experience ">
                            <div className="experience-info">
                                <h1>
                                    799+
                                </h1>
                                <p>
                                    Symbolic Logos
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-experience">
                            <div className="experience-info">
                                <h1>
                                    2133+
                                </h1>
                                <p>
                                    2D Logos
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-experience">
                            <div className="experience-info">
                                <h1>
                                    1200+
                                </h1>
                                <p>
                                    3D Logos
                                </p>
                            </div>
                        </div>
                        <div className="portfolio-experience">
                            <div className="experience-info">
                                <h1>
                                    590+
                                </h1>
                                <p>
                                    Ilustration Logos
                                </p>
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    );
}
export default OurExperience;