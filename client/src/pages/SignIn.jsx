import SignInForm from "../components/SignInForm";

function SignIn({setUser, setPage}) {
  return (
    <div className="default">

      <h1>Sign In Page</h1>

      <SignInForm setUser={setUser} setPage={setPage} />

      <footer>
        <p>Trademark of QuickRental Corp.</p>
      </footer>
    </div>
  );
}

export default SignIn