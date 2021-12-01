// import './App.css';
import NavBar from "./components/NavBar/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ItemListContainer from "./components/ItemListContainer";
import Carrusel from "./components/Carrusel.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carrusel />
      <ItemListContainer greeting="Bienvenidos a nuestro sitio web" mensaje="Conocé todo lo nuevo de la temporada Verano 2022" />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
