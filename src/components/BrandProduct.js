import React,{Component} from "react";
import axios from "axios";
export default class BrandProduct extends Component{
    state = {
        products : []
    }
    componentDidMount(){
        var brand_id = this.props.location.pathname.split('/')[3]
        axios.get('http://167.86.108.124:3000/api/brand/product/'+brand_id)
        .then(res=>{
            console.log(res);
            this.setState({products:res.data.result})
        })
    }
    state = {
        loading : true,
        products : []
    }
    
    async componentDidMount(){
        var brand_id = this.props.location.pathname.split('/')[3]
        axios.get('http://167.86.108.124:3000/api/brand/product/'+brand_id)
        .then(res=>{
            console.log(res);
            this.setState({products:res.data.result,loading:false})
        })
    }
    render(){
        return(
            <div>
                <div className="border-bottom">
                    <div className="container">
                        <h3 className="brand-search">Sell Phones, Tablets and Other Electronics for Cash</h3>
                    </div>
                </div>
                {this.state.loading || !this.state.products ? (
                    <div>Loading...</div>
                ) : (
                <div className="container">
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
                )}
                </div>
        )
        
    }
    
}