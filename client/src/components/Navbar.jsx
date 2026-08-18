import "./Navbar.css";

function Navbar({setPage}) {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("about")}>About</button>
            <button onClick={() => setPage("cardpage")}>CardPage</button>
        </div>

        <div className="nav-right">
            <button onClick={() => setPage("TODO")}>TODO</button>
            <button onClick={() => setPage("register")}>Register</button>
            <button onClick={() => setPage("signin")}>Sign In</button>
        </div>
    </nav>
  );
}

export default Navbar;