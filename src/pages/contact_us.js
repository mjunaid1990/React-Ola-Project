import React, { useState, useEffect } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReadyToWork from "../partials/ready_to_work";
import Testimonials from "../partials/testimonials";
import TagManager from 'react-gtm-module'
function Contact() {

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    // const currency = sessionStorage.getItem('currency');

    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
    }, [])

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
            let res = await fetch("https://app.olagee.com/api/save_contact_form", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let data = await res.json();
            if (data.success) {
                setSubmitting(false)
                setInputs({ name: '', email: '', message: '' })
                setSuccessMessage('<div id="success-message" class="alert alert-success alert-dismissible fade show" role="alert"> We have received your request and will be in touch with you soon. Thank you for considering OlaGee® for your needs.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            } else {
                setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            }


        } catch (err) {
            setErrMessage('<div id="err-message" class="alert alert-danger alert-dismissible fade show" role="alert"> Something went wrong!<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>')
            setSubmitting(false)
        }

    }

    return (
        <div>
            <section className="contact-page">
                <div className="bg-contact simple-banner">
                    <div className="container">
                        <h2>
                            Contact Us
                        </h2>
                        <h1>
                            <span>Get in touch with us</span>
                        </h1>
                    </div>

                </div>
            </section>
            <section className="container form-padding">
                <div className="form-detail">
                    <h1>

                        Get In Touch
                        <div></div>

                    </h1>
                    <p className="py-4">
                        Need help with a question or project idea? Contact us anytime - our response time is as quick as a few minutes to a maximum of 6 hours! We're available 365 days a year and always ready to assist you.
                    </p>

                </div>
                <div className="row py-4">
                    <div className="col-12 col-md-8 col-lg-8 mb-md-0 mb-4">
                        <div className="form-border">
                            <form onSubmit={handleSubmit}>

                                <div className="row py-1">
                                    <div className="col-lg-6">
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                                            <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="Your Name" className="form-control " required />
                                        </div>
                                        <div className="input-group py-3">
                                            <span className="input-group-text"><i className="bi bi-envelope-fill"></i></span>
                                            <input type="text" value={inputs.email || ""} onChange={handleChange} name="email" placeholder="Your Email" className="form-control" required />
                                        </div>
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            defaultCountry="US"
                                            international={true}
                                            value={phone}
                                            onChange={setPhone} required />
                                    </div>

                                    <div className="col-lg-6  ">
                                        <textarea className="form-control " placeholder="Message" name="message" id="exampleFormControlTextarea1" rows="5" onChange={handleChange} value={inputs.message || ""}></textarea>
                                    </div>
                                    <div className="col-lg-12 pt-4">
                                        {submitting
                                            ?
                                            <button type="button" className="w-100 fw-bold btn btn-primary btn-lg btn-block" disabled="true">Submitting...</button>
                                            :
                                            <button type="submit" className=" w-100 fw-bold btn btn-primary btn-lg btn-block" >Submit Now</button>
                                        }


                                    </div>

                                    {successMessage ? <div dangerouslySetInnerHTML={{ __html: successMessage }}></div> : ''}
                                    {errMessage ? <div dangerouslySetInnerHTML={{ __html: errMessage }}></div> : ''}

                                </div>
                            </form>
                        </div>

                    </div>


                    <div className="col-12 col-md-4 col-lg-4 py-1 d-flex flex-column">
                        <div className="flex-1">
                            <div className=" w-100 btn-group h-100 ">
                                <a href="/#" className="btn btn-contact d-flex align-items-center">
                                    <i className="bi bi-chat-text"></i>
                                    <div className="d-flex flex-column">
                                        <div className="live-chat">Live Chat</div>
                                        <div className="live-chat-info">Live Chat to avail more discount</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div className="flex-1">
                            <div className=" w-100 btn-group h-100">
                                <a href="tel:+18507820008" className="btn btn-contact d-flex align-items-center">
                                    <i className="bi bi-telephone-fill"></i>
                                    <div className="d-flex flex-column">
                                        <div className="live-chat">Contact Number</div>
                                        {currency && currency === 'USD' ?
                                            <div className="live-chat-info">+1 850 782 0008</div>
                                            :
                                            ''
                                        }
                                        {currency && currency === 'GBP' ?
                                            <div className="live-chat-info">+44 745 127 6400</div>


                                            :
                                            ''
                                        }
                                        {currency && currency === 'AUD' ?
                                            <div className="live-chat-info">+61 48 000 4120</div>


                                            :
                                            ''
                                        }
                                        {currency && currency === 'EUR' ?
                                            <div className="live-chat-info">+1 850 782 0008</div>
                                            :
                                            ''
                                        }

                                    </div>
                                </a>
                            </div>
                        </div> */}
                        <div className="flex-1">
                            <div className=" w-100 btn-group h-100">
                                <a href="mailto:support@olagee.com" className="btn btn-contact d-flex align-items-center">
                                    <i className="bi bi-envelope-fill"></i>
                                    <div className="d-flex flex-column">
                                        <div className="live-chat">Email Address</div>
                                        <div className="live-chat-info">support@olagee.com</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            <Testimonials></Testimonials>
            <ReadyToWork></ReadyToWork>

        </div >
    );
}
export default Contact;