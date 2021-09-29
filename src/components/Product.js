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
                    <p>Get money for your Apple Device...</p>
                </div>
                <div className="product-details">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Handset</h3>
                                </div>
                                <div className="card-body">
                                    <img src={product1} alt="" className="main-image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Condition / Network</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="product-sub-title">SELECT DEVICE CONDITION:</h3>
                                    <div className="row align-items-center position-relative">
                                        <div className="col-12"><h5 className="network">CONDITION</h5></div>
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <input type="checkbox" name="network" value="1"/>
                                                <p>Like New</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className=" position-relative">
                                                <input type="checkbox" name="network" value="2"/>
                                                <p>Good</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <input type="checkbox" name="network" value="3"/>
                                                <p>Poor</p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="position-relative">
                                                <input type="checkbox" name="network" value="4"/>
                                                <p>Faulty</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Value</h3>
                                </div>
                                <div className="card-body">
                                    <div id="filters1" className="desc">
                                        asd
                                    </div>
                                    <div id="filters2" className="desc">
                                        3 Cars
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