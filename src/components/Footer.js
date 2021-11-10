import React,{Component} from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png'
import set1 from "../images/set-1.png";
import set2 from "../images/set-2.png";
import set3 from "../images/set-3.png";
import set4 from "../images/set-4.png";

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <div className="mt-5 footer py-3">
                    <div className="container">
                        <div className="row d-none d-lg-flex">
                            <div className="col-lg-3">
                                <div className="footer-banner">
                                    <img src={set1} alt="" className="footer-banner-image"/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-banner">
                                    <img src={set2} alt="" className="footer-banner-image"/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-banner">
                                    <img src={set3} alt="" className="footer-banner-image"/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-banner">
                                    <img src={set4} alt="" className="footer-banner-image"/>
                                </div>
                            </div>
                        </div>
                        <div className="card footer-mt rounded-0">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <h6>SELL YOUR TECH</h6>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>iPhone Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Samsung Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Cell Phone Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Sell iPad</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Sell Smartwatch</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <h6>About</h6>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Why Use SellCell?</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Best Price Guarantee</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Our Partners</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Feature your site on SellCell</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <h6>FOLLOW US</h6>
                                            <ul className="nav">
                                                <li className="nav-item">
                                                    <a className="nav-link footer-icons footer-twitter" href="#"><i className="fa fa-twitter"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link footer-icons footer-facebook" href="#"><i className="fa fa-facebook-f"></i></a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link footer-icons footer-youtube" href="#"><i className="fa fa-youtube"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <h6>POPULAR SEARCHES</h6>
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>iPhone Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Samsung Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Cell Phone Trade In</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Sell iPad</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Sell Smartwatch</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Why Use SellCell?</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Best Price Guarantee</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Our Partners</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Feature your site on SellCell</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="footer-links">
                                            <ul className="nav flex-column">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Home</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Why Use SellCell?</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Best Price Guarantee</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Our Partners</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#"><i className="fa fa-angle-right me-1"></i>Feature your site on SellCell</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mb-3">
                                    <div className="compare-mobile">
                                        <img src={logo}/>
                                    </div>
                                    <div className="upgrade mb-3">
                                        <h6>The Best Place to Sell Your Phone!</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}