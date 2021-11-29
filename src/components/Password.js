import React, { Component } from "react";
import axios from "axios";
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import '../App.css';



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
            <div class="col-md-3"></div>
          <div class="col-md-4">
            <form class="form" action="/action_page.php">
              <label for="password" class="mb-2 mr-sm-2">
                Password:
              </label>
              <input
                type="password"
                class="form-control mb-2 mr-sm-2"
                id="password"
                placeholder="Enter Password"
                name="Password"
              />
              <label for="pwd2" class="mb-2 mr-sm-2">
                Reset Password:
              </label>
              <input
                type="password"
                class="form-control mb-2 mr-sm-2"
                id="pwd2"
                placeholder="Enter password"
                name="pswd"
              />
              <br/>
              <div className="center">
              <button type="submit" class="button-form font center">
                Submit
              </button>
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