import express from "express"
import orders from "../models/orders.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const data = await orders
        .find({ uname: req.query.uname })
        .populate("cardId")

    res.send(data)
})

router.post("/", async (req, res) => {
    const order = await orders.create({
        cardId: req.body.cardId,
        uname: req.body.uname,
        quantity: req.body.quantity
    })

    const populatedOrder = await order.populate("cardId")
    res.send(populatedOrder)
})

router.delete("/:id", async (req, res) => {
    await orders.findByIdAndDelete(req.params.id)
    res.send({ message: "Order removed" })
})

export default router