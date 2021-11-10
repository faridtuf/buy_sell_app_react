import React, { Component } from "react";
import axios from "axios";
// import './App.css';


export default class Create extends Component {
    render() {
        
        return (
          

            <div className="container">
                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <br/><br/>
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

                        <div style={{'text-align': 'center'}}>
                        <button type="submit" className="button-form">Create</button>

                        </div>


                    </form>
                    </div>
                    <div className="col-3">

                    </div>
                   
                </div>
            </div>
        )

    }
}