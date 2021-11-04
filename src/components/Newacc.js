import React, { Component } from "react";
import axios from "axios";
// import './App.css';


export default class Login extends Component {
  render() {
    return (
      
      <div className="container">
        <h2 className="text-center">Sign In</h2>

        <form class="form">
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
          </div>

          <button type="signin" className="btn btn-default hero_btn">SIGN IN</button>
        </form>
      </div>
    )

  }
}