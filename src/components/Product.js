import React,{Component} from "react";
import product1 from "../images/iphone-11.jpg"
import network1 from "../images/unlocked.png"
import network2 from "../images/ee.png"
import network3 from "../images/o2.png"
import network4 from "../images/orange.png"
import network5 from "../images/vodafone.png"
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
                        <div className="col-lg-3 col-md-6 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Handset</h3>
                                </div>
                                <div className="card-body">
                                    <img src={product1} alt="" className="main-image"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Condition / Network</h3>
                                </div>
                                <div className="card-body">
                                    <h3 className="product-sub-title">SELECT DEVICE CONDITION:</h3>
                                    <div className="row position-relative">
                                        <div className="col-5">
                                            <div className="row">
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
                                                <div className="col-12 available_networks">
                                                    <label>SELECT NETWORK:</label>
                                                    <select name="find_network" id="find_network" className="form-control">
                                                        <option>Network</option>
                                                        <option value="1">Unlocked</option>
                                                        <option value="1">EE</option>
                                                        <option value="1">O2</option>
                                                        <option value="1">Orange</option>
                                                        <option value="1">VodaPhone</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7">
                                            <div className="card-body">
                                                <div id="filters1" className="desc">
                                                    <ul className="nav flex-column">
                                                        <li><i className="fa fa-check me-1"></i>Sealed, original packaging</li>
                                                        <li><i className="fa fa-check me-1"></i>fully working, unused condition</li>
                                                        <li><i className="fa fa-check me-1"></i>No missing parts</li>
                                                        <li><i className="fa fa-check me-1"></i>Includes battery</li>
                                                    </ul>
                                                </div>
                                                <div id="filters2" className="desc">
                                                    <ul className="nav flex-column">
                                                        <li><i className="fa fa-check me-1"></i>Fully Functional</li>
                                                        <li><i className="fa fa-check me-1"></i>All buttons working</li>
                                                    </ul>
                                                </div>
                                                <div id="filters3" className="desc">
                                                    <ul className="nav flex-column">
                                                        <li><i className="fa fa-check me-1"></i>Fully Functional</li>
                                                        <li><i className="fa fa-check me-1"></i>Poor cosmetic condition</li>
                                                    </ul>
                                                </div>
                                                <div id="filters4" className="desc">
                                                    <ul className="nav flex-column">
                                                        <li><i className="fa fa-check me-1"></i>Not fully functional or screen is damaged</li>
                                                        <li><i className="fa fa-check me-1"></i>Intact, not crushed or bent</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 mb-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Value</h3>
                                </div>
                                <div className="card-body">
                                    <div className="gbp">
                                        <h2>Select Condition & Network.</h2>
                                        <h2><i className="fa fa-gbp" aria-hidden="true"></i></h2>
                                        <p>The value of this device is dependent on the condition and network.</p>
                                    </div>
                                    <div className="price">
                                        <h3>PRICE: £13.49</h3>
                                        <form method='POST' className='quantity' action='#'>
                                            <div id='quantity'>
                                                <label className="me-2">Qty:</label>
                                                <input type='text' name='quantity' value='1' className='qty'/>
                                                <div className="qty-btn">
                                                    <input type='button' value='+' className='qtyplus plus' field='quantity'/>
                                                    <input type='button' value='-' className='qtyminus minus' field='quantity'/>
                                                </div>
                                            </div>
                                            <input type="submit" className="btn btn-success rounded-0 sell-phone-now" value="Sell Now"/>
                                        </form>
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