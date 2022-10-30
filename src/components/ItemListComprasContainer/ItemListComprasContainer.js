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
const [loco,setLoco]=useState(false)
const [loca,setLoca]=useState(false)

    useEffect(()=>{
       
        setLoading(true)
        setLoco(false)
            const ventasCollection=collection(db,'ventas')
            const refDoc=doc(ventasCollection,idCompra)
            getDoc(refDoc)
            .then((data)=>{
                if(data){
                    
                    setVenta((data.data()).items)
                    setVentas(data.data())
                }
            })
            
            .catch(function(error){
               const errores=error.message
               if(errores==="Cannot read properties of undefined (reading 'items')"){
                
                setLoco(true)
                swal({
                    title: "ERROR",
                    text: "Ingrese un ID válido.",
                    icon: "error",
                    button: "OK",
                    timer:3000
                  })
               }else{
                setLoca(false)
               }
               
               
                
            })
            
            .finally(()=>{setLoading(false)})
                    
                
            },[idCompra])
            
            return(
                <>
                {loading && !ventas && <div className="centrado"><Spinner/></div>}
                {ventas && !loading && <ItemListCompras loco={loco} ventas={ventas} loca={loca} venta={venta}></ItemListCompras> }
                </>
            )         
}

export default ItemListComprasContainer