import React, { Component } from "react";
import axios from "axios";
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
                                <div>
                            <a className="btn btn-"href="/my/account">Edit</a>
                            </div>
                            </div>
                            <div class="col-lg-3"></div>

                            <div class="vertical-menu col-lg-4">
                            <a href="/my/account" class="active">Account</a>
                                <a href="/my/order"><i class="fas fa-th-large" />My Order</a><i />
                                <a href="#"><i class="fas fa-user">Edit Account</i></a>
                                <a href="/sell/password"><i class="fas fa-unlock-alt">Password</i></a>
                                <a href="/sell/address"><i class="fas fa-address-card"></i>Address Books</a>
                                <a href="/sell/acclogout"><i class="fas fa-sign-out-alt"></i>Logout</a>


                            </div>
                        </div>

                    </div>
                </section>
                




            </main>
        )

    }
}