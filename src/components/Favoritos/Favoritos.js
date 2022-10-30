import React from 'react';

import FavListContainer from '../FavListContainer/FavListContainer';
import { Context } from '../../context/CartContext';
import { useContext } from 'react';



const Favoritos =()=> {
const{listFav,removeFav}=useContext(Context)


    return (
        <div className='centrado'>
           { listFav.length===0 ? <h4>No tenes favoritos</h4>  :listFav.map((prod,i)=>< FavListContainer removeFav={removeFav}  key={i} id={prod.id} /> )  }  
                                    
        </div>
    );
}

export default Favoritos;