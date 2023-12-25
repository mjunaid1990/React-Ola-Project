import React from "react";

function ThankYou() {

    


    return (
        <div className="order-info" style={{minHeight: '100vh'}}>
            <div className="container">
                <div className=" text-center logo-heading mt-5">
                    <h3 className="text-uppercase">
                        Thank You
                    </h3>
                </div>
                <div className="row mb-5">
                    <div className="col-12 col-md-6 offset-md-3 form text-center">
                        <div id="myForm">
                            <p>You have successfully made payment. Thank You!</p>
                            <a href="/" className="btn btn-ola mt-4">Go Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ThankYou;