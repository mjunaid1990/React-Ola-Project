import React from "react";


function PagesBackground(props) {

    const currency = sessionStorage.getItem('currency');


    const renderReplaceText = (text) => {
        if(currency === 'GBP') {
            return text.replace('$', '£');
        }else if(currency === 'EUR') {
            return text.replace('$', '€');
        }else {
            return text;
        }
    }

    return (
        <section className="page-banner" style={{ backgroundImage: `url(${props.results.src})` }}>
            <div className="container position-relative h-100">
                <div className="banner-content row align-items-center h-100">
                    <div className="col-12 col-md-5 col-lg-5">
                        <h1 className="text-white text-start mb-0">
                            {props.results.heading}
                        </h1>
                        <h2 className="text-start m-0">
                            {props.results.h2_text}
                        </h2>
                        <h3 className="text-start m-0">
                            {props.results.h3_text}
                        </h3>
                        <hr />
                        <p className="text-start mb-4">
                            {props.results.para}
                            
                        </p>
                        {props.results.button_text && (
                            <a href="#pricing-sec" className="btn btn-yellow">{ renderReplaceText(props.results.button_text) }<i className="fa fa-arrow-right"></i></a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PagesBackground;