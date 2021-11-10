import React, { Component } from "react";
import axios from "axios";
import './App.css';
// import { FaAirbnb, FaHeart } from "react-icons/fa";




export default class order extends Component {

    render() {

        return (
            <div class="container-fluid">

                {/* <div class="card col-md-6">
                    <div class="row order">
                        <div class="col-md-4">
                            <h4><b>Order ID:</b><span>#3109</span></h4>
                            <h4><b>Date Added:</b><span>01/11/2021</span></h4>
                            <div >
                                <a className="btn btn-danger" href="/sell/myorder">Go to order</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h4><b>Status:2</b><span>-Order Placed</span></h4>
                            <h4><b>Products:</b><span>1</span></h4>
                            <h4><b>Total:</b><span>£30.60</span></h4>

                        </div>
                    </div>
                </div> */}
                <div class="card col-md-6 padding-form">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Order Id</label>
                                {/* <input type="email" class="form-control" id="inputEmail4" placeholder="Email" /> */}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="input4">Status 2</label>
                                {/* <input type="text" class="form-control" id="status" placeholder="status" /> */}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="date">Date Added</label>
                                {/* <input type="text" class="form-control" id="date" placeholder="date" /> */}
                            </div>
                            <div class="form-group col-md-6">
                                <label for="product">Date Added</label>
                                {/* <input type="text" class="form-control" id="product" placeholder="product" /> */}
                            </div>
                            <div class="col-md-6">

                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">Price</label>
                                {/* <input type="text" class="form-control" id="price" placeholder="price" /> */}
                            </div>
                            <div class="center">
                            <a  className="button-form2" href="/sell/myorder">Go to Order</a>
                            </div>
                        </div>
                       


                    </form>
                </div>
                <br/>

                <div class="vertical-menu">
                    <a href="/my/account" class="active">Account</a>
                    <a href="/my/order"><i className="glyphicon glyphicon-th-large" />My Order</a><i />
                    <a href="#"><i class="glyphicon glyphicon-user">Edit Account</i></a>
                    <a href="/sell/password"><i class="glyphicon glyphicon-lock">Password</i></a>
                    <a href="/sell/address"><i class="glyphicon glyphicon-book"></i>Address Books</a>
                    <a href="/sell/acclogout"><i class="glyphicon glyphicon-off"></i>Logout</a>

                </div>
            </div>

        )

    }

}

