import Form from "../components/Form";

function Register({}) {
  return (
    <>
      <div className="default">

        <h1>Register Page</h1>

        <p>Add a form linked to the database<br /><br />
          *consider erasing Register page and placing the option in the Sign In page like some websites do</p>

        <Form /> 

        <footer>
          <p>Trademark of QuickRental Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default Register;