import React, { Component } from "react";
import axios from "axios";
import '../App.css';


export default class Password extends Component {
    render() {
        return (

            <div class="container-fluid">
                <div class="vertical-menu">
                   
                <a href="/my/account" className="active">Account</a>
                                <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                                <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                                <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                                <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                                <a href="/sell/acclogout"><i className="glyphicon glyphicon-off"></i>Logout</a>

                </div>
                <div class="container">
                    <div class="card">
                        <div class="row">
                            <div class="mb-2 row">
                                <label for="inputPassword" class="col-sm-3 col-form-label">*Password</label>
                                <div class="col-4">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                            <div class="mb-2 row">
                                <label for="inputPassword" class="col-sm-3 col-form-label">*Password Confirm</label>
                                <div class="col-4">
                                    <input type="password" class="form-control" id="inputPassword" />
                                </div>
                            </div>
                        </div>
                        <div className="password-m">
                        <button type="submit" className="button-form">Continue</button>
                        </div> 
                    </div>


                </div>
            </div>
        )


    }
}