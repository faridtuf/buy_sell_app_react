import React,{Component} from "react";
import { Link } from "react-router-dom";
import buy_banner from "../images/buy-banner.jpg"
import phones from "../images/sell-phone.png"
import searchIcon from "../images/magnifying-glass.png"
import iPhone13 from "../images/iphone-13.jpg"
import product1 from "../images/iphone-11.jpg"
import product2 from "../images/iphone-11-pro-max.jpg"
import product3 from "../images/iphone-12-pro-max.jpg"
import brand1 from "../images/apple.png"
import brand2 from "../images/samsung.png"
import brand3 from "../images/lg.png"
import brand4 from "../images/oneplus.png"
import brand5 from "../images/motorola.png"
import brand6 from "../images/google.png"
import logo from '../logo.png'
import company1 from "../images/company1.png"
import company2 from "../images/company2.png"
import company3 from "../images/company3.png"
import company4 from "../images/company4.png"
import company5 from "../images/company5.png"
import company6 from "../images/company6.png"
import company7 from "../images/company7.png"
import step1 from "../images/find-your-device.png"
import step2 from "../images/choose-the-best-deal.png"
import step3 from "../images/get-your-cash.png"
import step4 from "../images/post-your-mobile-tablet.png"
import guaranteed from "../images/best-price-guaranteed.png"
import testimonial from "../images/buy-banner.jpg"
import set1 from "../images/set-1.png"
import set2 from "../images/set-2.png"
import set3 from "../images/set-3.png"
import set4 from "../images/set-4.png"
import axios from "axios";

export default class Sell extends Component{
    state = {
        brands : []
    }
    componentDidMount(){
        axios.get('http://167.86.108.124:8070/api/product.brand')
        .then(res=>{
            console.log(res);
            this.setState({brands:res.data.result})
        })
    }
    render(){
        return(
            <div>
                <div className="page-carousel-search">
                    <div className="row">
                        <div className="col-lg-7 banner-left">
                        </div>
                        <div className="col-lg-5 banner-right">
                            <img src={phones} alt="" className="phones"/>
                        </div>
                    </div>
                    <div className="foreground">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="sell-banner">
                                        <p className="lead">SELL PHONE</p>
                                        <h1 className="heading">THE MOST CASH FOR YOUR PHONE <span>GUARANTEED!</span></h1>
                                        <div className="card rounded-0">
                                            <div className="card-body">
                                                <div className="col-lg-5 d-block d-md-none rosette-mobile">
                                                    <svg className="rosette" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M35.744 13.4336C35.7808 13.1552 35.8 12.8768 35.8 12.6C35.8 8.7936 32.3712 5.7392 28.5664 6.256C27.4576 4.2832 25.3456 3 23 3C20.6544 3 18.5424 4.2832 17.4336 6.256C13.6208 5.7392 10.2 8.7936 10.2 12.6C10.2 12.8768 10.2192 13.1552 10.256 13.4336C8.2832 14.544 7 16.656 7 19C7 21.344 8.2832 23.456 10.256 24.5664C10.2192 24.8448 10.2 25.1232 10.2 25.4C10.2 29.2064 13.6208 32.2528 17.4336 31.744C18.5424 33.7168 20.6544 35 23 35C25.3456 35 27.4576 33.7168 28.5664 31.744C32.3712 32.2528 35.8 29.2064 35.8 25.4C35.8 25.1232 35.7808 24.8448 35.744 24.5664C37.7168 23.456 39 21.344 39 19C39 16.656 37.7168 14.544 35.744 13.4336ZM21.328 26.0656L15.4608 20.1232L17.7392 17.8768L21.3504 21.5344L28.2736 14.664L30.5264 16.936L21.328 26.0656Z" fill="#EE5B35"></path>
                                                    </svg>
                                                    <h4>2M+ phones sold through SellCell</h4>
                                                </div>
                                                <h4>How much is your phone worth?</h4>
                                                <form action="" method="get">
                                                    <div className="row height d-flex justify-content-center align-items-center">
                                                        <div className="col-md-12">
                                                            <div className="search">
                                                                <input type="text" className="form-control rounded-0" placeholder="Have a question? Ask Now" />
                                                                <button className="btn btn-search">Search</button></div>
                                                        </div>
                                                    </div>
                                                </form>
                                                <div className="row badges mt-3">
                                                    <h6 className="col-lg-3">For instance, try:</h6>
                                                    <div className="col-lg-9">
                                                        <a href="#" className="badge ms-2">Apple iphone 13</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 12</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 11</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 10</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 9</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 8</a>
                                                        <a href="#" className="badge ms-2">Apple iphone 7</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex media-object">
                                            <div className="flex-shrink-0">
                                                <img src={searchIcon} alt="..."/>
                                            </div>
                                            <div className="flex-grow-1 ms-3 heading">
                                                <h5>We compare prices from 40+ Buyback Companies to get you the best deal!</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="buy-banner">
                                        <p className="lead">Buy PHONE</p>
                                        <h2>COMPARE DEALS ON REFURBISHED & PRE-OWNED PHONES</h2>
                                        <a href="#" className="btn btn-buy">Buy</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="upgrade">
                                <h2>Upgrading to the new <span>iPhone 13?</span></h2>
                                <h2><span>Sell your old phone here for the most cash!</span></h2>
                            </div>
                            <div className="upgrade-mobile">
                                <img src={iPhone13}/>
                            </div>
                            <div className="mt-4">
                                <p><strong>TIP:</strong> Values of old models typically drop when new model released -
                                    so lock your price in today for up to 30 days!</p>
                                <p>Keep Track of the Value of Your Phone <a href="#" className="text-dark">Sign up for a Price Alert</a></p>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="upgrade-btn">Go to iphone price</a>
                                <a href="#" className="upgrade-btn">Go to samsung price</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <p className="text-center"><strong><a href="#" className="text-dark">See Top 100 Most Popular Cell Phone Trade Ins <i className="fa fa-angle-double-right"></i></a></strong></p>
                </div>
                <div className="container mt-2">
                    <div className="border">
                        <h1 className="popular-trade">MOST POPULAR TRADE INS</h1>
                        <div className="row">
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product1} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 11</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product2} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 12</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product3} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 12 Pro</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product3} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 10</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product2} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 11</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product1} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 11 Pro</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product3} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 8 Pro</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product2} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 9 Pro</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={product1} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>Iphone 8</h3>
                                        <h6>Top Price</h6>
                                        <h2>$415.00</h2>
                                        <h5>Compare 35 prices</h5>
                                        <a href="#" className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h3 className="brand-search">SEARCH BY BRAND</h3>
                </div>
                <div className="container">
                    <div className="row">
                    {this.state.brands.map(brand=>
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href={'/brands/product/'+brand.id}>
                                        <img src={`data:image/jpeg;base64,${brand.brand_image}`} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                        
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href="#" className="all-brands">
                                        <h3>View All Brands</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 compare-price py-3">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-center mb-3">
                                    <div className="compare-mobile">
                                        <img src={logo}/>
                                    </div>
                                    <div className="upgrade mb-3">
                                        <h4>compares prices from <span>40+ leading BuyBack</span></h4>
                                        <h4><span>Companies</span> to get you the best deal!</h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company1} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company2} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company3} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company4} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company5} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company6} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company5} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company4} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company7} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company2} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#">
                                                <img src={company1} alt="" className="company-logo"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                                        <div className="perfect-center h-100">
                                            <a href="#" className="company-more-btn">
                                                More <i className="fa fa-plus"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="card">
                        <div className="card-header step-heading">
                            <h5>Sell Your Phone in 4 Simple Steps</h5>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-3 perfect-center">
                                            <div className="steps">
                                                <img src={step1} alt="" className="step-image"/>
                                                <p>1. Find Your Device</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 perfect-center">
                                            <div className="steps">
                                                <img src={step2} alt="" className="step-image"/>
                                                <p>2. Choose the Best Deal</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 perfect-center">
                                            <div className="steps">
                                                <img src={step3} alt="" className="step-image"/>
                                                <p>3. Ship Your Device</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 perfect-center">
                                            <div className="steps">
                                                <img src={step4} alt="" className="step-image"/>
                                                <p>4. Get Your Cash!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="price-guaranteed">
                                        <img src={guaranteed} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="featured">
                                <h3>As featured in...</h3>
                                <div className="row">
                                    <div className="col-md-6 mb-2">
                                        <img src={company1} alt=""/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <img src={company2} alt=""/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <img src={company3} alt=""/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <img src={company4} alt=""/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <img src={company5} alt=""/>
                                    </div>
                                    <div className="col-md-6 mb-2">
                                        <img src={company6} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="testimonial">
                                <h3>What our customers say...</h3>
                                <div className="row">
                                    <div className="col-md-6 quote-block">
                                        <div className="avatar-image">
                                            <img className="rounded-circle" src={testimonial} width="108" height="108" alt="Thomas Stepien"/>
                                        </div>

                                        <div className="comment">
                                            <blockquote>
                                                <p>SellCell.com found me an awesome deal for my old cell phone.
                                                    THANKS GUYS!!!<i></i></p>
                                            </blockquote>
                                        </div>

                                        <div className="name">
                                            <p>Thomas Stepien, California </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 quote-block">
                                        <div className="avatar-image">
                                            <img className="rounded-circle" src={testimonial} width="108" height="108" alt="Thomas Stepien"/>
                                        </div>

                                        <div className="comment">
                                            <blockquote>
                                                <p>SellCell.com found me an awesome deal for my old cell phone.
                                                    THANKS GUYS!!!<i></i></p>
                                            </blockquote>
                                        </div>

                                        <div className="name">
                                            <p>Thomas Stepien, California </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="sell-phones">
                        <h3>Sell Phone</h3>
                    </div>
                    <div className="upgrade">
                        <h2><span>SellCell is the Fast and Easy Way to Sell Phones Online</span></h2>
                        <h3>"SellCell is like the Kayak of phone selling sites"</h3>
                        <p>(CentsandOrder)</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="selling-info">
                                <h4><span>Where Can I Sell My Cell Phone?</span></h4>
                                <p>Fortunately you've come to the right place! SellCell is the best place to sell phones, tablets and other mobile devices. We compare prices from all the leading cell phone buyers in the US to get you the most cash and also save you time and hassle. If you want to sell a phone or tablet then SellCell is the only site you need!</p>
                                <h4>How Do I Sell My Phone?</h4>
                                <p>It's so easy to sell your phone with SellCell. Sell phone for cash today in 4 simple steps:</p>
                                <ol>
                                    <li>Enter the make and model of the cell phone you want to sell in the search box above</li>
                                    <li>SellCell instantly compares prices from all the leading cell phone buyback companies to get you the most cash for your old phone. Simply select the best deal</li>
                                </ol>
                                <h4>Who Buys Used Cell Phones?</h4>
                                <p>People frequently ask us what happens to their device when they sell a smartphone or tablet through the SellCell platform. The companies featured on SellCell specialize in the buying, selling and recycling of used cell phones, tablets and other mobile devices. There is a big and growing demand globally for used cell phones. The latest handsets continue to get better and better but so does the cost with the prices for new phones increasing all the time. There are a lot of consumers and businesses that prefer to buy refurbished, pre-owned phones for a better deal. The cell phone buyback companies on our site specialize in buying used phones that people no longer want (such as when they upgrade) and they then generally refurbish the devices and sell them on again to customers looking for quality, pre-owned phones. When you trade in your old phone on SellCell the majority of devices will be re-sold to other customers domestically in America but they also get re-sold internationally to other countries all around the world</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="selling-info">
                                <h4><span>Why Wouldn't I Just Sell My Old Phone to My Carrier When I Upgrade?</span></h4>
                                <p>We know how it goes. You've decided to take the plunge and buy that shiny new latest flagship smartphone you've been dreaming about. Hey these things aren't cheap so you're obviously doing the sensible thing of selling your old phone to help pay for the upgrade. You're just going through the process of buying your new phone when your network carrier offers you a trade in price for your old phone. It's so easy, they'll discount your new phone by the trade in price so you have less to pay upfront. It's so tempting and the process is nice and easy. BUT, be warned, this might come at a cost. It's nice and convenient but generally the value you get from the network carriers to sell your old phone isn't the best. You can generally get a lot more cash for your old phone by shopping around and this doesn't have to be a hassle as you can simply use SellCell! SellCell compares prices from all the top cell phone buyers in the US in seconds to get you the best deal. By doing this you can generally get a lot more money for your old phone than the trade in prices offered by the carriers so it is worth doing</p>
                                <h4>Who Buys Used Cell Phones?</h4>
                                <p>People frequently ask us what happens to their device when they sell a smartphone or tablet through the SellCell platform. The companies featured on SellCell specialize in the buying, selling and recycling of used cell phones, tablets and other mobile devices. There is a big and growing demand globally for used cell phones. The latest handsets continue to get better and better but so does the cost with the prices for new phones increasing all the time. There are a lot of consumers and businesses that prefer to buy refurbished, pre-owned phones for a better deal. The cell phone buyback companies on our site specialize in buying used phones that people no longer want (such as when they upgrade) and they then generally refurbish the devices and sell them on again to customers looking for quality, pre-owned phones. When you trade in your old phone on SellCell the majority of devices will be re-sold to other customers domestically in America but they also get re-sold internationally to other countries all around the world</p>
                            </div>
                        </div>
                    </div>
                    <div className="sell-phones">
                        <h3>SellCell - the Best Place to Sell Your Phone</h3>
                    </div>
                    <div className="text-center my-4">
                        <a href="#" className="sell-my-phone">Sell My Phone</a>
                    </div>
                </div>
            </div>
        )

    }
}