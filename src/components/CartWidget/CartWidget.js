import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { Context } from '../../context/CartContext';
import { useState,useContext } from 'react';

const CartWidget= ()=>{
    const{cart}=useContext(Context)
    
    return(
        <Link className="shopIcon" to='/cart'>
            
            <span className="numero">{cart.length}</span>
        <ShoppingCartIcon id="menu" className="logo__carrito" color="primary" fontSize="large"/>
            
            
        </Link>

    )
    
}

export default CartWidget