const ItemCompra=({prod})=>{
    
    return(
        <>
        
        <h5>Producto: {prod.item.nombre}</h5>
        <h6>Cantidad: {prod.quantity}</h6>
        <h6>Precio unitario: ${prod.item.precio}</h6>
        </>
        
    )
}


export default ItemCompra