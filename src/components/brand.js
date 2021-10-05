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
import company1 from "../images/company1.png";
import company2 from "../images/company2.png";
import company3 from "../images/company3.png";
import company4 from "../images/company4.png";
import company5 from "../images/company5.png";
import company6 from "../images/company6.png";
export default class Brand extends Component{
    render(){
        return(
            <div>
                <div className="border-bottom">
                    <div className="container">
                        <h3 className="brand-search">Sell Phones, Tablets and Other Electronics for Cash</h3>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="featured brands">
                        <h4>Most Popular Brands</h4>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand6} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="featured brands border-bottom py-3">
                        <h4>Other Brands</h4>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand6} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border h-100">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="featured brands">
                        <h3 className="mb-3">Search by device type</h3>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Cell Phones</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Tablets</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Smartwatch</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Laptop</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Mac</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand6} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Games Console</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={brand1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>iPod</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company1} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>eReader</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company2} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Camera</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company3} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Media Player</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company4} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Smart Home</h5>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-6 mb-2">
                                <div className="border">
                                    <div className="perfect-center single-brand-height">
                                        <a href="#">
                                            <img src={company5} alt="" className="brand-image"/>
                                        </a>
                                    </div>
                                </div>
                                <h5>Headphones</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}