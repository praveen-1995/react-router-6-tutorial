import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <nav>nav bar</nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
      <footer>footer</footer>
    </BrowserRouter>
  );
}

export default App;
