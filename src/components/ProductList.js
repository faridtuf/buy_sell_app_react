import axios from "axios";
import React,{Component} from "react";
export default class ProductList extends Component{
    state = {
        products : []
    }
    componentDidMount(){
        axios.get('http://167.86.108.124:8070/api/product.template')
        .then(res=>{
            console.log(res);
            this.setState({products:res.data.result})
        })
    }
    render(){
        return(
            <div>
                <div className="container mt-2">
                    <div className="border">
                        <h1 className="popular-trade">MOST POPULAR TRADE INS</h1>
                        <div className="row">
                        
                            {this.state.products.map(product=>
                            <div className="col-xl-4 col-md-6 mb-2">
                                <div id={product.id} className="row product">
                                    <div className="col-6 col-md-5">
                                        <img src={`data:image/jpeg;base64,${product.image_1920}`} alt="" className="product-image"/>
                                    </div>
                                    <div className="col-6 col-md-7 product-details">
                                        <h3>{product.name}</h3>
                                        <h6>Top Price</h6>
                                        <h2>{product.lst_price}</h2>
                                        <a href={'/product/'+product.id} className="sell-now">Sell Now</a>
                                    </div>
                                </div>
                            </div>
                            )}
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
        
    }
}