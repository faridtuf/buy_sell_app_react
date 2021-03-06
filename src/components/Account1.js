import React,{Component} from "react";
import '../App.css'
export default class Account1 extends Component{
    render(){
        return(
            <div className='row'>
               
                <div className='col-4'>
                    <h2>Your Personal Details</h2>
                <form>
  <div className="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder="First Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Telephone</label>
    <input type="text" className="form-control" id="exampleInputnumber" aria-describedby="textHelp" placeholder="+923096372632"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Fax</label>
    <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>
  </div>
  <button type="submit" className="button-form">Submit</button>
</form>
                </div>
               
                <div className='col-4'>
                <h2>Payment Method</h2>
                <form>
  <div className="form-group">
      <p>
          payment method
      </p>
  <select className="form-control form-control-lg">
  <option value="1">Large select</option>
  <option value="2">Atm</option>
  <option value="3">cash</option>
</select>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder="Last Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Telephone</label>
    <input type="text" className="form-control" id="exampleInputnumber" aria-describedby="textHelp" placeholder="+923096372632"/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Fax</label>
    <input type="text" className="form-control" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>
  </div>
  <button type="submit" className="button-form">Submit</button>
</form>
                </div>
            
<div className='col-4'>
<div className="vertical-menu">
                   
                <a href="/my/account" className="active">Account</a>
                                <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                                <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                                <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                                <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                                <a href="/sell/acclogout"><i className="glyphicon glyphicon-off"></i>Logout</a>

                </div>
</div>
            </div>
            
        )
        
    }
}