import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail=({producto})=>{
    const prod=producto.find(elemento=>{
        return elemento.id===2
    })
    return(
        
        
        <>
<div className='itemDetail'>
   <div className='item__img__contain'>
   <img className='img__detail' src={prod.img} alt="" />
   <h3>{prod.subtitulo}</h3>
   <p>{prod.descripcion}</p>
   
   </div>
        
        

<Card className="text-center">
      <Card.Header>{prod.categoria}</Card.Header>
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          ${prod.precio}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
        <Card.Text>
            STOCK DISPONIBLE: {prod.stock}
            <ItemCount></ItemCount>
        </Card.Text>
        
      </Card.Body>
      
</Card>


</div>
        
        </>
        
    )
}

export default ItemDetail