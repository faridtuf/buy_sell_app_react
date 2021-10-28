import React,{Component} from "react";
import { Link } from "react-router-dom";
import buy_banner from "../images/buy-banner.jpg"
import refurbished1 from "../images/iphone-11.jpg"
import brand1 from "../images/apple.png";
import brand2 from "../images/samsung.png";
import brand3 from "../images/lg.png";
import brand4 from "../images/oneplus.png";
import tablet from "../images/tablets.png";
import smartwatch from "../images/smartwatches.png";
import macs from "../images/macs.png";
import company1 from "../images/company1.png";
import company2 from "../images/company2.png";
import company3 from "../images/company3.png";
import company4 from "../images/company4.png";
import company5 from "../images/company5.png";
import company6 from "../images/company6.png";
import accessories1 from "../images/accessories-1.jpg";
import accessories2 from "../images/accessories-2.jpg";
import accessories3 from "../images/accessories-3.jpg";
import accessories4 from "../images/accessories-4.jpg";
import accessories5 from "../images/accessories-5.jpg";
import accessories6 from "../images/accessories-6.jpg";
import accessories7 from "../images/accessories-7.jpg";
import accessories8 from "../images/accessories-8.jpg";
import deal from "../images/deal.png";
import logo from "../logo.png";
import company7 from "../images/company7.png";
import iPhone13 from "../images/iphone-13.jpg";
import axios from "axios";
export default class Buy extends Component{
    state = {
        products : []
    }
    async componentDidMount(){
        axios.get('http://167.86.108.124:8070/get_products')
        .then(res=>{
            console.log(res.data.products);
            this.setState({products:res.data.products})
        })
    }
    render(){
        return(
            <div>
                <div className="buy-header">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-lg-6">
                                <h1>Compare deals on<br/>Refurbished and<br/>Pre-owned phones</h1>
                                <h4>Get a quality phone that<br/>works like new but costs less</h4>
                                <form action="">
                                    <div className="form-group has-search">
                                        <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control form-control-lg" placeholder="Search"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img className="img-responsive" src={buy_banner} width="540" height="455"
                                     alt="Refurbished &amp; Pre-owned phones"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">PHONES TABLETS & ACCESSORIES</h4>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories1} alt=""/>
                                    <h3>Apple iPhones</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories2} alt=""/>
                                    <h3>Samsung Mobile Phones</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories3} alt=""/>
                                    <h3>Oppo</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories4} alt=""/>
                                    <h3>Xiaomi</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories5} alt=""/>
                                    <h3>Tablets For Sale</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories6} alt=""/>
                                    <h3>Apple iPhones</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories7} alt=""/>
                                    <h3>Apple Mobile Phones Accessories</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories8} alt=""/>
                                    <h3>iPad Accessories</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-3">
                            <div className="buy-deals">
                                <img src={deal} alt=""/>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="buy-deals-details">
                                <h3>Deal of the month</h3>
                                <p className="lead">Meizu M5 Note 16 GB (Dual Sim) - Grey - Gold Unlocked Grade A</p>
                                <p className="lead">Only £55.00</p>
                                <a href="#" className="deal-btn">Buy Now Limited stock</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                <div className="d-flex justify-content-between align-items-center">
                    <h3 className="brand-search">Shop By Brand</h3>
                    <a href="#" className="see-all-brands">See All brands <i className="fa fa-angle-double-right"></i></a>
                </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href="#">
                                        <img src={brand1} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href="#">
                                        <img src={brand2} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href="#">
                                        <img src={brand3} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height">
                                    <a href="#">
                                        <img src={brand4} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h3 className="brand-search">Not Just Phones</h3>
                    <h5 className="brand-search">See our other Refurbished Tech...</h5>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height refurbished-tech">
                                    <a href="#">
                                        <h6>Refurbished Tablets</h6>
                                        <img src={tablet} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height refurbished-tech">
                                    <a href="#">
                                        <h6>Refurbished Smartwatches</h6>
                                        <img src={smartwatch} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-2">
                            <div className="border h-100">
                                <div className="perfect-center brand-height refurbished-tech">
                                    <a href="#">
                                        <h6>Refurbished Macs</h6>
                                        <img src={macs} alt="" className="brand-image"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <h3 className="brand-search">Featured In</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-2">
                            <img src={company1} alt=""/>
                        </div>
                        <div className="col-md-2 mb-2">
                            <img src={company2} alt=""/>
                        </div>
                        <div className="col-md-2 mb-2">
                            <img src={company3} alt=""/>
                        </div>
                        <div className="col-md-2 mb-2">
                            <img src={company4} alt=""/>
                        </div>
                        <div className="col-md-2 mb-2">
                            <img src={company5} alt=""/>
                        </div>
                        <div className="col-md-2 mb-2">
                            <img src={company6} alt=""/>
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
                                        <h4>compares prices from <span>leading Refurbished</span></h4>
                                        <h4><span>retailers </span> to get you the best deal!</h4>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-md-8">
                                        <div className="row justify-content-center">
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company1} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company2} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company3} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company4} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company5} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company6} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company5} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company4} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company7} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company2} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company1} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
                                                <div className="perfect-center h-100">
                                                    <a href="#">
                                                        <img src={company7} alt="" className="company-logo"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-6 col-lg-3 col-xl-3 mb-3">
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
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="sell-phones">
                        <h3>Refurbished Cell Phones</h3>
                        <h5>SellCell helps you find the best deals on Refurbished Phones & other Refurbished Devices</h5>
                    </div>
                    <div className="refurbished-devices">
                        <div className="row justify-content-center">
                            <div className="col-md-9">
                                <p>SellCell compares deals on Refurbished Tech inc. Cell Phones, iPhones, Tablets, iPads, Smartwatches, MacBooks & more. SellCell compares prices from the leading brands to help you find the best deals on Refurbished devices. Save yourself the time and hassle of shopping around by using SellCell to compare all the best deals in one place</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="nav flex-column buy-list">
                                            <li className="nav-item">
                                                <a href="" className="nav-link"><i className="fa fa-angle-right"></i> Buy Refurbished Phone - Why Use SellCell?</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="" className="nav-link"><i className="fa fa-angle-right"></i> Should I buy a refurbished phone?</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="" className="nav-link"><i className="fa fa-angle-right"></i> Do you sell other refurbished devices?</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="nav flex-column buy-list">
                                            <li className="nav-item">
                                                <a href="" className="nav-link"><i className="fa fa-angle-right"></i> What is a refurbished phone?</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="" className="nav-link"><i className="fa fa-angle-right"></i> Where can I buy a refurbished cell phone?</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <div className="upgrade">
                                    <h2><span>Buy Refurbished Phone - Why Use SellCell?</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="row refurbished-phones-icons">
                                    <div className="col-2"><i className="fa fa-check"></i></div>
                                    <div className="col-md-10">
                                        <h4>High Quality Refurbished Phones</h4>
                                        <p>All the sellers of refurbished phones on SellCell have been rigorously vetted to ensure they are a quality company that produces refurbished devices to a high standard so you can rest assured you are getting a high quality product from a trusted company.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row refurbished-phones-icons">
                                    <div className="col-2"><i className="fa fa-check"></i></div>
                                    <div className="col-md-10">
                                        <h4>Free and Impartial</h4>
                                        <p>SellCell is completely free and totally impartial. We compare deals on refurbished phones from the leading brands and we show you independently verified customer reviews for each seller to help you make the right decision</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row refurbished-phones-icons">
                                    <div className="col-2"><i className="fa fa-check"></i></div>
                                    <div className="col-md-10">
                                        <h4>Saves You Time and Hassle</h4>
                                        <p>To get the best deal when buying a refurbished phone or other refurbished device you ideally need to shop around as prices vary a lot. SellCell saves you the time and hassle of shopping around by instantly comparing prices from all the leading sellers in one handy place. Problem solved!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <h3>SellCell - the Best Place for Refurbished Phones & Other Tech</h3>
                    </div>
                </div>
            </div>
        )

    }
}