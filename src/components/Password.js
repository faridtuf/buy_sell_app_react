import React, { Component } from "react";
import axios from "axios";
// import './App.css';


export default class Password extends Component {
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
                        <button class="btn text-uppercase text-center">continue</button>
                    </div>


                </div>
            </div>
        )


    }
}