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

router.post("/login", async (req, res) => {
    const user = await users.findOne(req.body)

    if (!user) {
        return res.send("Invalid username or password")
    }

    res.send(user)
})

export default router;