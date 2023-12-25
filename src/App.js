// import logo from './logo.svg';
import './App.css';
import './Style.css';

import Home from './pages/home';
import Contact from './pages/contact_us';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/header';
import Footer from './layouts/footer';
import LogoDesign from './pages/logo_design';
import WebsiteDesign from './pages/website';
import SocialMedia from './pages/social_media';
import SearchEnginOptimization from './pages/seo';
import PPCAdvertising from './pages/ppc_advertising';
import PrivacyPolicy from './pages/privacy_policy';
import TermsAndConditions from './pages/terms';
import AboutUs from './pages/about_us';
import PageNotFound from './pages/404';
import QuoteModal from './partials/quote_form_modal';

import OrderInfo from './pages/order_info';
import OrderConfirm from './pages/order_confirm';
import OrderReview from './pages/order_review';
import ThankYou from './pages/thankyou';

import ScrollToTop from './ScrollToTop';

import { useEffect, useState } from 'react';

function App() {

  const [currency, setCurrency] = useState('')

  useEffect(() => {

    let currencies_arr = ['USD', 'AUD', 'GBP', 'EUR', 'SGD'];

    fetch('https://ipapi.co/currency/')
      .then(response => {
        return response.text();
      })
      .then(response => {
        console.log(response);
        if (currencies_arr.indexOf(response) > -1) {
          setCurrency(response);
          sessionStorage.setItem('currency', currency);
        } else {
          setCurrency('USD');
          sessionStorage.setItem('currency', 'USD');
        }
      })
      .catch((data, status) => {
        console.log('Request failed:', data);
      });





  }, [currency]);


  return (
    <>


      {currency && currency !== '' ?
        <div>
          <ScrollToTop />
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logo-design" element={<LogoDesign />} />
            <Route path="/website" element={<WebsiteDesign />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/seo" element={<SearchEnginOptimization />} />
            <Route path="/ppc-advertising" element={<PPCAdvertising />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/term-and-conditions" element={<TermsAndConditions />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/order-info" element={<OrderInfo />} />
            <Route path="/order-review" element={<OrderReview />} />
            <Route path="/order-confirm" element={<OrderConfirm />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer currency={currency}></Footer>
          <QuoteModal></QuoteModal>
        </div>
        :
        ''
      }
    </>
  );
}

export default App;
