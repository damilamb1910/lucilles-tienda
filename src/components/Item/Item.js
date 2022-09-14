import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Item=({producto})=>{
    console.log(producto)
    return(
        <div>
            <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
        ${producto.precio}
        </Card.Text>
        <Button variant="primary">Ver detalle</Button>
      </Card.Body>
    </Card>
 
        </div>
       
    )
}

export default Item