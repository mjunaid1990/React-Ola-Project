import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


function FreeQuote() {

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
            let res = await fetch("https://app.olagee.com/api/save_contact_form", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            let data = await res.json();
            if (data.success) {
                setSubmitting(false)
                setInputs({name: '', email: '', message: ''})
                setSuccessMessage('<p class="bg-success text-white p-2 mt-3">'+data.message+'</p>')
            } else {
                setErrMessage('<p class="bg-danger text-white p-2 mt-3">Something went wrong please try after a while</p>')
            }

            setTimeout(()=>{
                setErrMessage('')
                setSuccessMessage('')
            },4000)

        } catch (err) {
            setErrMessage('<p class="bg-danger text-white p-2 mt-3">Something went wrong please try after a while</p>')
            setTimeout(()=>{
                setErrMessage('')
            },4000)
        }

    }


    return (
        <section className="formbg">
        <div className="container  ">
            <div className=" text-center form-info">
                <h1>
                    GET FREE CUSTOM QUOTATIONS
                </h1>
                <h5 className="text-white">
                    At OlaGee®, we understand that every project is unique. Contact us for a free custom quotation and let us help bring your vision to life with our expert design, development, and marketing services.
                </h5>
            </div>
            <div className="form-container free-consultation ">
                <div className="">
                    <form className="row gx-5 gy-3" onSubmit={handleSubmit}>
                        <div className="col-lg-6 col-md-12 ">
                            <input type="text" value={inputs.name || ""} onChange={handleChange} name="name" placeholder="Your Name" className="form-control ola-input ps-2" required />
                        </div>
                        <div className="col-lg-6 col-md-12 ">
                            <input type="email" value={inputs.email || ""} onChange={handleChange} name="email" placeholder="Your Email" className="form-control ola-input ps-2" required  />
                        </div>
                        <div className="col-lg-12 col-md-12 ">
                            <PhoneInput
                                placeholder="Your Phone"
                                defaultCountry="US"
                                international={true}
                                value={phone}
                                onChange={setPhone} required />
                        </div>
                        
                        <div className="col-lg-12 col-md-12">
                            <textarea className="form-control ola-input-textarea" value={inputs.message || ""} onChange={handleChange} name="message" placeholder="Share your project's brief description - let's bring your vision to life!"
                                id="exampleFormControlTextarea1" rows="3" required></textarea>
                        </div>


                        <div className="btn-form-padding d-flex justify-content-center flex-center 12">
                            <button type="submit" className="btn btn-yellow text-dark text-center" disabled={submitting}>Submit Now</button>
                        </div>

                        {successMessage?<div dangerouslySetInnerHTML={{__html: successMessage}}></div>:''}
                        {errMessage?<div dangerouslySetInnerHTML={{__html: errMessage}}></div>:''}

                    </form>
                    

                    

                </div>
            </div>
        </div>

    </section>
    );
}
export default FreeQuote;