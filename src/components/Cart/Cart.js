import { Context } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartItem from '../CartItem/CartItem';
import './Cart.css'



const Cart=()=>{
const {cart,removeItem,precioTotal,clear}=useContext(Context)



    return(
        <>
        <div className='container centrado'>
        {cart.length!==0 ?  cart.map((item)=>
       
        
       <CartItem item={item} removeItem={removeItem} key={item.item.id}/>
    
       ): <div className='texto'>
           <h6>Aún no tenés productos en el carrito 😐😐</h6>
       <Link to={"/"}>
           <Button>
           Agregar productos
           </Button>
       </Link>
       
       </div>}
      
       {cart.length!==0 &&  <div><p> total ${precioTotal()}</p> <Button onClick={()=>clear()}>Limpiar carro</Button> </div>}
        </div>
        
        
        </>
        
    )
}

export default Cart