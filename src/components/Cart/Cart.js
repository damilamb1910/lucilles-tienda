import { Context } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CartItem from '../CartItem/CartItem';
import './Cart.css'
import FormCompra from '../FormCompra/FormCompra';
import { collection,addDoc,serverTimestamp, updateDoc,doc } from 'firebase/firestore'
import { db } from "../../firebase/firebase"
import swal from 'sweetalert'



export const Cart=()=>{

const {cart,removeItem,precioTotal,clear}=useContext(Context)

const finalizar= (nombre,apellido,email,numeroTarjeta,formaDePago)=>{
    const ventasCollection= collection(db,"ventas")
    addDoc(ventasCollection,{
        items:cart,
        fecha:serverTimestamp(),
        total:precioTotal(),
        infoUsuario:{
       usuario:`${nombre} ${apellido}`,
       email,
       forma_de_pago:formaDePago,
       numeroTarjeta}
        
        })
    .then(result=>{
        console.log(result.id)
        cart.forEach(producto=>{
            actualizarStock(producto)
        })
       const idUser=result.id
        swal({
            title: "¡Gracias por tu compra!",
            text: "Tu código de referencia es: "+idUser ,
            icon: "success",
            button: "Aceptar",
          });
        clear()
    })
    
}
const actualizarStock=(producto)=>{
    
const upStock = doc (db,"productList", producto.item.id);
console.log(upStock)
 updateDoc(upStock,{stock:(producto.item.stock - producto.quantity) })
}

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
      
       {cart.length!==0 &&  <div><p> total ${precioTotal()}</p> <Button onClick={()=>clear()}>Limpiar carro</Button><FormCompra finalizar={finalizar}/>
    </div>}
        </div>
        
        
        </>
        
    )
}

export default Cart