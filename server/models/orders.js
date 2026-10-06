import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    }
})

const orders = mongoose.model("orders", orderSchema)

export default orders