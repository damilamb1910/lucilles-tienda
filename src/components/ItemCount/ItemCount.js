import { useState } from "react"
import "./ItemCount.css"


const ItemCount=({stock,funcion})=>{



    const agregarCarrito=()=>{
        
        if(contador<=stock && contador >=1){
            
        
            funcion(contador)
            setContador(1)
        }
            
     
        
    }




    
    const[contador,setContador]=useState(1)
    const sumar=()=>{

    setContador(contador + 1)
}


    
    const restar=()=>{
        if(contador>1){
            setContador(contador - 1)
        }
        
    }
    return(
        <>
        <div className="contenedorItemCount">
<h5>nombre de producto</h5>
<div className="contenedorSumarRestar">
<button className="btn" onClick={restar}>-</button>
<h5>{contador}</h5>
<button className="btn" onClick={sumar}>+</button>

</div>
<button className="btnAdd" onClick={agregarCarrito}>Agregar al carrito</button>

        </div>

        </>
        
    )
}

export default ItemCount