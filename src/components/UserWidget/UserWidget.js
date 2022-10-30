import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import './UserWidget.css'
import { useEffect, useState } from 'react';


const UserWidget=({img})=> {
  const [imgProfile,setImgProfile]=useState('')

  useEffect(()=>{
setImgProfile(img)

  },[img])



    return (
        <>
        <Link to={'/login'} className="shopIcon">
       
      { img==='' ? <AccountCircleIcon id="menu" className="logo__carrito" color="primary" fontSize="large"  /> : <> <img className='profile__photo' alt='hols' src={imgProfile} />{localStorage.setItem('photo',imgProfile)}</> }
         

        </Link>
        </>
    );
}

export default UserWidget;