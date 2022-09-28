import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./CartWidget.css";
import { Link } from "react-router-dom";

const CartWidget= ()=>{
    return(
        <Link to='/cart'>
        <ShoppingCartIcon id="menu" className="logo__carrito" color="primary" fontSize="large"/>
        </Link>

    )
    
}

export default CartWidget