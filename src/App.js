import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


const App=()=> {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"hola, binvenidos"}/>
    <ItemDetailContainer/>
    
    </>
  );
}

export default App;
