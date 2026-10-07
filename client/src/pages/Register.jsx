import RegisterForm from "../components/RegisterForm";

function Register({setUser, setPage}) {
  return (
    <>
      <div className="default">

        <h1>Register Page</h1>

        <RegisterForm
          setUser={setUser}
          setPage={setPage}
        />
      </div>
    </>
  );
}

export default Register