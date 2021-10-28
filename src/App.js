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
import SignUp from './components/signup';
import QuickBrandProduct from './components/QuickBrandProduct';
import BuyProduct from './components/BuyProduct';

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
                <Route exact path="/details" component={Details}/>
                {/*<Route exact path="/cart" component={Cart}/>*/}
                <MainNav exact path="/cart" component={Cart}/>
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
                <MainNav  component={Default}/>

            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
