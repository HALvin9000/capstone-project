import axios from 'axios'
import './SignInForm.css'

function SignInForm() {

    async function handleSubmit(event) {
        event.preventDefault()

        let response = await axios.post("http://localhost:4000/users/", {
            uname: event.target.uname.value,
            password: event.target.password.value,
        })

        console.log(response)
    }

    return (
        <form className="signin-form" onSubmit={handleSubmit}>

            <div className="form-group">
                <label>Username:</label>
                <input type="text" name="uname" required />
            </div>

            <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" required />
            </div>

            <button type="submit">Sign In</button>

        </form>
    )
}

export default SignInForm