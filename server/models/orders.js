import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    cardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cards",
        required: true
    },
    uname: {
        type: String,
        required: true
    }
})

const orders = mongoose.model("orders", orderSchema)

export default orders