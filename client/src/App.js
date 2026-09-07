import {useState} from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import CardPage from "./pages/CardPage";
import TODO from "./pages/TODO";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "cardpage" && <CardPage setPage={setPage} />}
      {page === "TODO" && <TODO setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "signin" && <SignIn setPage={setPage} />}
    </div>
  );
}

export default App;