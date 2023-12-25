import React from "react";
import ImageGallery from "./_gallery";
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css';

// import { Gallery } from "react-grid-gallery";




function PortfolioSingle(props) {


    return (

        <section className="portfolio bg-white flex-pills pb-5" id="protfolio-sec">
            <div className="text-center custom-heading bg-blue-heading py-4">
                <h1>
                    OUR PORTFOLIO
                </h1>
                <p>
                    RECENTLY COMPLETED PROJECTS
                </p>
            </div>
            <div className="container py-4">

            

                
            </div>
            <div className="full-width">

                {props.results.length > 0 && (
                    <div className="port-content">
                        {props.results.map((item, index) => (
                            <div key={item.id +'-portfolio-'+{index}} className="gallery-container" >
                                <ImageGallery images={item.images}></ImageGallery>
                            </div>

                        ))}

                    </div>

                )}

                


            </div>
        </section>


    );
}
export default PortfolioSingle;