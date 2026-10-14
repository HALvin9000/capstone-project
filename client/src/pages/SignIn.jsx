import SignInForm from "../components/SignInForm";

function SignIn({setUser, setPage}) {
  return (
    <div className="default">

      <h1>Sign In Page</h1>

      <SignInForm setUser={setUser} setPage={setPage} />
    </div>
  );
}

export default SignIn