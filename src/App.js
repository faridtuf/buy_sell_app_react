import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar';
import BuyNavbar from './components/BuyNavbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Product from './components/Product';
import Buy from './components/Buy';
import Sell from './components/Sell';
import brand from './components/brand';
import Footer from './components/Footer';
import BrandProduct from './components/BrandProduct';
import Login  from './components/login';
import SignUp from './components/Create';
import QuickBrandProduct from './components/QuickBrandProduct';
import BuyProduct from './components/BuyProduct';
// import SellMyAccount from './components/SellMyAccount';
import SellMyOrder from './components/SellMyOrder';
import Purchase from './components/Purchase';
import log from './components/Log';
import Address from './Address';
import Payment from './Payment';
import order from './order';
import Password from './components/Password';
import AccLogOut from './components/AccLogOut';
import Create from './components/Create';
import Account1 from './components/Account1';
import Acc2 from './components/Acc2';
const MainNav = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
        <div>
            <Navbar/>
            <Component {...props}/>
        </div>
    )}/>
)
const BuyNav = ({exact, path, component: Component}) => (
    <Route exact={exact} path={path} render={(props) => (
        <div>
            <BuyNavbar/>
            <Component {...props}/>
        </div>
    )}/>
)
function App() {
    return (
        <React.Fragment>
            <Switch>
           
            <MainNav path="/my/log" component={log}/>
            <MainNav path="/my/purchase" component={Purchase}/>
            <MainNav path="/my/order" component={SellMyOrder}/>
            <MainNav exact path="/my/account" component={Acc2}/>  
            <MainNav exact path="/details" component={Details}/>
            <MainNav exact path="/my/acc1" component={Account1}/>
            <MainNav exact path="/cart" component={Cart}/>
            <MainNav exact path="/my/create" component={Create}/>
            <MainNav exact path="/sell/acclogout" component={AccLogOut}/>
            {/* <MainNav exact path="/my/acco" component={SellMyAccount}/> */}
            <MainNav path="/sell/address" component={Address}/>
            <MainNav path="/sell/password" component={Password}/>
            <MainNav path="/sell/myorder" component={SellMyOrder}/>
            <MainNav path="/sell/order" component={order}/>
            <MainNav path="/sell/payment" component={Payment}/>  
            <MainNav path="/sell" component={Sell}/>
               
            <MainNav exact path="/brand" component={brand}/>
            <MainNav  path="/product" component={Product}/>
            <MainNav  path="/buy/product" component={BuyProduct}/>
            <MainNav  path="/brands/product/" component={BrandProduct}/>
            <MainNav  path="/quick/brand/product/" component={QuickBrandProduct}/>
            <MainNav exact path="/login" component={Login}/>
            <MainNav exact path="/signup" component={SignUp}/>
            <MainNav exact path="/" component={ProductList}/>
            <BuyNav exact path="/buy" component={Buy}/>
            <MainNav path="/buy/address" component={Address}/>
            <MainNav path="/buy/password" component={Password}/>
            <MainNav path="/buy/order" component={order}/>
            <MainNav path="/buy/payment" component={Payment}/> 
            <MainNav  component={Default}/>
                


            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
