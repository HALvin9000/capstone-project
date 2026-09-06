import mongoose from 'mongoose'

async function connectToDB() {
    await mongoose.connect("mongodb://localhost:27017/quickRentalDB")
    console.log("Connected to DB")
}

export default connectToDB