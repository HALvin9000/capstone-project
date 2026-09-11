import {useState} from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import TODO from "./pages/TODO";
import MyCart from "./pages/MyCart";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item._id !== id)
    );
  };

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "product" && (
        <Product setPage={setPage} addToCart={addToCart} />
      )}
      {page === "TODO" && <TODO setPage={setPage} />}
      {page === "mycart" && (
        <MyCart
          setPage={setPage}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      )}
      {page === "register" && <Register setPage={setPage} />}
      {page === "signin" && <SignIn setPage={setPage} />}
    </div>
  );
}

export default App;