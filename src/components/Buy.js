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
export default class Buy extends Component{
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
                        <h1>Refurbished Smartphones</h1>
                        <h4>Smarter than a new phone</h4>
                        <div className="row justify-content-center">
                            <div className="col-md-3">
                                <div className="row refurbished-icons">
                                    <div className="col-2"><i className="fa fa-usd"></i></div>
                                    <div className="col-md-10"><p>Quality phones at better than new prices</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row refurbished-icons">
                                    <div className="col-2"><i className="fa fa-check"></i></div>
                                    <div className="col-md-10"><p>Every device tested to be 100% fully functional</p></div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="row refurbished-icons">
                                    <div className="col-2"><i className="fa fa-leaf"></i></div>
                                    <div className="col-md-10"><p>More sustainable way to buy a phone</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h1>Most Popular Refurbished Phones</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-3">
                            <a href="#" className="refurbished-phones">
                                <p>Apple</p>
                                <div className="my-2">
                                    <h5>iPhone 11</h5>
                                    <h5>Refurbished</h5>
                                    <img src={refurbished1} alt=""/>
                                    <h6>PRICES FROM $141.19</h6>
                                    <h6>PRICES FROM <del>$141.19</del></h6>
                                </div>
                                <a href="#" className="view-details">View Details</a>
                            </a>
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
            </div>
        )

    }
}