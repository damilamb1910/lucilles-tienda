import { useState } from "react"
import "./ItemCount.css"
import { Button } from "react-bootstrap"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ItemCount=({stock,onAdd,add})=>{

    const[fav,setFav]=useState(false)

const alternarFav=()=>{
    if(fav===false){
        setFav(true)
        add()
    }else{
        setFav(false)
    }
}


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
<button className="btnAdd" onClick={alternarFav}>{ fav ?<FavoriteIcon/>  :<FavoriteBorderIcon/> }     </button>


        </div>

        </>
        
    )
}

export default ItemCount