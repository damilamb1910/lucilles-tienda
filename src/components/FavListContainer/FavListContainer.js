import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from "../../firebase/firebase"
import { getDoc,collection,doc } from "firebase/firestore"
import { Spinner } from 'react-bootstrap';
import FavList from '../FavList/FavList';

const FavListContainer=({id,removeFav})=> {
const[favorito,setFavorito]=useState([])
const[loading,setLoading]=useState(true)

    useEffect(()=>{
        setLoading(true)
        const productCollection=collection(db,'productList')
        const refDoc = doc(productCollection,id)
        getDoc(refDoc)
        .then((res)=>{
            setFavorito(
                {
                    id:res.id, ...res.data()
                }
            )
        }).finally(setLoading(false))
       },[id])
        
    return (
        <>
           
          { loading ?     <Spinner/>   :  <FavList removeFav={removeFav} favorito={favorito}/>} 
 
        </>
        
    );
}

export default FavListContainer;