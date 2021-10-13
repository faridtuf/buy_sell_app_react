import React,{Component} from "react";
import axios from "axios";
export default class Login extends Component{
    // constructor(){
    //     this.state = {
    //         email:'',
    //         password:''
    //     }
    // }
    // handleEmail(email_text){
    //     this.setState({email:email_text.target.value})
    // }
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
                                    <h3>Login</h3>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label>Telephone:</label>
                                            <input type="email" className="form-control"/>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label>Password:</label>
                                            <input type="password" className="form-control"/>
                                        </div>
                                        <div className="col-md-12">
                                            <p><a href="#">Forgot password</a></p>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <input type="submit" value="Login" className="btn btn-sm btn-success"/>
                                        </div>
                                    </div>
                                    <p>Don't have an account? <a href="#">Register</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}