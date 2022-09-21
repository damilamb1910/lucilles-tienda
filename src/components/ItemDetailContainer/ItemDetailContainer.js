import { customFetch } from "../../utils/customFetch"
import { useEffect,useState } from "react"
import { productos } from "../../assets/productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from 'react-bootstrap/Spinner';



const ItemDetailContainer=()=>{
    const [producto,setListProductos]=useState([])
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
        {
        loading ?
        <Spinner animation="border" variant="primary" />
    :
    <ItemDetail producto={producto}/>
    }
        
        </>
    )
}

export default ItemDetailContainer