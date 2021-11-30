import React, { Component } from "react";
import axios from "axios";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import './App.css';



export default class Address extends Component {
    render() {

        return (

            <div>




                <main class="site-main">
                    <section>
                        <div class="vertical-menu">
                            <a href="/my/account" className="active">Account</a>
                            <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                            <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                            <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                            <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                            <a href="/sell/acclogout"><i class="fas fa-sign-out-alt"></i>Logout</a>


                        </div>
                    </section>
                </main>
                <br/>
                <br/>
                <br/>
                <section class="packaging">
                    <div class="container-fluid">
                        {/* <div class="row grid"> */}
                        <div class="padding-form">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-4">
                                        <label for="inputEmail4">Order Id</label>
                                        {/* <input type="email" class="form-control" id="inputEmail4" placeholder="Email" /> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="input4">Status 2</label>
                                        {/* <input type="text" class="form-control" id="status" placeholder="status" /> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="date">Date Added</label>
                                        {/* <input type="text" class="form-control" id="date" placeholder="date" /> */}
                                    </div>
                                    <div class="form-group col-md-4">
                                        <label for="product">Date Added</label>
                                        {/* <input type="text" class="form-control" id="product" placeholder="product" /> */}
                                    </div>

                                    <div class="form-group col-md-4">
                                        <label for="price">Price</label>
                                        {/* <input type="text" class="form-control" id="price" placeholder="price" /> */}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <a className="button-form2" href="/sell/myorder">Go to Order</a>
                                    </div>
                                </div>



                            </form>
                        </div>

                    </div>
                    {/* </div> */}
                </section>



            </div>


        )

    }
}