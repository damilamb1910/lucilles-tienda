import { useState } from "react"
import "./ItemCount.css"
import { Button } from "react-bootstrap"


const ItemCount=({stock,onAdd})=>{



    const agregarCarrito=()=>{
        
        if(contador<=stock && contador >=1){
            
        
            onAdd(contador)
            setContador(1)
        }
            
     
        
    }




    
    const[contador,setContador]=useState(1)
    const sumar=()=>{
        if(stock>contador){
    setContador(contador + 1)
        }
}


    
    const restar=()=>{
        if(contador>1){
            setContador(contador - 1)
        }
        
    }
    return(
        <>
        <div className="contenedorItemCount">

<div className="contenedorSumarRestar">
<Button className="btn" onClick={restar}>-</Button>
<h5>{contador}</h5>
<Button className="btn" onClick={sumar}>+</Button>

</div>
<button className="btnAdd" onClick={agregarCarrito}>Agregar al carrito</button>

        </div>

        </>
        
    )
}

export default ItemCount