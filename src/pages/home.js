import React, { useEffect, useState }  from "react";
import HomeSlider from '../layouts/slider';
import Brands from '../partials/brands';
import WhyChooseUs from "../partials/why_choose";
import Portfolio from "../partials/portfolio";
import Plans from "../partials/plans";
import ComboBox from "../partials/combo_box";
import OurProcess from "../partials/our_process";
import Testimonials from "../partials/testimonials";
import Faqs from "../partials/faqs";
import FreeQuote from "../partials/free_quote";
import ReadyToWork from "../partials/ready_to_work";

import OurExperience from "../partials/our_exp";
import TagManager from 'react-gtm-module'

function Home() {

    const [faqs, setFaqs] = useState([])
    const [port, setPort] = useState([])


    useEffect(() => {
        TagManager.dataLayer({
            dataLayer: {
              event: 'pageview',
              pagePath: window.location.pathname
            },
        });
        fetchFaqsData()
        fetchPortfolioData()
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

    const fetchPortfolioData = () => {
        fetch("https://app.olagee.com/api/portfolio")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPort(data.list)
            })
    }

    


    return (
        <div className="home-page">
            <HomeSlider></HomeSlider>
            <Brands></Brands>
            <div className="home-sections">
                <WhyChooseUs></WhyChooseUs>
                <OurExperience></OurExperience>
                <Plans></Plans>
                <Portfolio results={port}></Portfolio>
                <ComboBox></ComboBox>
                <OurProcess></OurProcess>
                <Testimonials></Testimonials>
                <Faqs results={faqs}></Faqs>
                <FreeQuote></FreeQuote>
                <ReadyToWork></ReadyToWork>
            </div>
        </div>
        
    );
}
export default Home;