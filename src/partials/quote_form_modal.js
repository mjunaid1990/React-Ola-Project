import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import Countdown from "react-countdown";
import 'react-phone-number-input/style.css';


function QuoteModal() {

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            name: inputs.name,
            phone: phone,
            email: inputs.email,
            message: inputs.message
        }
        setSubmitting(true);
        try {
            let res = await fetch("https://app.olagee.com/api/save_quote_form", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let data = await res.json();
            if (data.success) {
                setSubmitting(false)
                setInputs({name: '', email: '', message: ''})
                setSuccessMessage('<div id="success-message" class="alert alert-success alert-dismissible fade show" role="alert"> We have received your request and will be in touch with you soon. Thank you for considering OlaGee® for your needs.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            } else {
                setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            }


        } catch (err) {
            setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            setSubmitting(false)
        }


    }

    // Random component
    const Completionist = () => <span></span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {

        if (completed) {
            // Render a complete state
            return <Completionist />;
        } else {
            // Render a countdown
            return (

                <div className="d-flex justify-content-center countdown-circles">
                    {days > 0 ?
                    <div className="progress-inner text-center">
                        {days <= 30
                            ?
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(days)}deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{days}</div>
                                </div>
                            </div>
                            :
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(days - 30)}deg)`
                                        }
                                    } ></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(180deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{days}</div>
                                </div>
                            </div>
                        }
                        <span className="text-white">Days</span>
                    </div>
                    : ''}
                    <div className="progress-inner text-center">
                        {hours <= 30
                            ?
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(hours)}deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{hours && hours < 10 ?'0'+hours:hours}</div>
                                </div>
                            </div>
                            :
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(hours - 30)}deg)`
                                        }
                                    } ></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(180deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{hours && hours < 10 ?'0'+hours:hours}</div>
                                </div>
                            </div>
                        }
                        <span className="text-white">Hours</span>
                    </div>
                    <div className="progress-inner text-center">
                        {minutes <= 30
                            ?
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(minutes)}deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{minutes && minutes < 10 ?'0'+minutes:minutes}</div>
                                </div>
                            </div>
                            :
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(minutes - 30)}deg)`
                                        }
                                    } ></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(180deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{minutes && minutes < 10 ?'0'+minutes:minutes}</div>
                                </div>
                            </div>
                        }
                        <span className="text-white">Minutes</span>
                    </div>
                    <div className="progress-inner text-center">
                        {seconds <= 30
                            ?
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(seconds)}deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{seconds}</div>
                                </div>
                            </div>
                            :
                            <div className="progress">
                                <span className="progress-left">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(${percentageToDegrees(seconds - 30)}deg)`
                                        }
                                    } ></span>
                                </span>
                                <span className="progress-right">
                                    <span className="progress-bar border-primary" style={
                                        {
                                            transform: `rotate(180deg)`
                                        }
                                    } ></span>
                                </span>

                                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                    <div className="h2 font-weight-bold mb-0 text-white">{seconds}</div>
                                </div>
                            </div>
                        }

                        <span className="text-white">Seconds</span>
                    </div>
                </div>
            );
        }
    };

    const percentageToDegrees = (percentage) => {
        return (percentage / 60) * 360
    }

    return (

        <div className="modal fade" id="quoteModal" tabIndex="-1" aria-labelledby="quoteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">

                    <div className="modal-body p-0">

                        <div className="quoteform-wrap">
                            <div className="quoteform-bg-wrap" style={{ backgroundImage: `url(assets/images/Quote-form-background.png)` }}>
                                <div className="quoteform-bg-wrap-inner">

                                    <Countdown date={Date.now() + 11000000} renderer={renderer} />

                                    <div className="quote-process mt-4">
                                        <a href="/#" className="btn btn-white w-100">Simple Process</a>
                                        <a href="/#" className="btn btn-white w-100">Unlimited Revisions</a>
                                        <a href="/#" className="btn btn-white w-100">Professional Designers</a>
                                        <a href="/#" className="btn btn-white w-100">Satisfication Guranteed</a>
                                    </div>

                                    <div className="text-center mt-4">
                                        <h1 className="text-white mb-0" style={{ fontSize: '50px' }}>Grap 70% <br></br>Off Today</h1>
                                    </div>

                                </div>
                            </div>
                            <div className="quoteform-form-wrap">
                                <div className="quoteform-bg-wrap-inner">

                                    <h3>Lets Get Started</h3>
                                    <div className="title-border"></div>

                                    <form className="row mt-4 quote-from" onSubmit={handleSubmit}>
                                        <div className="col-12 col-lg-12 col-md-12 mb-4">
                                            <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="Name" className="form-control ola-input ps-2" required />
                                        </div>
                                        <div className="col-12 col-lg-12 col-md-12 mb-4">
                                            <input type="email" value={inputs.email || ""} onChange={handleChange} name="email" placeholder="Email" className="form-control ola-input ps-2" required />
                                        </div>
                                        <div className="col-lg-12 col-md-12 mb-4">
                                            <PhoneInput
                                                placeholder="Phone or Mobile Number"
                                                defaultCountry="US"
                                                international={true}
                                                value={phone}
                                                onChange={setPhone} required />
                                        </div>

                                        <div className="col-lg-12 col-md-12 mb-4">
                                            <textarea className="form-control ola-input-textarea" value={inputs.message || ""} onChange={handleChange} name="message" placeholder="Share your project's brief description - let's bring your vision to life!"
                                                id="exampleFormControlTextarea1" rows="4" required ></textarea>
                                        </div>

                                        <div className="text-center">
                                            {submitting
                                            ?
                                                <button type="button" className="btn btn-light-blue w-100" disabled="true">Submitting...</button>
                                            :
                                                <button type="submit" className="btn btn-light-blue w-100">Submit</button>
                                            }
                                        </div>

                                        {successMessage?<div dangerouslySetInnerHTML={{__html: successMessage}}></div>:''}
                                        {errMessage?<div dangerouslySetInnerHTML={{__html: errMessage}}></div>:''}

                                    </form>


                                    <a href="/#" type="button" className="mt-4 close-text" data-bs-dismiss="modal">Close</a>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>


    );
}
export default QuoteModal;