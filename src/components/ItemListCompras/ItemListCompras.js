import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCompra from '../ItemCompra/ItemCompra';

const ItemListCompras=({venta,ventas,fecha,loco,loca})=>{

    return(


      
   <>
   {!loco &&  <div><div><h3>Compra realizada el dia: { new Date((ventas.fecha.seconds)*1000).toLocaleDateString()}</h3>
      {venta.map((prod,i) =>  <ItemCompra key={i} ventas={ventas} prod={prod}></ItemCompra>) } 
      <h5>Total: ${ventas.total}</h5></div> </div> }
   
   </>
      
    )
}


     
      

export default ItemListCompras