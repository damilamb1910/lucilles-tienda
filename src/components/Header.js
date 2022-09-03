import React from "react";
import logo from "../assets/logo.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import "./Header.css"

const Header=()=>{

        return(
            <header>
            <a href=""><img className="logo" src={logo} alt="" /></a>
            <nav>
                
                <ul className="nav__items">
                    <li><a className="item__nav" href="">Nosotros</a></li>
                    <li><a className="item__nav" href="">Servicios</a></li>
                    <li><a className="item__nav" href="">Contactos</a></li>
                </ul>
            </nav>
            <MenuIcon className="logo__menu" color="primary" fontSize="large" />
            <ShoppingCartIcon id="menu" className="logo__carrito" color="primary" fontSize="large"/>
            </header>
        
    )
}



export default Header