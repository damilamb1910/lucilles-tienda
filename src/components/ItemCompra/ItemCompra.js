const ItemCompra=({prod})=>{
    console.log(prod)
    return(
        <>
        
        <h4>Producto: {prod.item.nombre}</h4>
        <h4>Cantidad: {prod.quantity}</h4>
        <h3>Precio unitario: ${prod.item.precio}</h3>
        </>
        
    )
}


export default ItemCompra