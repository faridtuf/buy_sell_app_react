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
import BuyProduct from './components/BuyProduct';
import Buy from './components/Buy';
import Sell from './components/Sell';
import brand from './components/brand';
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={ProductList}/>
                <Route path="/details" component={Details}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/buy" component={Buy}/>
                <Route path="/sell" component={Sell}/>
                <Route path="/brand" component={brand}/>
                <Route path="/product" component={Product}/>
                <Route path="/BuyProduct" component={BuyProduct}/>
                <Route  component={Default}/>

            </Switch>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
