import "./Navbar.css";

function Navbar({setPage, user, setUser}) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#home" onClick={() => setPage("home")}>Home</a>
        <a href="#about" onClick={() => setPage("about")}>About</a>
        <a href="#product" onClick={() => setPage("product")}>Product</a>
      </div>

      <div className="nav-right">
        {user && <span>Welcome, {user.uname}</span>}

        <a href="#TODO" onClick={() => setPage("TODO")}>TODO</a>
        <a href="#mycart" onClick={() => setPage("mycart")}>My Cart</a>

        {/* Replaces Register/Sign In with Sign Out if logged in. */}
        {user ? (
          <button onClick={() => {
            setUser(null);
            setPage("home");
          }}>
            Sign Out
          </button>
        ) : (
          <>
            <a href="#register" onClick={() => setPage("register")}>Register</a>
            <a href="#signin" onClick={() => setPage("signin")}>Sign In</a>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar