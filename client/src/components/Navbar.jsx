import "./Navbar.css";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("about")}>About</button>
    </nav>
  );
}

export default Navbar;