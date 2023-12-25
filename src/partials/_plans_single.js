import React from "react";
import PlansHtml from "./_plans_html";

function PlansSingle(props) {

    

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
                

                {props.results.length > 0 && (
                    <div className="plans-content">
                        {props.results.map((item, index) => (
                            <div key={item.id +'-'+{index}} className="plans-container">
                                <PlansHtml packages={item.items}></PlansHtml>
                            </div>

                        ))}

                    </div>

                )}

            </div>
        </section>
    );
}
export default PlansSingle;