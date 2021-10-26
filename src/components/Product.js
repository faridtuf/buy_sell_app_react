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
        total_price: 0,
        network_price:0,
        size_price:0,
        condition_price:0,
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
            let network = document.querySelector('input[name="Network"]:checked');
            let network_url = '';
            let condition_url = '';
            let size_url = ''
            if(network){
                let network_val = network.value;
                network_url = ','+network_val+','+'Network'
            }
            else{
                network_url = ''
            }
            let condition = document.querySelector('input[name="Condition"]:checked');
            if(condition){
                let condition_val = condition.value;
                condition_url = ','+condition_val+','+'Condition'
            }
            else{
                condition_url = ''
            }

            let size = document.querySelector('input[name="Size"]:checked');
            if(size){
                let size_val = size.value;
                size_url = ','+size_val+','+'Size'
            }
            else{
                size_url = ''
            }

            axios.get('http://167.86.108.124:8070/api/get_attribute/'+this.state.product.id+network_url+condition_url+size_url)
            .then(res=>{
                console.log(res);
                this.setState({'total_price':res.data.total_price})
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
                            
                                <div className="row align-items-center">
                                    <div className="col-2"><h5 className="network">NETWORK</h5></div>
                                    <div className="col-10">
                                        <div className="row">
                                            {this.state.product.my_dict.network_data.map(att=>
                                                <div className="col-2 mb-2">
                                                    <div className="bg-light position-relative">
                                                        <label className="sell-network">
                                                            <input type="radio" name="Network" value={att.attribute_id} onChange={this.handleChange.bind(this)} />
                                                            <img src={network1} alt="" className="network-image"/>
                                                            {/*<div>{att.attribute_name}</div>*/}
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-2"><h5 className="network">Condition</h5></div>
                                    <div className="col-10">
                                        <div className="row">
                                            {this.state.product.my_dict.condition_data.map(att=>
                                                <div className="col-3 mb-2">
                                                    <div className="bg-light position-relative">
                                                        <label className="sell-size">
                                                            <input type="radio" name="Condition" value={att.attribute_id} onChange={this.handleChange.bind(this)}/>
                                                            {/* <img src={network1} alt="" className="network-image"/> */}
                                                            <div className="ms-2">{att.attribute_name}</div>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <div className="col-2"><h5 className="network">SIZE</h5></div>
                                    <div className="col-10">
                                        <div className="row">
                                            {this.state.product.my_dict.size_data.map(att=>
                                                <div className="col mb-2">
                                                    <div className="bg-light position-relative">
                                                        <label className="sell-size">
                                                            <input type="radio" name="Size" value={att.attribute_id} onChange={this.handleChange.bind(this)} />
                                                            {/* <img src={network1} alt="" className="network-image"/> */}
                                                            <div className="ms-2">{att.attribute_name}</div>
                                                        </label>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            
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
                                        <h3>PRICE: £{this.state.total_price}</h3>
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
