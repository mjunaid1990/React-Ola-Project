import React, { useEffect, useState } from "react";

function OrderReview() {



    const order_info = JSON.parse(sessionStorage.getItem('order'));
    let currency = sessionStorage.getItem('currency');

    useEffect(() => {


    }, [])



    const package_info = JSON.parse(sessionStorage.getItem('package'));
    const [total, setTotal] = useState(Number(package_info.sale_price));

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
    const [checked, setChecked] = useState([]);



    const renderFeatures = (features) => {
        const features_list = features.split(', ');
        const list = [];
        features_list.forEach((fet, index) => {
            list.push(<li key={'list-' + index}><i className="fa fa-check"></i><span> {fet}</span></li>)
        })
        return list;
    }

    const handleCheck = (event) => {

        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);

        if (updatedList && updatedList.length > 0) {
            let sum = 0;
            for (let num of updatedList) {
                sum = sum + findAddonPrice(num)
            }
            let nval = Number(package_info.sale_price) + sum;
            setTotal(nval);
        } else {
            setTotal(Number(package_info.sale_price));
        }


    };

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

    const confirmOrder = () => {
        sessionStorage.setItem('addons', JSON.stringify(checked));
        sessionStorage.setItem('total_amount', total);
        window.location.href = 'https://olagee.com/order-confirm';
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
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 form order-rev-order">
                        <form id="myForm">
                            <div>
                                <div className="olaform-heading">
                                    <h2>
                                        1. Order Information
                                    </h2>
                                </div>

                                <div className="d-flex order-information justify-content-between py-2">
                                    <div className="">
                                        <h3> {package_info.name}</h3>
                                    </div>
                                    <div className="h2-right">
                                        <h2 className="text-center">From ${package_info.sale_price} </h2>
                                    </div>
                                </div>
                                <div className="d-flex order-review mb-3">


                                    {package_info.features ?
                                        <div className="col"><ul>{renderFeatures(package_info.features)}</ul></div>
                                        :
                                        <div className="col-12 combo-box-features">
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

                                            </ul>
                                            <ul>
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
                                            </ul>
                                            <ul>
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
                                            </ul>
                                            <ul>
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
                                            </ul>
                                            <ul>
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
                                        </div>
                                    }
                                    {package_info.more_features ?
                                        <div className="col">
                                            <ul>
                                                {renderFeatures(package_info.more_features)}
                                            </ul></div>
                                        :
                                        ''
                                    }


                                </div>
                            </div>

                            {package_info && package_info.package_type === 'Logo' ?

                                <div className="">
                                    <div className="olaform-heading">
                                        <h2>
                                            2. Add Ons (optional)
                                        </h2>

                                    </div>

                                    <div className="add-ons-border">

                                        {addons.map((item, index) => (
                                            <div key={index} className="d-flex justify-content-between py-2">
                                                <div className="">
                                                    <input type="checkbox" id={`item-${item.id}`} name="addone[]" value={item.name} onChange={handleCheck} className="form-check-input" />
                                                    <label htmlFor={`item-${item.id}`}>{item.name}</label>
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div className="">
                                                    <div>
                                                        <h2> Only </h2>
                                                        <h2> {renderCurrency()}{item.price} </h2>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                                :
                                ''
                            }
                            <div className="total">
                                <h3 className="text-end">
                                    Order Total ({currency}) : <span>{total}.00</span>
                                </h3>
                            </div>
                            <div className="mt-3 d-grid sbmt">
                                <button type="button" id="" onClick={confirmOrder} className="w-100">Confirm My Order</button>

                            </div>
                        </form>
                    </div>


                    <div className="col-12 col-md-4 mb-3">
                        <div className="order-detail">
                            <div className="olaform-heading">
                                <h2>3. Your Project Brief</h2>
                            </div>
                            {package_info && package_info.package_type === 'Logo' ?
                                <div className="project-border">


                                    <div>
                                        <h3>Logo Name: </h3>
                                        <p>{order_info.logo_name}</p>
                                    </div>
                                    <div>
                                        <h3>Slogon or Tagline (if any): </h3>
                                        <p>{order_info.slogan ? order_info.slogan : 'N/A'}</p>
                                    </div>
                                    <div>
                                        <h3>Color Scheme:</h3>
                                        <p>{order_info.logo_color ? order_info.logo_color : 'N/A'}</p>
                                    </div>
                                    <div>
                                        <h3>Industry Name:</h3>
                                        <p>{order_info.industry ? order_info.industry : 'N/A'}</p>
                                    </div>

                                    <div>
                                        <h3>Describe Your Business: </h3>
                                        <p>{order_info.message ? order_info.message : 'N/A'}</p>
                                    </div>

                                </div>
                                :
                                <div className="project-border">


                                    <div>
                                        <h3>Package Name: </h3>
                                        <p>{package_info.name}</p>
                                    </div>
                                    <div>
                                        <h3>Describe Your Business: </h3>
                                        <p>{order_info.message ? order_info.message : 'N/A'}</p>
                                    </div>

                                </div>
                            }
                        </div>




                    </div>
                </div>
            </div>
        </div>

    );
}
export default OrderReview;