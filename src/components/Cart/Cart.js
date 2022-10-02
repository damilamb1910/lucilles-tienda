import { Context } from '../../context/CartContext';
import { useContext } from 'react';

import CartItem from '../CartItem/CartItem';



const Cart=()=>{
const {cart,removeItem}=useContext(Context)



    return(
        <>
        
        {cart ? cart.map((item)=>
       
        
        <CartItem item={item} removeItem={removeItem} key={item.item.id}/>
     
        ): "vacio"}
       
        
        
        </>
        
    )
}

export default Cart