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
        product : null
    }
    
    async componentDidMount(){
        var product_id = this.props.location.pathname.split('/')[2]
        axios.get('http://167.86.108.124:8070/api/product.template/'+product_id)
        .then(res=>{
            console.log(res);
            this.setState({product:res.data,loading:false})
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
                        
                            <img src={`data:image/jpeg;base64,${this.state.product.image_1920}`}alt="" className="main-image"/>
                        </div>
                        <div className="col-md-9">
                            <h3 className="product-sub-title">Tell us about your {this.state.product.name}</h3>
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
                            <div id="filters1" className="desc">
                                2 Cars Selected
                            </div>
                            <div id="filters2" className="desc">
                                3 Cars
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
