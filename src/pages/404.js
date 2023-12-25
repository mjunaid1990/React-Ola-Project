import React from "react";

import ReadyToWork from "../partials/ready_to_work";
import Testimonials from "../partials/testimonials";
function PageNotFound() {

    


    return (
        <div>
            <section>
                <div className="bg-terms simple-banner">
                    <div className="container">
                        <h1 className="mb-0">404 Not Found</h1>
                        <div className="terms-border"></div>
                    </div>
                </div>
            </section>
            <section className="container pt-5 pb-5">
                <div className="terms-info">
                    <p>page not found</p>
                </div>
            </section>
            <Testimonials></Testimonials>
            <ReadyToWork></ReadyToWork>
        </div >
    );
}
export default PageNotFound;