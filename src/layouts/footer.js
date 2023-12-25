import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {


    const year = new Date().getFullYear();
    const currency = props.currency;

    return (
        <footer>

            <div className="footer-bg py-5">
                <div className="container">

                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="footer-logo">
                                <img src="/assets/images/Footer-Logo.png" className="" alt="" height="25px" />
                            </div>

                            <p className="footer-text text-white mb-3">
                                OlaGee® is your one-stop-shop for professional design services. From logos to website design, our team of experts will help you create a stunning visual identity that sets you apart from the competition. Trust OlaGee® for all your design, development and marketing needs and take your business to the next level.
                            </p>
                        </div>

                        <div className="col-12 col-md-3 ">
                            <div className="service-margin">
                                <h1 className="footer-heading ">
                                    Our Services
                                    <div className="footer-underline"></div>

                                </h1>
                                <div className="footer-info pt-4">
                                    <ul>
                                        <li>
                                            <Link to="/logo-design"><i className="fa fa-chevron-right"></i> LOGO</Link>
                                        </li>
                                        <li>
                                            <Link to="/website"><i className="fa fa-chevron-right"></i> WEBSITE</Link>
                                        </li>
                                        <li>
                                            <Link to="/social-media"><i className="fa fa-chevron-right"></i> Social Media</Link>
                                        </li>
                                        <li>
                                            <Link to="/ppc-advertising"><i className="fa fa-chevron-right"></i> PPC Advertising</Link>
                                        </li>
                                        <li>
                                            <Link to="/seo"><i className="fa fa-chevron-right"></i> SEO</Link>
                                        </li>
                                        <li>
                                            <Link to="/about-us"><i className="fa fa-chevron-right"></i> About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="/privacy-policy"><i className="fa fa-chevron-right"></i> Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to="/term-and-conditions"><i className="fa fa-chevron-right"></i> Term and Conditions</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 justify-content-center">
                            <div>
                                <h1 className="footer-heading">
                                    Contact Us
                                </h1>
                                <div className="footer-underline">

                                </div>
                                <address>
                                    {/* {currency && currency === 'USD' ?
                                        <a href="tel:+18507820008">
                                            <i className="bi bi-phone text-warning"></i> +1 850 782 0008<br></br>
                                        </a>
                                        :
                                        ''
                                    }
                                    {currency && currency === 'GBP' ?
                                        <a href="tel:+447451276400">
                                            <i className="bi bi-phone text-warning"></i> +44 74 512 76400<br></br>
                                        </a>

                                        :
                                        ''
                                    }
                                    {currency && currency === 'AUD' ?
                                        <a href="tel:+61480004120">
                                            <i className="bi bi-phone text-warning"></i> +61 48 000 4120<br></br>
                                        </a>

                                        :
                                        ''
                                    } */}

                                    <a href="mailto:support@olagee.com">
                                        <i className="bi bi-envelope-fill text-warning"></i> support@olagee.com<br></br>
                                    </a>

                                </address>
                                <div>
                                    <h1 className="footer-heading">
                                        Follow Us
                                        <div className="footer-underline"></div>
                                    </h1>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-12">
                                        <div className="footer-icon">
                                            <a href="https://web.facebook.com/olageecom" target="_blank" rel="noreferrer">
                                                <i className=" bi bi-facebook"></i>
                                            </a>
                                            <a href="https://twitter.com/OlaGeeCom" className="ms-2" target="_blank" rel="noreferrer">
                                                <i className=" bi bi-twitter"></i>
                                            </a>
                                            <a href="https://www.instagram.com/olagee_com/" className="ms-2" target="_blank" rel="noreferrer">
                                                <i className=" bi bi-instagram"></i>
                                            </a>
                                            <a href="https://www.linkedin.com/company/olagee" className="ms-2" target="_blank" rel="noreferrer">
                                                <i className=" bi bi-linkedin"></i>
                                            </a>
                                            <a href="https://www.pinterest.com/OlaGeeCom/" className="ms-2" target="_blank" rel="noreferrer">
                                                <i className="p bi bi-pinterest"></i>
                                            </a>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div>
                                <h1 className="footer-heading">
                                    Safe Payments
                                </h1>
                                <div className="w-100 mt-3">
                                    <img src="assets/images/Payment-method-final.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="copywrite-heading pt-5">
                    <p>
                        All rights reserved | © Copyright {year}
                    </p>
                </div>
            </div>
            {currency && currency === 'USD' ?
                <a href="https://api.whatsapp.com/send?phone=+18507820008&text=Hi! I am looking for a logo design." className="whatsapp-float" rel="noreferrer" target="_blank">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>
                :
                ''
            }
            {currency && currency === 'GBP' ?
                <a href="https://api.whatsapp.com/send?phone=+447451276400&text=Hi! I am looking for a logo design." className="whatsapp-float" rel="noreferrer" target="_blank">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>
                :
                ''
            }
            {currency && currency === 'SGD' ?
                <a href="https://api.whatsapp.com/send?phone=+447451276400&text=Hi! I am looking for a logo design." className="whatsapp-float" rel="noreferrer" target="_blank">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>
                :
                ''
            }
            {currency && currency === 'EUR' ?
                <a href="https://api.whatsapp.com/send?phone=+447451276400&text=Hi! I am looking for a logo design." className="whatsapp-float" rel="noreferrer" target="_blank">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>
                :
                ''
            }
            {currency && currency === 'AUD' ?
                <a href="https://api.whatsapp.com/send?phone=+61480004120&text=Hi! I am looking for a logo design." className="whatsapp-float" rel="noreferrer" target="_blank">
                    <i className="fab fa-whatsapp my-float"></i>
                </a>
                :
                ''
            }
        </footer>
    );
}
export default Footer;