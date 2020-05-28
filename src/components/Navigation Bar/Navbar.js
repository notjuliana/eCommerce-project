import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from "../../context"

import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from 'styled-components'
import MobileMenu from './MobileMenu'



 export default class Navbar extends Component {
    render() {
        return (
            <ProductConsumer>
            {value => {
                const { count } = value.detailProduct;
            return (
     <NavBar> 
        <nav>
        <div className='MobileNavbar' >
        <MobileMenu />
        </div>  
            <div className='navbar'>
                {/*  Navbar left  */}
                <div className='nav-left'> 
                <Link to='/' className='logo' > 
               Coffee Store
                </Link>

                <Link to='/' className='shop-link'>
                   <span> Shop </span>
                </Link>
                </div>
                {/*  Navbar left  */}
               <div className='nav-right'>
                <SearchField >
                        <div className='search-box' >
                            <input  
                                className='text'
                                type='search' 
                                placeholder='Search...'>
                            </input>
                    
                            <button 
                                className='btn'
                                type='submit'>
                                <SearchIcon />
                            </button>
                        </div>
                </SearchField>
                {/*  Navbar right  */}
                <Link to='/users/login'>
                    <button
                    type='button'
                    className='login'>
                        Login
                    </button>
                </Link>

                    <div className='cart'>
                    <Link to='/cart'>
                    <span className="icon"><ShoppingCartIcon /> </span>
                    <span className="count">{count}</span> 
                    </Link>
                    </div>
                    </div> 
                </div>  
                {/*  Navbar right  */}  
        </nav>
    </NavBar>
    );
}}
    </ProductConsumer>
        )
    }
}


const NavBar = styled.div `
   .navbar {
        padding: 20px;
        max-width: 100%;
        background-color: white;
        font-size: 1.2em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    .nav-right {
        display: flex;
        justify-content: flex-end;
        justify-content: space-evenly;
        align-items: center;
        
    }
    .logo {
        font-family: Yeseva One;
        text-decoration: none;
        font-size: 2em;
        color: #2D2D2D;
    }
   
    .shop-link {
        text-decoration: none;
        margin-left: 70px;
        margin-bottom: 5px;
        color: #2D2D2D;
        &:hover {
            border-top: 2px solid #2D2D2D;
            border-bottom: 2px solid #2D2D2D;
            transition: .3s;
            padding: 3px 0 3px 0;
        }
    }

    .cart .icon {
       color: #2D2D2D;
    }
    .count {
        font-size: 12px;
        font-weight: bold;
        background: #2D2D2D;
        color: #fff;
        padding: 0 5px;
        vertical-align: top;
        position: absolute;
        border-radius: 50%;
        margin-top: -10px;
    }

    .login {
        border: 2px solid #2D2D2D;
        background: white;
        padding: 8px 15px;
        border-radius: 20px;
        outline: none;
        font-size: 13px;
        margin: 0 20px;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
    .MobileNavbar {
        display: none;
    }

    
    @media (max-width: 800px) {
       .MobileNavbar {
        display: flex;
        }
        .navbar {
            display: none;
        }
    }
`

const SearchField = styled.div `
.search-box {
    display: flex;
    border-radius: 40px;
    padding: 0 10px;
    background-color: white;
    color: #2D2D2D;
    float: left;
    width: 250px;
    border: 2px solid #2D2D2D;
    -webkit-appearance: none;
    -moz-appearance: none;

   }

.btn {
    float: right;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;

}
.btn:focus {
    outline: none;
}
.text {
    border: none;
    background: transparent;
    outline: none;
    float: left;
    padding: 0;
    color: #2D2D2D;
    font-size: 15px;
    line-height: 40px;
    width: 230px;
    -webkit-appearance: none;
}
`