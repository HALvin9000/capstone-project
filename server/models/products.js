import mongoose from "mongoose"

const productSchema = mongoose.Schema({
    title: String,
    description: String,
    stock: Number,
    price: Number,
    image: String
})

const products = mongoose.model("products", productSchema)

export default products