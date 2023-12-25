import React, { useEffect, useState }  from "react";
import PagesBackground from "../partials/_pages_background";
import Brands from '../partials/brands';
import PortfolioSingle from "../partials/_portfolio_single";
import PlansSingle from "../partials/_plans_single";
import ComboBox from "../partials/combo_box";
import OurProcess from "../partials/our_process";
import Testimonials from "../partials/testimonials";
import Faqs from "../partials/faqs";
import FreeQuote from "../partials/free_quote";
import ReadyToWork from "../partials/ready_to_work";
import OurExperience from "../partials/our_exp";
import WhyChooseUsLogo from "../partials/why_choose_logo";
import TagManager from 'react-gtm-module'

function LogoDesign() {

    const [faqs, setFaqs] = useState([])
    const [port, setPort] = useState([])
    const [banner, setBanner] = useState([])
    const [plans, setPlans] = useState([])


    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
        fetchFaqsData()
        fetchPortfolioData()
        fetchBannerData()
        fetchPlansData()
    }, [])

    const fetchFaqsData = () => {
        fetch("https://app.olagee.com/api/faqfront?type=Logo")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFaqs(data.list)
            })
    }

    const fetchPlansData = () => {
        fetch("https://app.olagee.com/api/plans?type=Logo")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPlans(data.packages)
            })
    }

    const fetchPortfolioData = () => {
        fetch("https://app.olagee.com/api/portfolio?type=Logo")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPort(data.list)
            })
    }

    const fetchBannerData = () => {
        fetch("https://app.olagee.com/api/banner?type=Logo")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setBanner(data.list)
            })
    }



    


    return (
        <div className="logo-page">
            <PagesBackground results={banner}></PagesBackground>
            <Brands></Brands>
            <div className="home-sections">
                <WhyChooseUsLogo></WhyChooseUsLogo>
                <OurExperience></OurExperience>
                {plans && plans.length > 0 && (
                    <PlansSingle results={plans}></PlansSingle>
                )}
                {port && port.length > 0 && (
                    <PortfolioSingle results={port}></PortfolioSingle>
                )}
                <ComboBox></ComboBox>
                <OurProcess></OurProcess>
                <Testimonials></Testimonials>
                {faqs && faqs.length > 0 && (
                    <Faqs results={faqs}></Faqs>
                )}
                <FreeQuote></FreeQuote>
                <ReadyToWork></ReadyToWork>
            </div>
        </div>
        
    );
}
export default LogoDesign;