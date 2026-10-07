import mongoose from 'mongoose'

async function connectToDB() {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to DB")
}

export default connectToDB