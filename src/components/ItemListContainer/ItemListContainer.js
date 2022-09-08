import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

const ItemListContainer=({greeting})=>{
const onAdd=(contador)=>{
    console.log(contador)
}


    return(<>
    <h1>{greeting}</h1>
    <ItemCount stock={10} inicial={1} funcion={onAdd}/>
    </>
        
    )
}

export default ItemListContainer