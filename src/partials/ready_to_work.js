import React from "react";


function ReadyToWork() {

    // const currency = sessionStorage.getItem('currency');

    return (
        <section>
            <div className="container ready-info">
                <div>
                    <h1>
                        Ready for success? Work with OlaGee® today.
                    </h1>
                </div>
                <div className="d-flex flex-center justify-content-center">
                    <div className="btn-group">

                        {/* {currency && currency === 'USD' ?
                            <a href="tel:+18507820008" className="btn btn-ola d-flex align-items-center me-3">
                                <i className="fa fa-phone"></i>
                                <div className="d-flex flex-column ms-2">
                                    <div style={{ fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Call Now</div>
                                    <div>+1 850 782 0008</div>
                                </div>
                            </a>
                            :
                            ''
                        }
                        {currency && currency === 'GBP' ?
                            <a href="tel:+447451276400" className="btn btn-ola d-flex align-items-center me-3">
                                <i className="fa fa-phone"></i>
                                <div className="d-flex flex-column ms-2">
                                    <div style={{ fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Call Now</div>
                                    <div>+44 745 127 6400</div>
                                </div>
                            </a>


                            :
                            ''
                        }
                        {currency && currency === 'AUD' ?
                            <a href="tel:+61480004120" className="btn btn-ola d-flex align-items-center me-3">
                                <i className="fa fa-phone"></i>
                                <div className="d-flex flex-column ms-2">
                                    <div style={{ fontSize: '12px', marginBottom: '5px', fontWeight: 'bold' }}>Call Now</div>
                                    <div>+61 48 000 4120</div>
                                </div>
                            </a>


                            :
                            ''
                        } */}
                        <a href="/#" data-bs-toggle="modal" data-bs-target="#quoteModal" className="btn btn-yellow text-dark fw-bold d-flex align-items-center me-3">
                            REQUEST A FREE QUOTE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ReadyToWork;