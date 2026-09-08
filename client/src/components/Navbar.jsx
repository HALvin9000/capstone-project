import "./Navbar.css";

function Navbar({setPage}) {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <a href="Home.jsx">Home</a>
            <a href="About.jsx">About</a>
            <a href="Product.jsx">Product</a>
        </div>

        <div className="nav-right">
            <a href="TODO.jsx">TODO</a>
            <a href="Register.jsx">Register</a>
            <a href="SignIn.jsx">Sign In</a>
        </div>
    </nav>
  );
}

export default Navbar;