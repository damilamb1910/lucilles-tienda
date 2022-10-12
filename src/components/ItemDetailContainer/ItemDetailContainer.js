
import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer=()=>{
    const [loading,setLoading]=useState(true)
    const [producto,setProducto]=useState({})
    
const {id}=useParams()

    
    useEffect(()=>{
        setLoading(true)
        const productCollection=collection(db,'productList')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto(
                {
                    id:res.id, ...res.data()
                }
            )
        }).finally(setLoading(false))
       },[id])
    return(
        <>
         {
        loading ? <div className="centrado"> <Spinner animation="border" variant="primary" /></div>
       
    :
    <ItemDetail producto={producto}/>
         }
        
        </>
    )
}

export default ItemDetailContainer