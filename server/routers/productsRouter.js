import express from 'express'
import products from '../models/products.js'

const router = express.Router()

router.get("/", async (req, res)=> {
    const data = await products.find()
    res.send(data)
})

router.post("/", async (req, res)=> {
    const product = await products.create(req.body)
    res.send(product)
})

export default router;