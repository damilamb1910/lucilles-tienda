import customFetch  from "../../utils/customFetch"
import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import productos from "../../assets/productos";



const ItemDetailContainer=()=>{
    const [producto,setProducto]=useState({})
    
const {id}=useParams()

    
    useEffect(()=>{
        customFetch(productos,100,parseInt(id)).then((res)=>setProducto(res))
       
       },[id])
    return(
        <>
        
    <ItemDetail producto={producto}/>
    
        
        </>
    )
}

export default ItemDetailContainer