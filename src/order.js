import React, { Component } from "react";
import axios from "axios";
import './App.css';


export default class order extends Component {

    render() {

        return (
            <div class="container-fluid">
                <div class="vertical-menu">
                                <a href="/my/account" class="active">Account</a>
                                <a href="/my/order"><i class="fas fa-th-large" />My Order</a><i />
                                <a href="#"><i class="fas fa-user">Edit Account</i></a>
                                <a href="/sell/password"><i class="fas fa-unlock-alt">Password</i></a>
                                <a href="/sell/address"><i class="fas fa-address-card"></i>Address Books</a>
                                <a href="/sell/acclogout"><i class="fas fa-sign-out-alt"></i>Logout</a>

                            </div>
                <div class="card">
                    <div class="row order">
                        <div class="col">
                            <h4><b>Order ID:</b><span>#3109</span></h4>
                            <h4><b>Date Added:</b><span>01/11/2021</span></h4>
                            <div >
                            <a className="btn btn-" href="/sell/myorder">Go to order</a>
                            </div>
                        </div>
                        <div class="col">
                            <h4><b>Status:2</b><span>-Order Placed</span></h4>
                            <h4><b>Products:</b><span>1</span></h4>
                            <h4><b>Total:</b><span>£30.60</span></h4>

                        </div>
                    </div>
                </div>
            </div>

        )

    }

}

