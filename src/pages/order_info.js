import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
function OrderInfo() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [phone, setPhone] = useState("");
    const [submitting, setSubmitting] = useState(false);

    let currency = sessionStorage.getItem('currency');

    const package_info = JSON.parse(sessionStorage.getItem('package'));


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
            message: inputs.message,
            logo_name: inputs.logo_name,
            logo_color: inputs.logo_color,
            logo_slogan: inputs.logo_slogan,
            industry: inputs.industry
        }
        sessionStorage.setItem('order', JSON.stringify(formData));
        navigate("/order-review");
    }

    useEffect(() => {

    }, [])


    const renderFeatures = (features) => {
        const features_list = features.split(', ');
        const list = [];
        features_list.forEach((fet, index) => {
            list.push(<li key={'list-' + index}><i className="fa fa-check"></i><span> {fet}</span></li>)
        })
        return list;
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
        <div className="order-info">
            <div className="container">
                <div className=" text-center logo-heading">
                    <h3 className="text-uppercase">
                        {package_info.name} Brief
                    </h3>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 mb-3 form order-rev-order">
                        <form id="myForm" onSubmit={handleSubmit}>
                            <div className="olaform-heading">
                                <h2>
                                    1. Your Requirement
                                </h2>
                            </div>

                            <div className={`d-flex mb-3 ${package_info.package_type === 'Logo' ? '' :'d-none'} `}>
                                <div className="col pe-3">
                                    <label htmlFor="logo">Logo Name</label>
                                    <input type="text" value={inputs.logo_name || ""} onChange={handleChange} name="logo_name" id="logo" className="form-control w-100" required={package_info.package_type === 'Logo'?true:false} />
                                </div>
                                <div className="col">
                                    <label htmlFor="slogon">Slogon or Tagline (if any)</label>
                                    <input type="text" value={inputs.logo_slogan || ""} onChange={handleChange} name="logo_slogan" id="slogon" className="form-control" />
                                </div>
                            </div>
                            <div className={`d-flex mb-3 ${package_info.package_type === 'Logo' ? '' :'d-none'} `}>
                                <div className="col pe-3">
                                    <label htmlFor="color">Color Scheme</label>
                                    <input type="text" value={inputs.logo_color || ""} onChange={handleChange} name="logo_color" id="color" className="form-control w-100" placeholder="e.g. #000000, red, blue" />
                                </div>
                                <div className="col">
                                    <label htmlFor="industry">Industry Type</label>
                                    <input type="text" value={inputs.industry || ""} onChange={handleChange} name="industry" id="industry" className="form-control w-100" />
                                </div>

                            </div>
                            <label htmlFor="lookingFor">Describe Your Business</label>
                            <textarea rows="4" value={inputs.message || ""} onChange={handleChange} name="message" className="w-100 mb-3 form-control"></textarea>


                            <div className="olaform-heading">
                                <h2>
                                    2. Your Contact Information
                                </h2>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fname"> Your Full Name</label>
                                <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" id="fname" className="form-control w-100" required />
                            </div>
                            <div className="d-flex mb-3">
                                <div className="col pe-3">
                                    <label htmlFor="number">Your Number</label>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        defaultCountry="US"
                                        international={true}
                                        value={phone}
                                        onChange={setPhone} required />
                                </div>
                                <div className="col">
                                    <label htmlFor="email">Your Email Address</label>
                                    <input type="email" value={inputs.email || ""} onChange={handleChange} name="email" id="email" className="form-control w-100" required />
                                </div>

                            </div>

                            <div className="mt-3 d-grid sbmt">
                                {submitting
                                    ?
                                    <button type="button" id="my-btn" className="w-100" disabled>Submitting...</button>
                                    :
                                    <button type="submit" id="my-btn" className="w-100">Next</button>
                                }
                            </div>
                        </form>
                    </div>


                    <div className="col-12 col-md-4">
                        <div className="order-detail">
                            <div className="olaform-heading">
                                <h2>3. Your Product</h2>
                            </div>
                            <div className="row order-info ">
                                <div>
                                    <h5> {package_info.name}</h5>
                                </div>
                                <div className="d-flex justify-content-between order-border">
                                    <div>
                                        <h4> Item price</h4>
                                    </div>
                                    <div>
                                        <h4>{renderCurrency()}{package_info.sale_price}.00</h4>

                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h6> Total ({currency})</h6>
                                    </div>
                                    <div>
                                        <h6>{renderCurrency()}{package_info.sale_price}.00</h6>
                                    </div>
                                </div>

                            </div>

                            <div className="py-2 package-features">
                                <div className="pricing-logo-list pt-0">

                                    {package_info.features ?
                                        <ul>{renderFeatures(package_info.features)}</ul>
                                        :
                                        <ul>
                                            <li className="pt-2 more-features">
                                                Logo Design
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span> Unlimited Logo Design Concepts</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>By 8 Dedicated Logo Designers</span>
                                            </li>


                                            <li>
                                                <i className="fa fa-check"></i> <span>Unlimited Revisions</span>
                                            </li>


                                            <li>
                                                <i className="fa fa-check"></i> <span>Branding Document</span>
                                            </li>


                                            <li>
                                                <i className="fa fa-check"></i> <span>Corporate Profile</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Turn Around 48-72 hrs</span>
                                            </li>


                                            <li className="pt-2 more-features">
                                                Website Design
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span> 5 Pages Custom Design</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>5 Stock Photos</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Content Management System (CMS) Integration</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Contact Us Form</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Search Engine Submission</span>
                                            </li>

                                            <li className="pt-2 more-features">
                                                Stationary Design
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Business Card Design</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Letterhead Design</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Envelope Design</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Compliment Slip Design</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Corporate Brochure (up-to 6 Pages)</span>
                                            </li>

                                            <li className="pt-2 more-features">
                                                Banner Design
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>2 Design Concepts</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>2 Stock Photos for Banners</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Color Options</span>
                                            </li>
                                            <li>
                                                <i className="fa fa-check"></i> <span>Free Grayscale Format</span>
                                            </li>

                                            <li className="pt-2 more-features">
                                                Social Media Design
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Facebook</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Twitter</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>Youtube</span>
                                            </li>

                                            <li>
                                                <i className="fa fa-check"></i> <span>LinkedIn</span>
                                            </li>

                                        </ul>
                                    }
                                    {package_info.more_features ?
                                        <div><h4> More Features</h4>
                                            <ul>
                                                {renderFeatures(package_info.more_features)}
                                            </ul></div>
                                        :
                                        ''
                                    }

                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>

    );
}
export default OrderInfo;