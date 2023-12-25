import React, { useState } from "react";
import Countdown from "react-countdown";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';



function HomeSlider() {
    

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const currency = sessionStorage.getItem('currency');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        const formData = {
            name: inputs.name,
            phone: phone,
            email: inputs.email,
            message: inputs.message
        }

        try {
            let res = await fetch("https://app.olagee.com/api/save_home_contact_form", {
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
                <div>
                    {days > 0 ?
                    <span>
                        {days}
                        <br></br>
                        d
                    </span>
                    :'' }
                    <span>
                        {hours && hours < 10 ?'0'+hours:hours}
                        <br></br>
                        hr
                    </span>
                    <span>
                        {minutes && minutes < 10 ?'0'+minutes:minutes}
                        <br></br>
                        min
                    </span>
                    <span>
                        {seconds}
                        <br></br>
                        sec
                    </span>
                </div>
            );
        }
    };

    const updatePrice = (cur, price) => {
        if(cur === 'SGD') {
            return price * 2 + 3;
        }else if(cur === 'AUD') {
            return price * 2 + 3;
        }else {
            return price;
        }
    }

    const renderCurrency = () => {
        if(currency === 'GBP') {
            return '£';
        }else if(currency === 'EUR') {
            return '€';
        }else {
            return '$';
        }

    }


    return (
        <section className="home-banner ">
            <div className="container position-relative">
                <div className="">
                    <div className="home-content row">
                        <div className="col-12 col-md-6 col-lg-6 mb-4">
                            <h1 className="text-white text-start mb-0">
                                Custom Logo Design
                            </h1>
                            <h3 className="text-yellow text-start mt-2 mb-0">
                                Starts From {renderCurrency()}97
                            </h3>
                            <p className="text-white text-start my-3">
                                Transform your brand with a Custom <br />Logo Designed by the World's #1 Agency
                            </p>
                            <ul className="list">
                                <li>
                                    <i className="far fa-circle-right"></i>
                                    3 Highly Creative Logo Concept
                                </li>
                                <li>
                                    <i className="far fa-circle-right"></i>
                                    Unlimited Revisions
                                </li>
                                <li>
                                    <i className="far fa-circle-right"></i>
                                    24-48 Hours Turnaround Time
                                </li>
                                <li>
                                    <i className="far fa-circle-right"></i>
                                    100% Money Back Gurantee
                                </li>
                            </ul>
                            <div className="text-start my-4">
                                <button onClick={() => window.zE('webWidget', 'open')} className="btn btn-yellow text-dark fw-bold">Chat Now To Avail Discounts</button>
                            </div>
                            <div className="row align-items-center max-width-315">
                                <div className="col-6">
                                    <p className="text-white text-start">
                                        Rating 4.9 Out of 5
                                        <a href="/#">
                                            <img src="/assets/images/5-star-rating.png" width="130px" alt="" />
                                        </a>
                                    </p>
                                </div>
                                <div className="col-6 align-item-center">
                                    <p className="text-white text-start">
                                        Trusted by <span style={{ color: '#feb303' }}> 500 + </span>fortune companies
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-6 right-flex">
                            <div className="form-flex">
                                <h1 className="text-center fs-4 fw-bolder pt-1 text-white">AVAIL <span
                                    className=" text-yellow">70%</span> DISCOUNT
                                </h1>

                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <p className="text-end text-white h6">LIMITED TIME OFFER</p>
                                    <div className="timer">
                                        <Countdown date={Date.now() + 11000000} daysInHours={true} renderer={renderer} />
                                    </div>
                                </div>

                                
                                
                                <form className="row g-2" onSubmit={handleSubmit}>
                                    <div className="col-12">
                                        <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="Your Name" className="form-control " required />
                                    </div>
                                    <div className="col-12">
                                        <input type="email" value={inputs.email || ""} onChange={handleChange} name="email" placeholder="Your Email" className="form-control" required />
                                    </div>
                                    <div className="col-12">
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            defaultCountry="US"
                                            international={true}
                                            value={phone}
                                            onChange={setPhone} required />
                                    </div>
                                    <div className="col-12">
                                        <textarea rows="3" onChange={handleChange} value={inputs.message || ""} name="message" placeholder="Share your project's brief description - let's bring your vision to life!" className="form-control" required></textarea>
                                    </div>
                                    <div className="col-12">
                                            {submitting
                                            ?
                                                <button type="button" className="btn w-100 btn-yellow text-dark fw-bold" disabled="true">Submitting...</button>
                                            :
                                            <button type="submit" className="btn w-100 btn-yellow text-dark fw-bold" >Submit Now</button>
                                            }
                                        
                                    </div>
                                    {successMessage?<div dangerouslySetInnerHTML={{__html: successMessage}}></div>:''}
                                    {errMessage?<div dangerouslySetInnerHTML={{__html: errMessage}}></div>:''}
                                    <div>
                                        <p className="text-white fs text-center">
                                            CHAT NOW TO AVAIL 70% DISCOUNT
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeSlider;