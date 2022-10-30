import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import { Link } from "react-router-dom";
import { Context } from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget= ()=>{
    const{productosTotal,cart}=useContext(Context)
    
    return(
        <Link className="shopIcon" to='/cart'>
            
            <span className="numero">{productosTotal()||''}</span>
        <ShoppingCartIcon id="menu" className="logo__carrito" color="primary" fontSize="large"/>
            {localStorage.setItem('carro',JSON.stringify(cart))}
            
        </Link>

    )
    
}

export default CartWidget