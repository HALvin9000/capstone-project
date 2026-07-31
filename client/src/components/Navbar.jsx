import "./Navbar.css";

function Navbar({setPage}) {
  return (
    <nav className="navbar">
        <div>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("cardpage")}>CardPage</button>
        </div>

        <div>
            <button onClick={() => setPage("register")}>Register</button>
        </div>
    </nav>
  );
}

export default Navbar;