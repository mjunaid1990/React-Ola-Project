import React from "react";

function Faqs(props) {

    

    return (
        <section>
            <div className="container py-5">
                <div>
                    <h1 className="question-info">
                        FREQUENTLY ASKED QUESTIONS
                    </h1>
                </div>

                {props.results.length > 0 && (
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        {props.results.map((item, index) => (
                            <div key={'faq-'+item.id} className="accordion-item mb-3">
                                <div className="accordion-body">
                                    <h2 className="accordion-header " id="panelsStayOpen-headingOne">
                                        <button className="w-100 accordion-button h6 text-gray text-start border-0 " type="button"
                                            data-bs-toggle="collapse" data-bs-target={'#panelsStayOpen-collapse-'+item.id}
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                                            {item.title}
                                        </button>
                                    </h2>
                                    <div id={'panelsStayOpen-collapse-'+item.id} className={`accordion-collapse collapse ${index === 0 ? "show" : ""} `}
                                        aria-labelledby="panelsStayOpen-headingOne">
                                            {item.description}
                                    </div>
                                </div>
                        </div>

                        ))}

                    </div>

                )}

            </div>
        </section>
    );
}
export default Faqs;