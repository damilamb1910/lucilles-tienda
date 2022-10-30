import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";


const Nav=()=>{
    return(
        <nav>
                
                <ul className="nav__items">
                        <li ><Link to={"/categoria/acondicionador"} className="item__nav" href="">Acondicionador</Link></li>
                        <li ><Link to={"/categoria/shampoo"} className="item__nav" href="">Shampoo</Link></li>
                        <li ><Link to={"/categoria/barberia"} className="item__nav" href="">Barberia</Link></li>
                        <li ><Link to={"/categoria/perfume"} className="item__nav" href="">Perfume</Link></li>
                        <li ><Link to={"/miscompras"} className="item__nav" href="">Mis compras</Link></li>
                 
                    
                </ul>
            </nav>
    )
}

export default Nav