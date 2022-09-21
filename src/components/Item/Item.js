import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css'

const Item=({producto})=>{
    console.log(producto)
    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img className='card__image' variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>${producto.precio}</Card.Title>
        <Card.Text>
        {producto.nombre}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
 
        </div>
       
    )
}

export default Item