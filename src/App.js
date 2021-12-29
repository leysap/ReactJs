import NavBar from "./components/NavBar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart.jsx";
import CartContextProvider from "./components/Context/CartContext.js";
import Dashboard from "./components/Dashboard.jsx";
import Form from "./components/Form.jsx";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer titulo="PRODUCTOS"/>}> </Route>
            <Route path="category/:categoryId" element={<ItemListContainer />}> </Route>
            <Route path="item/:id" element={<ItemDetailContainer />}>  </Route>
            <Route path="cart" element={ <Cart />}> </Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
