import express from 'express'
import cards from '../models/cards.js'

const router = express.Router()

router.get("/", async (req, res)=> {
    const data = await cards.find()
    res.send(data)
})

router.post("/", async (req, res)=> {
    const card = await cards.create(req.body)
    res.send(card)
})

export default router;