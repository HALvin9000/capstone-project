import express from 'express'
import users from '../models/users.js'

const router = express.Router()

router.get("/", async (req, res)=> {
    const data = await users.find()
    res.send(data)
})

router.post("/", async (req, res)=> {
    const user = await users.create(req.body)
    res.send(user)
})

export default router;