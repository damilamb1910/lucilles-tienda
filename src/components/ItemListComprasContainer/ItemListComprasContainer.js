import { useState,useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom"
import { db } from "../../firebase/firebase"
import { getDocs,collection } from "firebase/firestore"
import ItemListCompras from "../ItemListCompras/ItemListCompras";

const ItemListComprasContainer=()=>{

    const [listCompras,setListCompras]=useState([])
    const [loading,setLoading]=useState(true)
    const [listaFiltrada,setListaFiltrada]=useState([])

    useEffect(()=>{

        setLoading(true)
            const prodCollection=collection(db,'ventas')
        
             
            
            getDocs(prodCollection)
            .then(data => setListCompras(data.docs.map(product=>
                 ({...product.data()}))))
                 
                 .finally(()=>{setLoading(false)})
                 
            
            },[])
            
            return(
                <>
                <ItemListCompras listCompras={listCompras}></ItemListCompras>
                </>
            )         
}

export default ItemListComprasContainer