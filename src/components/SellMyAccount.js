import React,{Component} from "react";

export default class SellMyAccount extends Component{
    render(){
        return(
            <div>
               <div class="row">
                  
  <div class="col">
      <div className="Acc">
  <h1>your personal details</h1>
   First Name: <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
    Last Name: <input type="text" class="form-control" placeholder="Last name" aria-label="First name"/>
    Email: <input type="email" class="form-control" placeholder="Email" aria-label="First name"/>
    Telephone: <input type="number" class="form-control" placeholder="Email" aria-label="First name"/>
    Fax: <input type="text" class="form-control" placeholder="Email" aria-label="First name"/>
    <button type="submit" class="btn btn-primary">submit details</button>
    </div>
  </div>
  
  <div class="col">
      <div className="Acc1">
      <h1>
            Payment Method
      </h1>
      <p>
        Payment Method :
      </p>
      <div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">Atm</option>
    <option value="2">cash</option>
    <option value="3">On delivary</option>
  </select>
</div>
   Customer Name <input type="text" class="form-control" placeholder="Customer Name" aria-label="Last name"
   />
 
   Account Number <input type="text" class="form-control" placeholder="Account Number" aria-label="Last name"/>
   Sort code <input type="text" class="form-control" placeholder="Sort code" aria-label="Last name"/>
   <button type="submit" class="btn btn-primary">submit details</button>
   </div>
  </div>
</div>
            </div>
        )
        
    }
}