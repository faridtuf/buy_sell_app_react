import React,{Component} from "react";
export default class SignUp extends Component{
    render(){
        return(

            <div className="container">
                <div className="card mt-5">
                    <div className="card-body">
                        <div className="row sign-up-logo">
                            <div className="col-md-4">
                                <img src="https://i.imgur.com/CXQmsmF.png" className="logo"/>
                            </div>
                            <div className="col-md-8 sign-up-form">
                                <form action="#">
                                    <h3>REGISTER ACCOUNT</h3>
                                    <p>If you already have an account with us, please login at the <a href="#">login page.</a></p>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <h6>YOUR PERSONAL DETAILS</h6>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <label>First Name:</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Last Name:</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>E-Mail:</label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Telephone:</label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Customer Type:</label>
                                                    <select name="" className="form-control">
                                                        <option value="">Please Select</option>
                                                        <option value="1">Individual</option>
                                                        <option value="2">Business</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Password:</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Password Confirm:</label>
                                                    <input type="password" className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <h6>YOUR ADDRESS</h6>
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <label>Post Code:</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Address 1:</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Address 2:</label>
                                                    <input type="text" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>City:</label>
                                                    <input type="email" className="form-control"/>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Country:</label>
                                                    <select name="" className="form-control">
                                                        <option value="">Please Select</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">Pakistan</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-12 mb-3">
                                                    <label>Region / State:</label>
                                                    <select name="" className="form-control">
                                                        <option value="">Please Select</option>
                                                        <option value="1">New York</option>
                                                        <option value="2">Punjab</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input type="submit" value="Continue" className="btn btn-sm btn-success"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}