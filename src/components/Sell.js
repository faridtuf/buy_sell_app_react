import React,{Component} from "react";
import { Link } from "react-router-dom";
import buy_banner from "../images/buy-banner.jpg"
import phones from "../images/sell-phone.png"
import searchIcon from "../images/magnifying-glass.png"
export default class Sell extends Component{
    render(){
        return(
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
        )
        
    }
}