import express from "express"
import orders from "../models/orders.js"
import products from "../models/products.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const data = await orders
            .find({ userId: req.query.userId })
            .populate("productId")
            .populate("userId")

        res.send(data)

    } catch (error) {
        console.error("Error getting orders:", error)

        res.status(500).send({
            message: "Error getting orders"
        })
    }
})

router.post("/", async (req, res) => {
    try {
        const product = await products.findById(req.body.productId)

        if (!product) {
            return res.status(404).send({
                message: "Product not found"
            })
        }

        if (product.stock < req.body.quantity) {
            return res.status(400).send({
                message: "Not enough stock"
            })
        }

        product.stock -= req.body.quantity
        await product.save()

        const expiresAt = new Date()
        expiresAt.setMonth(expiresAt.getMonth() + 1)

        const order = await orders.create({
            productId: req.body.productId,
            userId: req.body.userId,
            quantity: req.body.quantity,
            expiresAt: expiresAt
        })

        res.send(order)

    } catch (error) {
        console.error("Error creating order:", error)

        res.status(500).send({
            message: "Error creating order"
        })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const order = await orders.findById(req.params.id)

        if (!order) {
            return res.status(404).send({
                message: "Order not found"
            })
        }

        const product = await products.findById(order.productId)

        if (product) {
            product.stock += order.quantity
            await product.save()
        }

        await orders.findByIdAndDelete(req.params.id)

        res.send({
            message: "Order removed"
        })

    } catch (error) {
        console.error("Error removing order:", error)

        res.status(500).send({
            message: "Error removing order"
        })
    }
})

export default router