import React,{Component} from "react";
import { Link } from "react-router-dom";
import buy_banner from "../images/buy-banner.jpg"
export default class Buy extends Component{
    render(){
        return(
            <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <h1>Compare deals on<br/>Refurbished and<br/>Pre-owned phones</h1>
                                <h3>Get a quality phone that<br/>works like new but costs less</h3>
                                <div className="home-search hidden-xs hidden-sm hidden-md">
                                    <form className="form-inline" action="/buy-search/" method="get">
                                        <div className="form-group">
                                            <span className="glyphicon glyphicon-search"></span>
                                            <input className="form-control ui-autocomplete-input" type="text" name="q" id="buySearchInputAutocompleteHome" autocomplete="off" placeholder="Enter model eg. iPhone X" autofocus=""/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <img className="img-responsive" src={buy_banner} width="540" height="455" alt="Refurbished &amp; Pre-owned phones"/>
                                
                            </div>
                        </div>
	                </div>
                </div>
        )
        
    }
}