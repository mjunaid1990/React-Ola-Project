import React, { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useNavigate } from "react-router-dom";
import TagManager from 'react-gtm-module'

const package_info = JSON.parse(sessionStorage.getItem('package'));
const order_info = JSON.parse(sessionStorage.getItem('order'));

const addons_selected = JSON.parse(sessionStorage.getItem('addons'));
const total_amount = sessionStorage.getItem('total_amount');
let currency = sessionStorage.getItem('currency');





const CheckoutForm = () => {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        setPaymentLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const formData = {
                    id: id,
                    amount: total_amount,
                    firstname: order_info.name,
                    phone: order_info.phone,
                    email: order_info.email,
                    message: order_info.message,
                    logo_name: order_info.logo_name,
                    logo_color: order_info.logo_color,
                    logo_slogan: order_info.logo_slogan,
                    industry: order_info.industry,
                    package_name: package_info.name,
                    addons: addons_selected ? JSON.stringify(addons_selected) : '',
                    currency: currency
                }
                let res = await fetch("https://app.olagee.com/api/checkout", {
                    method: "POST",
                    body: JSON.stringify(formData),
                });

                let data = await res.json();
                if (data.success) {
                    console.log("Successful payment")
                    setPaymentLoading(false);
                    setSuccess(false);

                    setTimeout(()=>{
                        sessionStorage.removeItem('order');
                        sessionStorage.removeItem('package');
                        sessionStorage.removeItem('addons');
                        sessionStorage.removeItem('total_amount');

                        navigate("/thankyou");

                    },1000);

                }else {
                    setPaymentLoading(false);
                    setError(true);
                }

            } catch (error) {
                setPaymentLoading(false);
                setError(true);
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className="btn btn-primary mt-4" type="submit" disabled={isPaymentLoading}>
                {isPaymentLoading ? "Loading..." : "Pay Now"}
            </button>
            {
                success ?
                    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        <strong>Conguratulation!</strong> You have made payment successfully!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    : ''
            }

            {
                error ?
                    <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                        <strong>Sorry!</strong> Something went wrong please try again!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    : ''
            }

        </form>
    );
};

const stripePromise = loadStripe('pk_live_51LwUPGH1UhgKhd3qsrPYVvmXcJQl2wrvg3oQoMrWRuVHE1GXmdK0bZx9FaedJn1G7uqsfEzJwEIFjky9MGGhF38W00luiNJ1Bi');
// const stripePromise = loadStripe('pk_test_M0oqDuKsuy80UAfOVKAH9YXS00d94eJaX4');


function OrderConfirm() {



    const addons = [
        {
            id: 1,
            name: 'Rush Delivery',
            desc: 'Need your logo design in a hurry? Get priority delivery within 12 hours!',
            price: 35
        },
        {
            id: 2,
            name: 'Business Card Design',
            desc: 'Make a lasting impression with professionally designed custom business cards.',
            price: 50
        },
        {
            id: 3,
            name: 'Social Media Kit',
            desc: 'Boost your online presence with branded social media assets.',
            price: 35
        },
        {
            id: 4,
            name: 'Vector Source Files',
            desc: 'Get editable vector files for future scalability and customization.',
            price: 45
        },
        {
            id: 5,
            name: 'Stationery Design',
            desc: 'Elevate your brand with professional stationery designs (business cards, letterheads, etc.).',
            price: 55
        },
        {
            id: 6,
            name: '3D Mockup',
            desc: 'Visualize your logo in 3D for a realistic representation.',
            price: 35
        },
        {
            id: 7,
            name: 'Unlimited Revisions',
            desc: "Enjoy unlimited design revisions until you're completely satisfied.",
            price: 60
        },
        {
            id: 8,
            name: 'Copyright Transfer',
            desc: 'Secure full ownership rights to your logo design.',
            price: 45
        }
    ]

    const findAddonPrice = (name) => {
        if (name) {
            let res = addons.filter(item => {
                return item.name === name;
            });
            if (res) {
                return Number(res[0].price);
            }
        }

    }

    const renderAddons = (selAddons) => {
        const list = [];
        selAddons.forEach((add, index) => {
            let price = findAddonPrice(add);
            list.push(<div key={'list-' + index} className="d-flex justify-content-between"><div><h5> {add}</h5></div><div><h5>{currency === 'GBP'?'£':'$'}{price}.00</h5></div></div>)
        });
        return list;
    }

    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
    }, [])


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
                    <h1>
                        Checkout
                    </h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-12 form mb-3">
                        <div id="myForm">
                            <div className="olaform-heading">
                                <h2>
                                    2. Payment Information
                                </h2>
                            </div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>
                    </div>


                    <div className="col-12 col-md-4">
                        <div className="order-detail">
                            <div className="olaform-heading">
                                <h2>3. Billing Invoice</h2>
                            </div>
                            <div>
                                <h5> Package: {package_info.name}</h5>
                            </div>
                            <div className="order-checkout-info ">

                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h5> Item price</h5>
                                    </div>
                                    <div>
                                        <h5>{renderCurrency()}{package_info.sale_price}.00</h5>
                                    </div>
                                </div>
                                {addons_selected && addons_selected.length > 0
                                    ?
                                    <div className="addon-wrap">
                                        <h6>Addons</h6>
                                        {renderAddons(addons_selected)}
                                    </div>
                                    :
                                    ''
                                }



                                <div className="d-flex justify-content-between checkout-total">
                                    <div>
                                        <h6> Total ({currency})</h6>
                                    </div>
                                    <div>
                                        <h6>{renderCurrency()}{total_amount}.00</h6>
                                    </div>
                                </div>

                            </div>

                            <div className="py-2">
                                <div className="money-back-img">
                                    <img src="/assets/images/moneyback.png" alt="" className="w-100" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>

    );
}
export default OrderConfirm;