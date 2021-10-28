import React,{Component} from "react";
import { Link } from "react-router-dom";
import buy_banner from "../images/buy-banner.jpg"
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
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";
import product5 from "../images/product-5.png";
import watch1 from "../images/watch-1.jpg";
import watch2 from "../images/watch-2.jpg";
import watch3 from "../images/watch-3.jpg";
import watch5 from "../images/watch-5.jpg";
import deal from "../images/deal.png";
import logo from "../logo.png";
import company7 from "../images/company7.png";
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
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">FEATURED COLLECTION</h4>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product1} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product2} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product3} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product4} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product1} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product2} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product3} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product4} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="row justify-content-center my-5">
                                <div className="col-md-2">
                                    <a href="#" className="deal-btn">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">NOT BE MISSED</h4>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="not-missed">
                                    <img src={product1} alt=""/>
                                    <h3>Deal Of The Week</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="not-missed">
                                    <img src={product2} alt=""/>
                                    <h3>High Specs Phones</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="not-missed">
                                    <img src={product3} alt=""/>
                                    <h3>5G Phones</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mb-3">
                                <div className="not-missed">
                                    <img src={product4} alt=""/>
                                    <h3>Under £100</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">SMART WATCHES</h4>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={product5} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={watch1} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={watch2} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={watch3} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={product5} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection smart-watch">
                                    <img src={watch5} alt=""/>
                                    <h3>Galaxy Watch 4G 42mm Black LTE</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="row justify-content-center my-5">
                                <div className="col-md-2">
                                    <a href="#" className="deal-btn">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">NEW ARRIVALS</h4>
                        <div className="row">
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product1} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product2} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product3} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product4} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product1} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product2} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product3} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product4} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="col-lg-2 col-md-6 mb-3">
                                <a href="#" className="feature-collection">
                                    <img src={product5} alt=""/>
                                    <h3>Oppo Find Neo X2 5G 256GB 12GB Ram Unlocked Brand New Sealed</h3>
                                    <p>Oppo</p>
                                    <p><del>£499.00</del> <span>£349.00</span> Sale</p>
                                </a>
                            </div>
                            <div className="row justify-content-center my-5">
                                <div className="col-md-2">
                                    <a href="#" className="deal-btn">View All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="refurbished">
                        <h4 className="my-5">MORE PRODUCTS</h4>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories1} alt=""/>
                                    <h3>Tablets For Sale</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories2} alt=""/>
                                    <h3>Laptops For Sales</h3>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-3">
                                <div className="accessories">
                                    <img src={accessories3} alt=""/>
                                    <h3>All Other Models/ Imported</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}