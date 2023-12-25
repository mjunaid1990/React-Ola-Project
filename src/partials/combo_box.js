import React, { useState, useRef } from "react";
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from "react-router-dom";

function ComboBox() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const packageTypeRef = useRef();

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
        const formData = {
            name: inputs.name,
            phone: phone,
            email: inputs.email,
            message: inputs.message,
            package: packageTypeRef.current.value
        }
        setSubmitting(true);
        try {
            let res = await fetch("https://app.olagee.com/api/save_package_form", {
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

    const [flipX, setflipX] = useState(null);

    const handleFlipClick = (e) => {
        // 👇️ toggle isActive state on click
        setflipX(null)
        setInputs({});
        setPhone('');
        const item = {
            name: 'Combo Box',
            sale_price: 999,
            features: false,
            more_features: false
        }
        sessionStorage.setItem('package', JSON.stringify(item));
        navigate('/order-info');
    }

    const closeFormClick = () => {
        setflipX(null);
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
        <section className="combo-bg py-5 ">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 mb-4">
                        <div className="combo-container-info">
                            <h1 className="fw-bold text-white combo-heading">
                                All-In-One <br />
                                <span className="text-white combo-font">
                                    COMBO</span>
                            </h1>
                            <h3 className="text-white combo-font-h3 h2 pb-4">
                                Complete Branding For<br /> Start-Ups and SMEs
                            </h3>

                            <div className="list-combo">
                                <ul>
                                    <li className="pb-3">
                                        <i className="fa fa-check"></i>
                                        Logo Design
                                    </li>
                                    <li className="pb-3">
                                        <i className="fa fa-check"></i>
                                        Website Design
                                    </li>
                                    <li className="pb-3">
                                        <i className="fa fa-check"></i>
                                        Stationary Design
                                    </li>
                                    <li className="pb-3">
                                        <i className="fa fa-check"></i>
                                        Banners Design
                                    </li>
                                    <li className="pb-3">
                                        <i className="fa fa-check"></i>
                                        Social Media Design
                                    </li>
                                </ul>
                            </div>


                        </div>
                        <br></br>
                        <div className="get-started">
                            <button data-bs-toggle="modal" data-bs-target="#quoteModal" className="btn btn-yellow text-dark">Get Started</button>
                        </div>

                    </div>



                    <div className="col-12 col-lg-6 col-md-12">
                        <div className="combo-right-container">

                            <div className="pricing-logo-container">

                                <div className="pricing-logo" style={{ background: '#20223b' }}>
                                    <div className="position-absolute">
                                        <img alt="" src="assets/images/Recommended-1.png" className="position-relative img-position" />
                                    </div>
                                    <h1>COMBO PACKAGE</h1>
                                    <p className="h5">Complete Branding Package</p>
                                    <h2 className="pricing-logo-h-1">
                                        {renderCurrency()}999
                                    </h2>
                                    <div className="text-center h3 pb-2 mb-0">
                                        <p className="text-center">
                                            <strike> {renderCurrency()}3330</strike> 70% OFF
                                        </p>
                                    </div>
                                </div>

                                <div className="pricing-inner">

                                    <div className={`pricing-inner-info animated flipInX ${flipX === null ? "" : "d-none"} `} >
                                        <div className="pricing-logo-list">
                                            <ul>
                                                <li className="pt-2 more-features">
                                                    Logo Design
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span> Unlimited Logo Design Concepts</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>By 8 Dedicated Logo Designers</span>
                                                </li>


                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Unlimited Revisions</span>
                                                </li>


                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Branding Document</span>
                                                </li>


                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Corporate Profile</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Turn Around 48-72 hrs</span>
                                                </li>


                                                <li className="pt-2 more-features">
                                                    Website Design
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span> 5 Pages Custom Design</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>5 Stock Photos</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Content Management System (CMS) Integration</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Contact Us Form</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Search Engine Submission</span>
                                                </li>

                                                <li className="pt-2 more-features">
                                                    Stationary Design
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Business Card Design</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Letterhead Design</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Envelope Design</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Compliment Slip Design</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Corporate Brochure (up-to 6 Pages)</span>
                                                </li>

                                                <li className="pt-2 more-features">
                                                    Banner Design
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>2 Design Concepts</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>2 Stock Photos for Banners</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Color Options</span>
                                                </li>
                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Free Grayscale Format</span>
                                                </li>

                                                <li className="pt-2 more-features">
                                                    Social Media Design
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Facebook</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Twitter</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>Youtube</span>
                                                </li>

                                                <li>
                                                    <i className="far fa-circle-right"></i> <span>LinkedIn</span>
                                                </li>

                                            </ul>
                                        </div>
                                        {/* <div className="pricing-img mt-4 mb-4">
                                            {currency && currency === 'USD' ?
                                                <a href="tel:+18507820008" className="btn btn-dark-blue"><i className="fa fa-phone"></i> Call Now</a>
                                                :
                                                ''
                                            }
                                            {currency && currency === 'GBP' ?
                                                <a href="tel:+447451276400" className="btn btn-dark-blue"><i className="fa fa-phone"></i> Call Now</a>
                                                :
                                                ''
                                            }
                                            {currency && currency === 'AUD' ?
                                                <a href="tel:+61480004120" className="btn btn-dark-blue"><i className="fa fa-phone"></i> Call Now</a>
                                                :
                                                ''
                                            }

                                            <button onClick={() => window.zE('webWidget', 'open')} className="btn btn-light-blue ms-2"><i className="far fa-message"></i> Live Chat</button>
                                        </div> */}
                                        <div className="nav-btn-pricing">
                                            <button type="button" className="btn" onClick={handleFlipClick}>Get Started</button>
                                        </div>
                                    </div>

                                    <div className={`pricing-form animated flipInY ${flipX !== null ? "" : "d-none"} `}>
                                        <div className="close" onClick={closeFormClick}><i className="far fa-times-circle"></i></div>
                                        <form className="row g-2" onSubmit={handleSubmit}>
                                            <input type="hidden" value="Combo Package" name="package" ref={packageTypeRef} />
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
                                                <textarea rows="3" value={inputs.message || ""} onChange={handleChange} name="message" placeholder="Share your project's brief description - let's bring your vision to life!" className="form-control" required></textarea>
                                            </div>
                                            <div className="col-12">
                                                {submitting
                                                    ?
                                                    <button type="button" className="btn w-100 btn-yellow text-dark fw-bold" disabled="true">Submitting...</button>
                                                    :
                                                    <button type="submit" className="btn w-100 btn-yellow text-dark fw-bold" >Submit</button>
                                                }

                                            </div>

                                            {successMessage ? <div dangerouslySetInnerHTML={{ __html: successMessage }}></div> : ''}
                                            {errMessage ? <div dangerouslySetInnerHTML={{ __html: errMessage }}></div> : ''}

                                        </form>
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>

                </div>



            </div>


        </section>
    );
}
export default ComboBox;