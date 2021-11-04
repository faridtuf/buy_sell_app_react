import React, { Component } from "react";
import axios from "axios";
// import './App.css';


export default class Login extends Component {
    render() {
        
        return (
          

            <div className="container">
                <div className="row">
                    <h2 className="text-center">Create Account</h2>

                    <form class="form">
                        <div class="form-group">
                            <label for="fname">First Name:</label>
                            <input type="name" class="form-control" id="fname" placeholder="First Name" name="fname" />
                        </div>
                        <div class="form-group">
                            <label for="name">Last Name:</label>
                            <input type="name" class="form-control" id="lname" placeholder="Last Name" name="lname" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email:</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" />
                        </div>



                        <button type="signin" className="btn btn-default hero-btn">CREATE</button>
                    </form>
                </div>
            </div>
        )

    }
}