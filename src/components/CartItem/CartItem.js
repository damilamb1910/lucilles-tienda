import { Button } from 'react-bootstrap';
import './CartItem.css'


const CartItem=({item,removeItem})=>{
    return(
        <div className='item__carro' key={item.item.id}>
        <h4  >{item.item.nombre}</h4>
        <h5>Precio por unidad:{item.item.precio}</h5>
        <h6>Cantidad:{item.quantity}</h6>
        <p>Subtotal:{item.quantity * item.item.precio}</p>
        <Button onClick={()=>removeItem(item)} > Quitar</Button>
        </div>
    )
}

export default CartItem