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

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user")
    return savedUser ? JSON.parse(savedUser) : null
  });

  function handleSetUser(user) {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  return (
    <div>
      <Navbar
        setPage={setPage}
        user={user}
        setUser={handleSetUser}
      />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "product" && <Product setPage={setPage} user={user} />}
      {page === "TODO" && <TODO setPage={setPage} />}
      {page === "mycart" && <MyCart setPage={setPage} user={user} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "signin" && (
        <SignIn
          setPage={setPage}
          setUser={handleSetUser}
        />
      )}
    </div>
  );
}

export default App;