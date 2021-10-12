import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './components/Navbar';
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

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                
                <Route exact path="/details" component={Details}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/buy" component={Buy}/>
                <Route path="/sell" component={Sell}/>
                <Route exact path="/brand" component={brand}/>
                <Route  path="/product" component={Product}/>
                <Route  path="/brands/product/" component={BrandProduct}/>
                <Route  path="/quick/brand/product/" component={QuickBrandProduct}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/" component={ProductList}/>
                <Route  component={Default}/>

            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
