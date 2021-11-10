import React, { Component } from "react";
import axios from "axios";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import './App.css';



export default class Address extends Component {
    render() {

        return (


            <main>

                <section class="header">
                    <div class="container">
                        <div class="row fot">
                            <div class="col-lg-12">
                                <div class="color"></div>
                            </div>
                        </div>


                    </div>
                </section>

                <section class="address">
                    <div class="container">
                        <div class="row grid">

                            <div class="col-lg-4">
                                <h2 class="text-uppercase"><b>address book entries</b></h2>
                                <h4 class="opacity-25">Test Zartash</h4>
                                <h4>Address 1</h4>
                                <h4>FSD 3800</h4>
                                <h4>Anglesey</h4>
                                <h4>United Kingdom</h4>
                                <br/>
                                
                                <div className="btnClr">
                            <a className="button-form font" href="/my/account">Edit Address</a>
                            </div>
                            </div>
                            <div class="col-lg-3"></div>

                            <div class="vertical-menu col-lg-4">
                            <a href="/my/account" className="active">Account</a>
                                <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                                <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                                <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                                <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                                <a href="/sell/acclogout"><i class="glyphicon glyphicon-off"></i>Logout</a>


                            </div>
                        </div>

                    </div>
                </section>
                




            </main>
        )

    }
}