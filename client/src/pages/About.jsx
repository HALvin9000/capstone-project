import Navbar from "../components/Navbar";

function About({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

        <h1>About Page</h1>

        <footer>
          <p>Trademark of QuickStart Hardware Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default About;