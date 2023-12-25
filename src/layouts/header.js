import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import { isMobile } from "react-device-detect";


function Header() {

    const [isActive, setIsActive] = useState(false);
    const [stickyClass, setStickyClass] = useState('relative');

    let currency = sessionStorage.getItem('currency');


    useEffect(() => {

        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };


        

    }, [currency]);

    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 100 ? setStickyClass('fixed-nav') : setStickyClass('relative');
        }
    };


    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    

    return (
        <div className="navigation">
            {isMobile
                ?


                <div className={`mobile-navigation ${stickyClass}`}>
                <div className="container py-3">

                    <nav className="navbar navbar-expand-lg bg-transparent">
                        <div className="container-fluid">
                            <a className="navbar-brand p-0" href="/">
                                <img src="assets/images/ola-logo-dark.png" alt="" className="logo-img" />
                            </a>

                            <div className="menu-toggler d-flex align-items-center">
                                

                                <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                            

                        </div>
                    </nav>

                    <div className={`navbar-absolute row ${isActive ? "show" : ""} `}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-3">
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" to="/" activeclassname="active">Home</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/logo-design">Logo Design</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/website">Website</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/social-media">Social Media</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/ppc-advertising">PPC Advertising</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/seo">SEO</NavLink>
                            </li>
                            <li className="nav-item" onClick={handleClick}>
                                <NavLink className="nav-link" activeclassname="active" to="/contact-us">Contact Us</NavLink>
                            </li>
                        </ul>

                    </div>

                    <div className="d-flex align-items-center justify-content-end mobile-bottom-links">
                                <div className="me-2">
                                    <button  onClick={() => window.zE('webWidget', 'open')} className="btn btn-transparent">
                                        <i className="fa-solid fa-message me-1"></i>
                                        LIVE CHAT
                                    </button>
                                </div>
                                <div className="">

                                <button className="btn btn-dark-blue" data-bs-toggle="modal" data-bs-target="#quoteModal">
                                    
                                    Get a Free Quote
                                </button>

                                {/* {currency && currency === 'USD' ? 
                                <a href="tel:+18507820008" className="btn btn-dark-blue btn-type-text">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +1 850 782 0008
                                </a>
                                :
                                ''
                                }
                                {currency && currency === 'GBP' ? 
                                <a href="tel:+447451276400" className="btn btn-dark-blue btn-type-text">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +44 745 127 6400
                                </a>
                                :
                                ''
                                }
                                {currency && currency === 'AUD' ? 
                                <a href="tel:+61480004120" className="btn btn-dark-blue btn-type-text">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +61 48 000 4120
                                </a>
                                :
                                ''
                                } */}

                                    
                                </div>

                                <div className="ms-1">

                                    <a href="#pricing-sec" className="btn btn-yellow text-dark">
                                        View Pricing
                                    </a>
                                </div>
                            </div>


                </div>
                </div>

                :

                <div className="container py-2">

                    <div className="top-navigation flex-between align-items-center">

                        <div className="header-logo">

                            <a href="/" className="pt-2">
                                <img src="assets/images/ola-logo-dark.png" alt="" className="logo-img" />
                            </a>
                        </div>

                        <div className="d-flex justify-content-end flex-column">

                            <div className="d-flex justify-content-end">
                                <div className="me-2">
                                    <button  onClick={() => window.zE('webWidget', 'open')} className="btn btn-transparent">
                                        <i className="fa-solid fa-message me-1"></i>
                                        LIVE CHAT
                                    </button>
                                </div>
                                <div className="">

                                <button className="btn btn-dark-blue" data-bs-toggle="modal" data-bs-target="#quoteModal">
                                    
                                    Get a Free Quote
                                </button>

                                {/* {currency && currency === 'USD' ? 
                                <a href="tel:+18507820008" className="btn btn-dark-blue">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +1 850 782 0008
                                </a>
                                :
                                ''
                                }
                                {currency && currency === 'GBP' ? 
                                <a href="tel:+447451276400" className="btn btn-dark-blue">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +44 745 127 6400
                                </a>
                                :
                                ''
                                }
                                {currency && currency === 'AUD' ? 
                                <a href="tel:+61480004120" className="btn btn-dark-blue">
                                    <i className="fa-solid fa-square-phone"></i>
                                    +61 48 000 4120
                                </a>
                                :
                                ''
                                } */}

                                    
                                </div>

                                <div className="ms-1">

                                    <a href="/#pricing-sec" className="btn btn-yellow text-uppercase">
                                        View Pricing
                                    </a>
                                </div>
                            </div>




                            <header className="main-navigation collapse navbar-collapse show" id="navbarSupportedContent">

                                <ul className="navbar-nav flex-row justify-content-end me-auto mb-2 mb-lg-0">
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" to="/" activeclassname="active">Home</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/logo-design">Logo Design</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/website">Website</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/social-media">Social Media</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/ppc-advertising">PPC Advertising</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/seo">SEO</NavLink>
                                    </li>
                                    <li className="nav-item" onClick={handleClick}>
                                        <NavLink className="nav-link" activeclassname="active" to="/contact-us">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </header>

                        </div>

                    </div>


                </div>

            }

        </div>
    );
}
export default Header;