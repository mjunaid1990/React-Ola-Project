import React from "react";
import ImageGallery from "./_gallery";
// import Lightbox from 'react-18-image-lightbox';
// import 'react-18-image-lightbox/style.css';

// import { Gallery } from "react-grid-gallery";




function Portfolio(props) {


    return (

        <section className="portfolio bg-white flex-pills pb-5">
            <div className="text-center custom-heading bg-blue-heading py-4">
                <h1>
                    OUR PORTFOLIO
                </h1>
                <p>
                    RECENTLY COMPLETED PROJECTS
                </p>
            </div>
            <div className="container py-4">

            {props.results.length > 0 && (
                    <ul className="nav nav-pills" id="portfolio" role="tablist" >
                        {props.results.map((item, index) => (
                            <li key={item.id} className="nav-item" role="presentation">
                                <button className={`nav-link ${index === 0 ? "active" : ""} `} id={'tab-p-' + item.id} data-bs-toggle="tab" data-bs-target={'#p' + item.id} type="button" role="tab" aria-controls={item.id} aria-selected="true">{item.name}</button>
                            </li>

                        ))}

                    </ul>

                )}

                
            </div>
            <div className="full-width">

                {props.results.length > 0 && (
                    <div className="tab-content" id="myTabContent">
                        {props.results.map((item, index) => (
                            <div key={item.id +'-portfolio-'+{index}} className={`tab-pane fade  ${index === 0 ? "show active" : ""} `} id={'p'+item.id} role="tabpanel" aria-labelledby={item.id + '-tab'}>
                                <ImageGallery images={item.images}></ImageGallery>
                            </div>

                        ))}

                    </div>

                )}

                


            </div>
        </section>


    );
}
export default Portfolio;