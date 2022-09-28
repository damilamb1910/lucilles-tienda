import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail=({producto})=>{

  const [irCarrito,setIrCarrito]=useState(false)
    const onAdd=(cantidad)=>{
      setIrCarrito(true)
      console.log(`compraste ${cantidad} cantidad`)
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
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        <Card.Text>
            STOCK DISPONIBLE: {producto.stock}
            
        </Card.Text>
        {
          irCarrito ? <Link to="/cart">terminar compra</Link>  : <ItemCount stock={producto.stock} onAdd={onAdd}/> 
        }
        
      </Card.Body>
      
</Card>


</div>
        
        </>
        
    )
}

export default ItemDetail