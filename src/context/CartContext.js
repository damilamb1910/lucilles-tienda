import React, {createContext} from 'react'
import { useState } from 'react'


export const Context= createContext([])

const CartContext=({children}) => {
    const [cart,setCart]=useState([])

    const añadir=(item,quantity)=>{
        
        const preguntar = cart.findIndex(pro=>pro.item.id ===item.id)
        if (preguntar!== -1){
           const newCart = cart.filter(item => item !== cart[preguntar])
          setCart([{item, quantity}, ...newCart])
        }else{
            setCart([...cart,{ item, quantity }]);
        } 
  
        
        
    }
console.log('carrito:',cart);
    const removeItem =(item)=>{
        const newCart=cart.filter(itemQuitar=>itemQuitar !== item)
        setCart([...newCart])
       }
    
    const pregunta =(id)=> cart.find(product => product.id === id) ? true : false

    const clear=()=>{
        setCart([])
    }
    return(
        <>
        <Context.Provider value={{cart,añadir,pregunta,removeItem,clear}}>
        {children}
        </Context.Provider>
        
       
        </>
        
    )
}

export default CartContext
