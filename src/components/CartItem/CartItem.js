import { Button } from 'react-bootstrap';


const CartItem=({item,removeItem})=>{
    return(
        <div key={item.item.id}>
        <h1  >{item.item.nombre}</h1>
        <Button onClick={()=>removeItem(item)} > Quitar</Button>
        </div>
    )
}

export default CartItem