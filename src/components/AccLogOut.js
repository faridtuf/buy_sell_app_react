import React,{Component} from "react";
import '../App.css';

export default class AccLogOut extends Component{
    render(){
        return(
            <div>
                 <div class="vertical-menu">
                <a href="/my/account" class="active">Account</a>
                                <a href="/my/order"><i class="fas fa-th-large" />My Order</a><i />
                                <a href="#"><i class="fas fa-user">Edit Account</i></a>
                                <a href="/sell/password"><i class="fas fa-unlock-alt">Password</i></a>
                                <a href="/sell/address"><i class="fas fa-address-card"></i>Address Books</a>
                                <a href="/sell/acclogout"><i class="fas fa-sign-out-alt"></i>Logout</a>

                </div>
                <div className="logout">
                <h1>ACCOUNT LOGOUT</h1>
                </div>
                <div className="logp">
                    <p>
                    You have been logged off your account. It is now safe to leave the computer.
                    </p>
                    <p>
                    Your shopping cart has been saved, the items inside it will be restored whenever you log back into your account.
                    </p>
                </div>
                <div className="col-lg-1">
                    <button type="button">Continue</button>
                </div>
            </div>
            
        )
        
    }
}