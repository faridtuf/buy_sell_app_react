import React,{Component} from "react";
import product1 from "../images/iphone-11.jpg"
import svg1 from "../images/paypal.svg"
import svg2 from "../images/stripe-pay.svg"
import axios from "axios";
export default class BuyProduct extends Component{
    state = {
        loading : true,
        product : null
    }
    
    async componentDidMount(){
        var product_id = this.props.location.pathname.split('/')[3]
        axios.get('http://167.86.108.124:8070/get_single_product/'+product_id)
        .then(res=>{
            console.log(res.data.product);
            this.setState({product:res.data.product,loading:false})
        })
    }
    render(){
        return(
            <div>
                {this.state.loading || !this.state.product ? (
                    <div>Loading...</div>
                ) : (
                    <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div className="buy-image">
                            <img src={this.state.product.image.src} alt="" className="main-image"/>
                        </div>
                    </div>
                    <div className="col-md-9 mb-3">
                        <div className="buy-details">
                            <h3>{this.state.product.title}</h3>
                            <div className="paypal-stripe">
                                <img src={svg1} alt=""/>
                                <img src={svg2} alt=""/>
                            </div>
                            <div className="buy-rating">
                                <i className="fa fa-star-o me-2"></i>
                                <i className="fa fa-star-o me-2"></i>
                                <i className="fa fa-star-o me-2"></i>
                                <i className="fa fa-star-o me-2"></i>
                                <i className="fa fa-star-o me-2"></i>
                            </div>
                            <div className="buy-product-title">
                                <h6>SAMSUNG MOBILE PHONE</h6>
                            </div>
                            <div className="product-price">
                                <span className="buy-price"><del><i className="fa fa-gbp"></i> 590.00</del></span>
                                <span className="buy-sale-price"><i className="fa fa-gbp"></i> 480.00 Sale</span>
                            </div>
                            <div className="buy-cart">
                               <div className="row">
                                   <div className="col-md-12">
                                       <label>Quantity</label>
                                   </div>
                                   <div className="col-md-3">
                                       <input type="number" min="0"/>
                                       <a href="#" className="product-cart">Add to Cart</a>
                                   </div>
                               </div>
                            </div>
                            <div className="main-details mt-5">
                                <p className="blue-text">Samsung Galaxy S20 Ultra 12GB Ram 128GB Unlocked Grade A</p>
                                <p className="blue-text">CONDITION EXPLAINED </p>
                                <p className="green-text">Screen: Like new</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                )}
            </div>
            
        )
    }
}