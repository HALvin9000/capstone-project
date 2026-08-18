import Navbar from "../components/Navbar";

function TODO({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

        <p>
          *Most things right now are WIP hardcoded implementations to build structure without much styling or reusable/clean code.<br />
          *Set up the css margins universally on html tag
          *fix footer so its always bottom
          *make cards work and connect to mongoDB
        </p>

        <footer>
          <p>Trademark of QuickRental Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default TODO;