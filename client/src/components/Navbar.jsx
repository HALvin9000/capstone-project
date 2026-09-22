import "./Navbar.css";

function Navbar({ setPage, user, setUser }) {
  return (
    <nav
      className="navbar sticky-top"
      style={{ backgroundColor: "slategray", padding: "10px" }}
    >
      <div className="container-fluid">

        {/* Left side */}
        <div className="d-flex gap-1">
          <a
            className="nav-link text-light"
            href="#home"
            onClick={() => setPage("home")}
          >
            Home
          </a>

          <a
            className="nav-link text-light"
            href="#about"
            onClick={() => setPage("about")}
          >
            About
          </a>

          <a
            className="nav-link text-light"
            href="#product"
            onClick={() => setPage("product")}
          >
            Product
          </a>
        </div>

        {/* Right side */}
        <div className="ms-auto d-flex align-items-center gap-1">
          <a
            className="nav-link text-light"
            href="#TODO"
            onClick={() => setPage("TODO")}
          >
            TODO
          </a>

          <a
            className="nav-link text-light"
            href="#mycart"
            onClick={() => setPage("mycart")}
          >
            My Cart
          </a>

          {user && (
            <span className="navbar-text text-light">
              Welcome, {user.uname}
            </span>
          )}

          {user ? (
            <button
              className="nav-link text-light"
              style={{ border: "none", background: "none" }}
              onClick={() => {
                setUser(null);
                setPage("home");
              }}
            >
              Sign Out
            </button>
          ) : (
            <>
              <a
                className="nav-link text-light"
                href="#register"
                onClick={() => setPage("register")}
              >
                Register
              </a>

              <a
                className="nav-link text-light"
                href="#signin"
                onClick={() => setPage("signin")}
              >
                Sign In
              </a>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar