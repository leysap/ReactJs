import NavBar from "./components/NavBar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carrito from "./components/Carrito"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer titulo="PRODUCTOS"/>}>  </Route>
          <Route path="category/:categoryId" element={<ItemListContainer />}> </Route>
          <Route path="item/:id" element={<ItemDetailContainer />}>  </Route>
          <Route path="cart" element={ <Carrito />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
