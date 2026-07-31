import {useState} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import CardPage from "./pages/CardPage";
import Register from "./pages/Register";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      {page === "home" && <Home setPage={setPage} />}
      {page === "about" && <About setPage={setPage} />}
      {page === "cardpage" && <CardPage setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
    </div>
  );
}

export default App;