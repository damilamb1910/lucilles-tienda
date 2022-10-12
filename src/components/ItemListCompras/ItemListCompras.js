import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from "react"
import ItemCompra from '../ItemCompra/ItemCompra';

const ItemListCompras=({listCompras})=>{

    //const [listaFiltrada,setListaFiltrada]=useState({})

//useEffect( ()=> {
  //  const newList=listCompras.filter(prod=>prod.id!=="614auxeZ3WxzXeoWquwh")
  //  setListaFiltrada(newList)
    
//},[listCompras] )

    


    return(
   <>
   {listCompras.map((item,i)=> <ItemCompra key={i} item={item.items}></ItemCompra>)}
   </>
      


    
    )
}


     
      

export default ItemListCompras