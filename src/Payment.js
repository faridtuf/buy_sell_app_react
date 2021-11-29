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
        </main>
        <br />

        <section class="packaging">
          <div class="container">
            {/* <div class="row grid"> */}
              <div class="col-lg-4">
                <h3 class="text-uppercase">
                  <b>personal details</b>
                </h3>
                <div class="mb- row">
                  <label for="fname" class="col-sm-4 col-form-label">
                    *First Name
                  </label>
                  <div class="col-sm-4">
                    <input type="name" class="form-control" id="fname" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="lname" class="col-sm-4 col-form-label">
                    *Last Name
                  </label>
                  <div class="col-sm-4">
                    <input type="name" class="form-control" id="lname" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="email" class="col-sm-4 col-form-label">
                    *Email
                  </label>
                  <div class="col-sm-4">
                    <input type="email" class="form-control" id="email" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="cellno" class="col-sm-4 col-form-label">
                    *Telephone
                  </label>
                  <div class="col-sm-4">
                    <input type="number" class="form-control" id="cellno" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="faxno" class="col-sm-4 col-form-label">
                    Fax
                  </label>
                  <div class="col-sm-4">
                    <input type="number" class="form-control" id="faxno" />
                  </div>
                </div>
                <br />
                <div className="center">
                  <button class="button-form2 font">
                    Submit Personal Details
                  </button>
                </div>
              </div>

              <div class="col-lg-4">
                <h3 class="text-uppercase">
                  <b>payment methods</b>
                </h3>
                <div class="mb-2 row">
                  <label for="inputPassword" class="col-sm-4 col-form-label">
                    Payment Type
                  </label>
                  <div class="col-sm-4">
                    <select name="" id="" style={{ width: 180 + "px" }}>
                      <option value="" style={{ width: 180 + "px" }}>
                        --Option--
                      </option>
                    </select>
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="customer" class="col-sm-4 col-form-label">
                    Customer Name
                  </label>
                  <div class="col-sm-4">
                    <input type="name" class="form-control" id="customer" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="accountno" class="col-sm-4 col-form-label">
                    Account Number
                  </label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control" id="accountno" />
                  </div>
                </div>
                <div class="mb-2 row">
                  <label for="sortcode" class="col-sm-4 col-form-label">
                    Sort Code
                  </label>
                  <div class="col-sm-4">
                    <input type="number" class="form-control" id="sortcode" />
                  </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="center">
                  <button class="button-form2 font">
                    Submit Personal Details
                  </button>
                </div>
              </div>

            </div>
          {/* </div> */}
        </section>



      </div>


    )

  }
}