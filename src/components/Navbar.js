import React,{Component} from "react";
import { Link } from "react-router-dom";
import logo from '../logo.png'

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <div id="page-header" className="hidden-xs">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <Link to="/">
                                    <img className="logo" src={logo} width="184" height="55" alt="SellCell.com"/>
                                </Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex align-items-center no1-site">
                                    <svg className="rosette" width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.744 13.4336C35.7808 13.1552 35.8 12.8768 35.8 12.6C35.8 8.7936 32.3712 5.7392 28.5664 6.256C27.4576 4.2832 25.3456 3 23 3C20.6544 3 18.5424 4.2832 17.4336 6.256C13.6208 5.7392 10.2 8.7936 10.2 12.6C10.2 12.8768 10.2192 13.1552 10.256 13.4336C8.2832 14.544 7 16.656 7 19C7 21.344 8.2832 23.456 10.256 24.5664C10.2192 24.8448 10.2 25.1232 10.2 25.4C10.2 29.2064 13.6208 32.2528 17.4336 31.744C18.5424 33.7168 20.6544 35 23 35C25.3456 35 27.4576 33.7168 28.5664 31.744C32.3712 32.2528 35.8 29.2064 35.8 25.4C35.8 25.1232 35.7808 24.8448 35.744 24.5664C37.7168 23.456 39 21.344 39 19C39 16.656 37.7168 14.544 35.744 13.4336ZM21.328 26.0656L15.4608 20.1232L17.7392 17.8768L21.3504 21.5344L28.2736 14.664L30.5264 16.936L21.328 26.0656Z" fill="#EE5B35"></path>
                                    </svg>
                                    <h4>Trusted since 2008. Over $575 million paid out to customers!</h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <a className="buy-phone" href="/buy/">BUY</a>
                                <a className="sell-phone active" href="/sell/">SELL</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-border">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                            <div className="container-fluid">
                                <span>SELL YOUR TECH:</span>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-3 me-auto mb-2 mb-lg-0">
                                        <li className="nav-item dropdown menu-large">
                                            <a className="nav-link dropdown-toggle" href="#" id="iphones"
                                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Iphones
                                            </a>
                                            <ul className="dropdown-menu megamenu" aria-labelledby="iphones">
                                                <div className="row">
                                                    <h6 className="col-md-12">Cell Iphones</h6>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <a className="text-black" href="#">See All Iphones >></a>
                                                </div>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown menu-large">
                                            <a className="nav-link dropdown-toggle" href="#" id="samsung"
                                               role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Samsung phones
                                            </a>
                                            <ul className="dropdown-menu megamenu" aria-labelledby="samsung">
                                                <div className="row">
                                                    <h6 className="col-md-12">Cell Samsung</h6>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <div className="dropdown-item">Sell iPhone 13 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro Max</div>
                                                        <div className="dropdown-item">Sell iPhone 12 Pro</div>
                                                        <div className="dropdown-item">Sell iPhone 13</div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <a className="text-black" href="#">See All Samsung >></a>
                                                </div>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )

    }
}