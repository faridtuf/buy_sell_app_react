import React,{Component} from "react";
import product1 from "../images/iphone-11.jpg"
import network1 from "../images/network1.png"
import network2 from "../images/network2.png"
import network3 from "../images/network3.png"
import network4 from "../images/network4.png"
import network5 from "../images/network5.png"
import network6 from "../images/network6.png"
import $ from "jquery";
import axios from "axios";
export default class Product extends Component{
    state = {
        loading : true,
        product : null,
        optionValue: null,
    }
    
    async componentDidMount(){
        var product_id = this.props.location.pathname.split('/')[2]
        axios.get('http://167.86.108.124:8070/api/product.template/'+product_id)
        .then(res=>{
            console.log(res);
            this.setState({product:res.data,loading:false})
        })
    }
    handleChange(e) {
            console.log(e.target.value);
            axios.get('http://localhost:8014/api/custom.attribute.value/'+e.target.value)
            .then(res=>{
                console.log(res);
                this.setState({optionValue:this.state.optionValue+res.data.price})
            })
          }
    
    
    render(){
        return(
            <div>
                {this.state.loading || !this.state.product ? (
                    <div>Loading...</div>
                ) : (
                    <div className="container mt-5">
                <div className="product-title">
                    <h2>Sell <span>Apple iPhone 13 Pro Max</span></h2>
                </div>
                <div className="product-details">
                    <div className="row">
                        <div className="col-md-3">
                        
                            <img src={`data:image/jpeg;base64,${this.state.product.image_1920}`} alt="" className="main-image"/>
                        </div>
                        <div className="col-md-6">
                            <h3 className="product-sub-title">Tell us about your {this.state.product.name}</h3>
                            {this.state.product.my_dict.my_data.map(att=>
                                <div className="row align-items-center">
                                    <div className="col-2"><h5 className="network">{att.attribute_name}</h5></div>
                                    {att.value_ids.map(val=>
                                        <div className="col">
                                            <div className="bg-light position-relative">
                                                <input type="radio" name={att.attribute_name} value={val.id} onChange={this.handleChange.bind(this)}/>
                                                {/* <img src={network1} alt="" className="network-image"/> */}
                                                <div>{val.name}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            
                        </div>
                        <div className="col-md-3">
                        
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
                                        <h3>PRICE: £{this.state.optionValue}</h3>
                                        <form method='POST' className='quantity' action='#'>
                                            <div id='quantity'>
                                                <label className="me-2">Qty:</label>
                                                <input type='text' name='quantity'  className='qty'/>
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
                )}
            </div>
            
        )
    }
}
