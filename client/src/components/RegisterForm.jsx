import axios from 'axios'
import './RegisterForm.css'

function RegisterForm() {

    async function handleSubmit(event) {
        event.preventDefault()

        let response = await axios.post("http://localhost:4000/users/", {
            fname: event.target.fname.value,
            lname: event.target.lname.value,
            uname: event.target.uname.value,
            password: event.target.password.value,
            email: event.target.email.value,
            age: event.target.age.value
        })

        console.log(response)
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>

            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="fname" />
            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lname" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="uname" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" />
            </div>

            <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" min="0" />
            </div>

            <button type="submit">Create Account</button>

        </form>
    )
}

export default RegisterForm