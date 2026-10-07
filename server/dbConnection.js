import mongoose from 'mongoose'

async function connectToDB() {
    // Change back to the non-local MONGODB_URI when deploying
    await mongoose.connect(process.env.MONGODB_URI_LOCAL)
    console.log("Connected to DB")
}

export default connectToDB