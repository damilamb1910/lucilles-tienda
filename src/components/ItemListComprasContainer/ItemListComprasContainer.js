import { useState,useEffect } from "react"
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"
import ItemListCompras from "../ItemListCompras/ItemListCompras";
import swal from 'sweetalert'

const ItemListComprasContainer=({idCompra})=>{

  
    const [loading,setLoading]=useState(true)
    const [venta,setVenta]=useState([null])
    const [ventas,setVentas]=useState([null])


    useEffect(()=>{
        console.log(idCompra)
        setLoading(true)
            const ventasCollection=collection(db,'ventas')
            const refDoc=doc(ventasCollection,idCompra)
            
            

            getDoc(refDoc)

            
            .then((data)=>{setVenta((data.data()).items)

            setVentas(data.data())})
            setLoading(false)
            .catch(function(error){
                swal({
                    title: "ERROR",
                    text: "Ingrese un ID válido.",
                    icon: "error",
                    button: "OK",
                    timer:3000
                  })
                  
            })
            
            //.finally(()=>{setLoading(false)})
                    
                
            },[idCompra])
            
            return(
                <>
                {loading ? <div className="centrado"><Spinner/></div> :<ItemListCompras  ventas={ventas}  venta={venta}></ItemListCompras> }
                </>
            )         
}

export default ItemListComprasContainer