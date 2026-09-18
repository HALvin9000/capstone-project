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
  const [user, setUser] = useState(null);

  return (
    <div>
      <Navbar
        setPage={setPage}
        user={user}
        setUser={setUser}
      />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "product" && <Product setPage={setPage} />}
      {page === "TODO" && <TODO setPage={setPage} />}
      {page === "mycart" && <MyCart setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "signin" && (
        <SignIn
          setPage={setPage}
          setUser={setUser}
        />
      )}
    </div>
  );
}

export default App;