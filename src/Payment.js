import React, { Component } from "react";
import axios from "axios";
import './App.css';


export default class Payment extends Component {
    render() {
        return (

            <main>
                <section class="payment">
                    <div class="conainer">

                        <div class="row">
                            <div class="col-lg-4">
                                <h3 class="text-uppercase"><b>your personal details</b></h3>
                                <div class="mb-2 row">
                                    <label for="fname" class="col-sm-4 col-form-label">*First Name</label>
                                    <div class="col-sm-4">
                                        <input type="name" class="form-control" id="fname" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="lname" class="col-sm-4 col-form-label">*Last Name</label>
                                    <div class="col-sm-4">
                                        <input type="name" class="form-control" id="lname" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="email" class="col-sm-4 col-form-label">*Email</label>
                                    <div class="col-sm-4">
                                        <input type="email" class="form-control" id="email" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="cellno" class="col-sm-4 col-form-label">*Telephone</label>
                                    <div class="col-sm-4">
                                        <input type="number" class="form-control" id="cellno" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="faxno" class="col-sm-4 col-form-label">Fax</label>
                                    <div class="col-sm-4">
                                        <input type="number" class="form-control" id="faxno" />
                                    </div>
                                </div>
                                <button class="btn btn-sm text-uppercase">submit personal details</button>
                            </div>

                            <div class="col-lg-4">
                                <h3 class="text-uppercase"><b>payment methods</b></h3>
                                <div class="mb-2 row">
                                    <label for="inputPassword" class="col-sm-4 col-form-label">Payment Type</label>
                                    <div class="col-sm-4">
                                        <select name="" id="" style={{width: 180+'px'}}>
                                            <option value="" style={{width: 180+'px'}}>--Option--</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="customer" class="col-sm-4 col-form-label">Customer Name</label>
                                    <div class="col-sm-4">
                                        <input type="name" class="form-control" id="customer" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="accountno" class="col-sm-4 col-form-label">Account Number</label>
                                    <div class="col-sm-6">
                                        <input type="number" class="form-control" id="accountno" />
                                    </div>
                                </div>
                                <div class="mb-2 row">
                                    <label for="sortcode" class="col-sm-4 col-form-label">Sort Code</label>
                                    <div class="col-sm-4">
                                        <input type="number" class="form-control" id="sortcode" />
                                    </div>
                                </div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <div class="row"></div>
                                <button class="btn btn btn-sm text-uppercase">Submit Payment Details</button>
                            </div>

                            <div class="vertical-menu col-md-3">
                                <a href="#" class="active">Account</a>
                                <a href="#"><i class="fas fa-th-large" />My Order</a><i />
                                <a href="#"><i class="fas fa-user">Edit Account</i></a>
                                <a href="#"><i class="fas fa-unlock-alt">Password</i></a>
                                <a href="#"><i class="fas fa-address-card"></i>Address Books</a>
                                <a href="#"><i class="fas fa-sign-out-alt"></i>Logout</a>

                            </div>
                        </div>
                    </div>
                </section>
            </main>

        )

    }
}