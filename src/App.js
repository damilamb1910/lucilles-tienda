import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes,Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartContext from './context/CartContext';
import ItemListComprasContainer from './components/ItemListComprasContainer/ItemListComprasContainer';

const App=()=> {
  return (
    <>
    <CartContext>
    <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
          <Route path='/miscompras' element={<ItemListComprasContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </CartContext>
      
        
      
    </>
  );
}

export default App;
