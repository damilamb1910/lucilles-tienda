import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const FavWidget=()=> {
    return (
        <>
        <Link to={'/favoritos'} className="shopIcon">
        
        <FavoriteIcon id="menu" className="logo__carrito" color="primary" fontSize="large"  />
        
        </Link>
        </>
    );
}

export default FavWidget;