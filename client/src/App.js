import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css'
// pages
import Navbar from './components//Navigation Bar/Navbar'
import ProductList  from './components/ProductList'
import Detail  from './components/Detail'
import Default from './components/Default'
import Login from './components//Login/Login'
import Register from './components/Login/Register'
import Footer from './components/Footer'
import Cart from './components/Cart/Cart';



export class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={ProductList} />
                    <Route exact path='/product' component={Detail} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/users/login' component={Login} />
                    <Route exact path='/users/register' component={Register} />
                    <Route component={Default} />
                </Switch>
               
                
            </div>
        )
    }
}

export default App;