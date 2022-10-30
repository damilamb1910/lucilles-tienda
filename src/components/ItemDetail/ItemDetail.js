import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/CartContext';




const ItemDetail=({producto})=>{

  const {añadir,sumar}=useContext(Context);
  

  const [irCarrito,setIrCarrito]=useState(false)
const add=()=>{
  sumar(producto.id)
}

    const onAdd=(cantidad)=>{
      setIrCarrito(true)
      añadir(producto,cantidad)
      
      
    }
    return(
        
        
        <>
<div className='itemDetail'>
   <div className='item__img__contain'>
   <img className='img__detail' src={producto.img} alt="" />
   <h3>{producto.subtitulo}</h3>
   <p>{producto.descripcion}</p>
   
   </div>
        
        

<Card className="text-center">
      <Card.Header>{producto.categoria}</Card.Header>
      <Card.Body className='centrar'>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        
        <Card.Text>
            STOCK DISPONIBLE: {producto.stock}
            
        </Card.Text>
       
        {
          irCarrito ? <Link to="/cart"><Button>Terminar compra</Button> </Link>  : <ItemCount stock={producto.stock} add={add} onAdd={onAdd}/> 
        }
        
      </Card.Body>
      
</Card>


</div>
        
        </>
        
    )
}

export default ItemDetail