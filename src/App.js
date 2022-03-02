import "./App.css";
import ProductList from "./components/ProductList";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import CreateProduct from "./components/CreateProduct";
import Reports from "./components/ProductReport";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/product/create"}>Create Product</Link>
          <Link to={"/category/reports"}>Product Reports</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<ProductList />}></Route>
          <Route
            exact
            path="/product/create"
            element={<CreateProduct />}
          ></Route>
          <Route exact path="/category/reports" element={<Reports />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
