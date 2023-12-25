import React, { useEffect, useState } from "react";
import PlansHtml from "./_plans_html";

function Plans() {

    const [results, setResults] = useState([])


    useEffect(() => {
        fetchFrontPageData()
    }, [])

    const fetchFrontPageData = () => {
        fetch("https://app.olagee.com/api/plans")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setResults(data.packages)
            })
    }

    return (
        <section className="pricing-plans flex-pills bg-light py-5" id="pricing-sec">

            <div className="container">

                <div className="text-center custom-heading">
                    <h1>
                        PRICING PLAN
                    </h1>
                    <h2>
                        Choose the plan that suits your business - high quality services, affordable pricing guaranteed with OlaGee®.
                    </h2>
                </div>
                {results.length > 0 && (
                    <ul className="nav nav-pills" id="myTab" role="tablist" >
                        {results.map((item, index) => (
                            <li key={item.id} className="nav-item" role="presentation">
                                <button className={`nav-link ${index === 0 ? "active" : ""} `} id={'tab-' + item.id} data-bs-toggle="tab" data-bs-target={'#' + item.id} type="button" role="tab" aria-controls={item.id} aria-selected="true">{item.name}</button>
                            </li>

                        ))}

                    </ul>

                )}

                {results.length > 0 && (
                    <div className="tab-content" id="myTabContent">
                        {results.map((item, index) => (
                            <div key={item.id +'-'+{index}} className={`tab-pane fade ${index === 0 ? "show active" : ""} `} id={item.id} role="tabpanel" aria-labelledby={item.id + '-tab'}>
                                <PlansHtml packages={item.items}></PlansHtml>
                            </div>

                        ))}

                    </div>

                )}

            </div>
        </section>
    );
}
export default Plans;