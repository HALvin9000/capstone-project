import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    uname: String,
    password: String,
    email: String,
    age: Number
})

const users = mongoose.model("users", userSchema)

export default users