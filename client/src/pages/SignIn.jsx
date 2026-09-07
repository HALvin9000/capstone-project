import Form from "../components/Form";

function SignIn({}) {
  return (
    <>
      <div className="default">

        <h1>Sign In Page</h1>

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

export default SignIn;