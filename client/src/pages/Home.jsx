import Navbar from "../components/Navbar";

function Home({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

        <h1>Home Page</h1>

        <p className="home-text">
          *Fix the Login button bug. It should be deleted across navbar, app.js but its still lingering??<br />
          *Fix the navbar color being stuck on cyan despite navbar.css setting it to slategray.
          *Maybe move this to an exclusive bug/TODO page to the navbar to not pollute the home page.
          *Most things right now are WIP hardcoded implementations to build structure without much styling or reusable/clean code.
        </p>

        <footer>
          <p>Trademark of QuickStart Hardware Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;