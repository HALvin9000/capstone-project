import axios from 'axios'

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
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="fname" />
            </div>

            <div>
                <label>Last Name:</label>
                <input type="text" name="lname" />
            </div>

            <div>
                <label>Username:</label>
                <input type="text" name="uname" />
            </div>

            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" />
            </div>

            <div>
                <label>Age:</label>
                <input type="number" name="age" min="0" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default RegisterForm