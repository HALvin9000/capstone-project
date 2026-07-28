import Navbar from "../components/Navbar";

function Register({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

        <h1>Register Page</h1>

        <p>Add a form linked to the database</p>

        <footer>
          <p>Trademark of QuickStart Hardware Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default Register;