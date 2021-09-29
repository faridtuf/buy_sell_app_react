import React,{Component} from "react";
import product1 from "../images/iphone-11.jpg"
import network1 from "../images/network1.png"
import network2 from "../images/network2.png"
import network3 from "../images/network3.png"
import network4 from "../images/network4.png"
import network5 from "../images/network5.png"
import network6 from "../images/network6.png"
import company1 from "../images/company1.png"
import company2 from "../images/company2.png"
import company3 from "../images/company3.png"
import company4 from "../images/company4.png"
import company5 from "../images/company5.png"
import company6 from "../images/company6.png"
import company7 from "../images/company7.png"
import $ from "jquery";
export default class Product extends Component{
    render(){
        return(
            <div className="container mt-5">
                <div className="product-title">
                    <h2>Sell <span>Apple iPhone 13 Pro Max</span></h2>
                </div>
                <div className="product-details">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={product1} alt="" className="main-image"/>
                        </div>
                        <div className="col-md-9">
                            <h3 className="product-sub-title">Tell us about your iPhone 13 Pro Max</h3>
                            <div className="row align-items-center">
                                <div className="col-2"><h5 className="network">NETWORK</h5></div>
                                <div className="col">
                                   <div className="bg-light position-relative">
                                       <input type="radio" name="network" value="1"/>
                                       <img src={network1} alt="" className="network-image"/>
                                   </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="2"/>
                                        <img src={network2} alt="" className="network-image"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="3"/>
                                        <img src={network3} alt="" className="network-image"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="4"/>
                                        <img src={network4} alt="" className="network-image"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="5"/>
                                        <img src={network5} alt="" className="network-image"/>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="6"/>
                                        <img src={network6} alt="" className="network-image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center position-relative">
                                <div className="col-2"><h5 className="network">CAPACITY</h5></div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="1"/>
                                        <p>128GB</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="2"/>
                                        <p>256GB</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="3"/>
                                        <p>512GB</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="4"/>
                                        <p>1TB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center position-relative">
                                <div className="col-2"><h5 className="network">CONDITION</h5></div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="1"/>
                                        <p>Like New</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="2"/>
                                        <p>Good</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="3"/>
                                        <p>Poor</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="bg-light position-relative">
                                        <input type="radio" name="network" value="4"/>
                                        <p>Faulty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="trade-price">
                                <h3>Apple iPhone 13 Pro Max Trade In Prices</h3>
                            </div>
                            <div id="filters1" className="desc">
                               <div className="card">
                                   <div className="card-body">
                                       <div className="row">
                                           <div className="col-lg-4">
                                               <div className="product-rating">
                                                   <img src={company1} alt=""/>
                                                   <div className="d-flex justify-content-center rating">
                                                       <i className="fa fa-star me-1"></i>
                                                       <i className="fa fa-star me-1"></i>
                                                       <i className="fa fa-star me-1"></i>
                                                       <i className="fa fa-star me-1"></i>
                                                       <i className="fa fa-star me-1"></i>
                                                   </div>
                                                   <div className="reviews">
                                                       <p>1023 REVIEWS</p>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="col-lg-4">
                                               <div className="product-rating">
                                                   <div className="reviews free-shipping">
                                                       <p>FREE SHIPPING? <i className="fa fa-check"></i></p>
                                                       <p>FREE RETURNS? <i className="fa fa-check"></i></p>
                                                       <p>PAYMENT SPEED: <span className="text-danger">3 DAYS</span></p>
                                                       <p>PRICE VALID FOR: 3 DAYS</p>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="col-lg-4">
                                               <div className="product-rating">
                                                   <h3>$1050.00</h3>
                                                   <a href="" className="get-paid">Get Paid <i className="fa fa-angle-double-right"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                            </div>
                            <div id="filters2" className="desc">
                                3 Cars
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}