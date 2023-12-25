import React, { useState, useRef } from "react";
import PhoneInput from 'react-phone-number-input';
import { useNavigate } from "react-router-dom";

function PlansHtml(props) {
    const packages = props.packages;
    const navigate = useNavigate();


    const renderFeatures = (features) => {
        const features_list = features.split(', ');
        const list = [];
        features_list.forEach((fet, index) => {
            list.push(<li key={'list-' + index}><i className="far fa-circle-right"></i><span> {fet}</span></li>)
        })
        return list;
    }

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const packageTypeRef = useRef();

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

    const handleFlipClick = (id) => {
        // 👇️ toggle isActive state on click
        setInputs({});
        setPhone('');
        setflipX(null);
        // setflipX(id);
        console.log(id);
        sessionStorage.setItem('package', JSON.stringify(id));
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


        <div className="row flex pricing-row-gap ">
            {packages.map((item, index) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">

                    <div className="pricing-logo-container">

                        <div className="pricing-logo" style={{ background: item.is_popular === '1' ? '#20223b' : '' }}>
                            {item.is_popular === '1'
                                ?
                                <div className="position-absolute">
                                    <img alt="" src="assets/images/Recommended-1.png" className="position-relative img-position" />
                                </div>
                                :
                                ''
                            }
                            <h1>{item.name}</h1>
                            <h2 className="pricing-logo-h-1">
                                {renderCurrency()}{item.sale_price}
                            </h2>
                            <div className="pricing-logo-p ps-5">
                                <p>
                                    <strike> {renderCurrency()}{item.regular_price}</strike> <small>save {item.discount}%</small>
                                </p>
                            </div>
                        </div>

                        <div className="pricing-inner">

                            <div className={`pricing-inner-info animated flipInX ${flipX !== item.id ? "" : "d-none"} `} >
                                <div className="pricing-logo-list">
                                    <ul>
                                        {renderFeatures(item.features)}

                                        <li className="pt-2 more-feature">
                                            More Features
                                        </li>
                                        {renderFeatures(item.more_features)}
                                    </ul>
                                </div>
                                {/* <div className="pricing-img mt-3 mb-3">


                                    {currency && currency === 'USD' ?
                                        <a href="tel:18507820008" className="btn btn-dark-blue"><i className="fa fa-phone"></i> Call Now</a>
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

                                    <button onClick={() => window.zE('webWidget', 'open')} className="btn btn-light-blue ms-2 toggle-chat"><i className="far fa-message"></i> Live Chat</button>
                                </div> */}
                                <div className="nav-btn-pricing">
                                    <button type="button" className="btn" onClick={() => handleFlipClick(item)}>Get Started</button>
                                </div>
                            </div>

                            <div className={`pricing-form animated flipInY ${flipX === item.id ? "" : "d-none"} `}>
                                <div className="close" onClick={closeFormClick}><i className="far fa-times-circle"></i></div>
                                <form className="row g-2" onSubmit={handleSubmit}>
                                    <input type="hidden" value={item.name} name="package" ref={packageTypeRef} />
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

            ))}

        </div>




    );
}
export default PlansHtml;