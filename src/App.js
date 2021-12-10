import NavBar from "./components/NavBar/NavBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/"> <ItemListContainer titulo="PRODUCTOS"/> </Route>
          <Route path="/category/:categoryId"> <ItemListContainer/> </Route>
          <Route path="/item/:id"> <ItemDetailContainer /> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
