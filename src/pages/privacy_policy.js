import React, { useEffect, useState } from "react";

import ReadyToWork from "../partials/ready_to_work";
import Testimonials from "../partials/testimonials";
function PrivacyPolicy() {

    const [page, setPage] = useState([])

    useEffect(() => {
        fetchPageData()
    }, [])

    const fetchPageData = () => {
        fetch("https://app.olagee.com/api/page?type=privacy-policy")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPage(data.list)
            })
    }


    return (
        <div>
            <section>
                <div className="bg-terms simple-banner">
                    <div className="container">
                        <h1 className="mb-0">Privacy Policy</h1>
                        <div className="terms-border"></div>
                    </div>
                </div>
            </section>
            <section className="container pt-5 pb-5">
                <div className="terms-info" dangerouslySetInnerHTML={{ __html: page.content }} />
            </section>
            <Testimonials></Testimonials>
            <ReadyToWork></ReadyToWork>
        </div >
    );
}
export default PrivacyPolicy;