import 'bootstrap/dist/css/bootstrap.min.css';

import ItemCompra from '../ItemCompra/ItemCompra';

const ItemListCompras=({venta,ventas,fecha})=>{
/* const [ventaFiltrada,setVentaFiltrada]=useState([])
setVentaFiltrada(venta.item)
console.log(ventaFiltrada) */
//const date=new Date((ventas.fecha.seconds)*1000)
  // console.log(date)
  


    return(
   <>
   <div><h3>Compra realizada el dia:{ventas.fecha.seconds}</h3>
 {venta.map((prod,i) =>  <ItemCompra key={i} ventas={ventas} prod={prod}></ItemCompra>) } 
 <h5>Total: ${ventas.total}</h5></div> 

 
   </>
      


    
    )
}


     
      

export default ItemListCompras