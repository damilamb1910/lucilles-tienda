import React from "react";
import logo from "../../assets/logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Nav from "../Nav/Nav";

const NavBar=()=>{

    const categorias=[
        {id:0,nombre:'Categoria1'},
        {id:1,nombre:'Categoria2'},
        {id:2,nombre:'Categoria3'}
    ]

        return(
            <header>
            <a href=""><img className="logo" src={logo} alt="" /></a>
            <Nav categorias={categorias}/>
            <MenuIcon className="logo__menu" color="primary" fontSize="large" />
            <CartWidget/>
            </header>
        
    )
}



export default NavBar