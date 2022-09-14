
import Item from "../Item/Item"
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemList=({listProductos})=>{
    
    return(
        <>
      <CardGroup>
      {listProductos.map((prod, i)=> <Item key={`${prod.nombre}-${i}`} producto={prod}/>)}
      </CardGroup>
        
        
        
        </>
        
    )
    
}

export default ItemList