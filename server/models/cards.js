import mongoose from 'mongoose'

const cardSchema = mongoose.Schema({
    title: String,
    description: String,
    stock: Number,
    price: Number
})

const cards = mongoose.model("cards", cardSchema)

export default cards