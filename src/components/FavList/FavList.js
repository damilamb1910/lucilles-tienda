import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FavList.css' 


const FavList=({favorito,removeFav})=> {
   



    return (
        <>
           <div className='fav__container'>
            <div>
            <img className='img__favList' src={favorito.img} alt="" />
            </div>

<div>
    <h4>{favorito.nombre}</h4>
    <p>{favorito.subtitulo}</p>
    <h3>${favorito.precio}</h3>
    <Button onClick={()=>removeFav(favorito)}>Eliminar</Button> <Link  to={`/detail/${favorito.id}`} ><Button>Ver detalle</Button></Link>
</div>
           </div>
        </>
    );
}

export default FavList;