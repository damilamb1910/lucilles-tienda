
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import "../../assets/productos"
import { useState,useEffect } from "react"
import { customFetch } from "../../utils/customFetch"
import { productos } from "../../assets/productos"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer=({greeting})=>{
const [listProductos,setListProductos]=useState([])
const [loading,setLoading]=useState(true)

useEffect(()=>{
 customFetch(productos)
 .then(res=>{
    setLoading(false)
    setListProductos(res)
})
},[])





    return(
    <>
    <h1>{greeting}</h1>
    
    {
        loading ?
        <Spinner animation="border" variant="primary" />
    :
    <ItemList listProductos={listProductos}/>
    }
    
    </>
        
    )
}

export default ItemListContainer