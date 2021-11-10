import React,{Component} from "react";
import '../App.css';

export default class AccLogOut extends Component{
    render(){
        return(
            <div>
                 <div class="vertical-menu">
                                <a href="/my/account" className="active">Account</a>
                                <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                                <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                                <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                                <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                                <a href="/sell/acclogout"><i className="glyphicon glyphicon-off"></i>Logout</a>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="logout">
                <h1>ACCOUNT LOGOUT</h1>
                </div>
                <div className="logp center">
                    <h4>
                    You have been logged off your account. It is now safe to leave the computer.
                    </h4>
                    <h4>
                    Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
                    </h4>
                </div>
                <br/>
                <div className="center">
                <button type="submit" className="button-form font">Continue</button>
                </div>
                <br/>
                <br/>
                <br/>
                

            </div>
            
        )
        
    }
}