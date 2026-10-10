import axios from 'axios'
import './SignInForm.css'

function SignInForm({setUser, setPage}) {

    async function handleSubmit(event) {
        event.preventDefault()

        try {
//            let response = await axios.post("http://localhost:4000/users/login", {
//                uname: event.target.uname.value,
//                password: event.target.password.value,
//            })
            const API_URL = process.env.REACT_APP_API_URL;

            let response = await axios.post(`${API_URL}/users/login`, {
                uname: event.target.uname.value,
                password: event.target.password.value,
            })

            console.log(response)

            setUser(response.data)
            setPage("home")

        } catch (error) {
            alert(error.response.data.message)
        }
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