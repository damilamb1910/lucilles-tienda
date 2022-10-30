
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import "../../assets/productos"
import { useState,useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs,collection,query,where } from "firebase/firestore"



const ItemListContainer=({greeting})=>{
const [listProductos,setListProductos]=useState([])
const [loading,setLoading]=useState(true)
const {categoriaId}=useParams()


useEffect(()=>{

setLoading(true)
    const prodCollection=collection(db,'productList')

     if(categoriaId){
       
        const q=query(prodCollection,where('categoria','==',categoriaId))
        getDocs(q)
    .then(data => setListProductos(data.docs.map(product=>
         ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
    }else{
    
    getDocs(prodCollection)
    .then(data => setListProductos(data.docs.map(product=>
         ({...product.data(),id:product.id})))).finally(()=>{setLoading(false)})
    }
    },[categoriaId])
    
    
        
   
 






    return(
    <>
    <h1>{greeting}</h1>
    
    {
        loading ? <div className="centrado"> <Spinner animation="border" variant="primary" /></div>
       
    :
    <ItemList listProductos={listProductos}/>
    }
    
    </>
        
    )
}

export default ItemListContainer