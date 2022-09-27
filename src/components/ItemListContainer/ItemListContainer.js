
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import "../../assets/productos"
import { useState,useEffect } from "react"
import  customFetch  from "../../utils/customFetch"
import  productos  from "../../assets/productos"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"


const ItemListContainer=({greeting})=>{
const [listProductos,setListProductos]=useState([])
const [loading,setLoading]=useState(true)
const {categoriaId}=useParams()
useEffect(()=>{
 customFetch(productos)
 .then(res=>{
    
    if(categoriaId){
        setLoading(false)
    setListProductos(res.filter(prod=>prod.categoria===categoriaId))
    }else{
    setLoading(false)
    setListProductos(res)
    }
})
},[categoriaId])





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