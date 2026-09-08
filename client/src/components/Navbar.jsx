import "./Navbar.css";

function Navbar({setPage}) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" onClick={() => setPage("home")}>Home</a>
        <a href="#about" onClick={() => setPage("about")}>About</a>
        <a href="#product" onClick={() => setPage("product")}>Product</a>
      </div>

      <div className="nav-right">
        <a href="#TODO" onClick={() => setPage("TODO")}>TODO</a>
        <a href="#mycart" onClick={() => setPage("mycart")}>My Cart</a>
        <a href="#register" onClick={() => setPage("register")}>Register</a>
        <a href="#signin" onClick={() => setPage("signin")}>Sign In</a>
      </div>
    </nav>
  );
}

export default Navbar