import React,{Component} from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";

export default class SellMyOrder extends Component{
    render(){
        return(
            <div>
                <div class="vertical-menu">
                <a href="/my/account" className="active">Account</a>
                                <a href="/my/order"><i className="glyphicon glyphicon-gift" />My Order</a><i />
                                <a href="/my/amount"><i className="glyphicon glyphicon-user">Edit Account</i></a>
                                <a href="/sell/password"><i className="glyphicon glyphicon-lock">Password</i></a>
                                <a href="/sell/address"><i className="glyphicon glyphicon-book"></i>Address Books</a>
                                <a href="/sell/acclogout"><i className="glyphicon glyphicon-off"></i>Logout</a>


                            </div>
                  <main class="site-main">
        <section class="packaging">
            <div class="container">
                <h2><b>PACKING SLIP</b></h2>
                <p><i>print or write down the details(order id,your name and your address)below on some paper and
                        included with your devices.if you send devices separately include a copy with each package.</i>
                </p>


                <div class="row grid">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h3 class="text-uppercase det"><b>Details</b></h3>
                        <h6><b>Order Id: </b><span>3109</span></h6>
                        <h6><b>Order Placed:</b> <span>01/11/2021</span></h6>
                        <h6><b>Shipping method:</b> <span>Royal Mail Free Pack</span></h6>
                        <h6><b>Payment method: </b><span>cheque</span></h6>
                    </div>

                    <div class="col-lg-2 col-md-6 colsm-6">
                        <div class="single-brand">
                            <img src={img2} style={{border: '4px solid #EEEEEE'}} alt="barcode"/>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-6 colsm-6">
                        <div class="single-brand">
                            <img src={img1} style={{"marginTop" : "10%", "width" : "50%"}} alt="mobile"/>
                        </div>
                    </div>

                </div>
            </div>
            <div class="container" style={{'margin-top': '10px'}}>
                <div class="row grid">
                    <div class="col-lg-6 col-md-6 col-sm-12" style={{border: '4px solid #EEEEEE'}}>
                        <h4><b>SHIP TO:</b></h4>
                        <h6>We Buy/Sell Mobile Phones LTD</h6>
                        <h6>The Tube Business Center</h6>
                        <h6>86 North St.</h6>
                        <h6>Machester</h6>
                        <h6>M8 8RA</h6>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12" style={{border: '4px solid #EEEEEE'}}>
                        <h4><b>CUSTOMER ADDRESS:</b></h4>
                        <h6>Test Zartash</h6>
                        <h6>Address 1</h6>
                        <h6>FSD 3800</h6>
                        <h6>Anglesey</h6>
                        <h6>United Kingdom</h6>
                    </div>
                </div>
            </div>
       
        </section>


        <h2><b>DEVICES</b></h2>
        <section class="devices">
            <div class="container">
                <div class="row grid vdc">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h5><b>Product Name:</b></h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5><b>Quantity:</b></h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5><b>Prices:</b></h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5><b>Total:</b></h5>
                    </div>
                </div>
                <hr style={{border: '4px solid #EEEEEE'}}/>
                <div class="row grid">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h3 class="text-uppercase">apple iphone 5s 16gb</h3>
                        <p>-Condition:Brand New</p>
                        <p>Network UNLOCKED</p>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5>1</h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5>£30.60</h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5>£30.60</h5>
                    </div>
                </div>
                <hr/>
                <div class="row grid">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h3 class="text-uppercase"></h3>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5></h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h6><b>Sub-Total:</b></h6>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h6>£30.60</h6>
                    </div>
                </div>
                <hr />
                <div class="row grid">
                    <div class="col-lg-6 col-md-8 col-sm-12">
                        <h3 class="text-uppercase"></h3>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h5></h5>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h6><b>Total:</b></h6>
                    </div>
                    <div class="col-lg-2 col-md-8 col-sm-12">
                        <h6>£30.60</h6>
                    </div>
                </div>

            </div>
        </section>



     
        <h2 class="text-uppercase"><b>order status history</b></h2>
        <section class="order">
            <div class="container">
                <div class="row grid vdc">
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h5><b>Date Added:</b></h5>
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h5><b>Status:</b></h5>
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h5><b>Comment:</b></h5>
                    </div>
                </div>
                <hr/>
                <div class="row grid">
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h5>01/11/2021</h5>
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <p>Order Placed</p>
                    </div>
                    <div class="col-lg-4 col-md-8 col-sm-12">
                        <h5></h5>
                    </div>
                </div>
            </div>

        </section>
    </main>
            </div>
        )
        
    }
}