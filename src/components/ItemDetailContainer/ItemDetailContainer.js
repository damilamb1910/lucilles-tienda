
import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"



const ItemDetailContainer=()=>{
    const [producto,setProducto]=useState({})
    
const {id}=useParams()

    
    useEffect(()=>{
        const productCollection=collection(db,'productList')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setProducto(
                {
                    id:res.id, ...res.data()
                }
            )
        })
       },[id])
    return(
        <>
        
    <ItemDetail producto={producto}/>
    
        
        </>
    )
}

export default ItemDetailContainer