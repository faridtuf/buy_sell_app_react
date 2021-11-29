import React, { Component } from "react";
import axios from "axios";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
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

                    <section class="packaging">
                        <div class="container">
                            {/* <div class="row grid"> */}

                                
                                <div class="col-lg-6 col-md-8 col-sm-12 center">
                                    <br />
                                    <br />
                                    <br />

                                    <h2 class="text-uppercase"><b>address book entries</b></h2>
                                    <h4 class="opacity-25">Test Zartash</h4>
                                    <h4>Address 1</h4>
                                    <h4>FSD 3800</h4>
                                    <h4>Anglesey</h4>
                                    <h4>United Kingdom</h4>
                                    <br />
                                    <div className="center">
                                        <a className="button-form" href="/my/account">Edit</a>
                                    </div>
                                </div>


                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    {/* <div class="single-brand">
                                        <img src={img1} style={{ "marginTop": "10%", "width": "50%" }} alt="mobile" />
                                    </div> */}
                                </div>


                            </div>
                        {/* </div> */}
                    </section>
                </main>


            </div>


        )

    }
}