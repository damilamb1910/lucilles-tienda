import React from "react";
import './Nav.css'

const Nav=({categorias})=>{
    return(
        <nav>
                
                <ul className="nav__items">
                    {categorias.map((categoria)=>{
                        return <li key={categoria.id}><a className="item__nav" href="">{categoria.nombre}</a></li>
                    })}
                    
                </ul>
            </nav>
    )
}

export default Nav