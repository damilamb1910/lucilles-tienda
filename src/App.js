import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';
import MisCompras from './components/MisCompras/MisCompras';
import Login from './components/Login/Login';
import Favoritos from './components/Favoritos/Favoritos';



const App=()=> {

  return (
    <>
    <CartContext>
    <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/miscompras' element={<MisCompras/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/favoritos' element={<Favoritos/>}/>
        </Routes>
    </CartContext>
      
        
      
    </>
  );
}

export default App;
