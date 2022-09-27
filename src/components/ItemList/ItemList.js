
import Item from "../Item/Item"
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


const ItemList=({listProductos})=>{
    
    return(
        <>
      <CardGroup>

{listProductos.map((prod, i)=> 

<Link key={`${prod.nombre}-${i}`} to={`/detail/${prod.id}`}>
<Item key={`${prod.nombre}-${i}`} producto={prod} /></Link>)}

      
      </CardGroup>
        
        
        
        </>
        
    )
    
}

export default ItemList