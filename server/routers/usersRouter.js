import express from 'express'
import users from '../models/users.js'

const router = express.Router()

router.get("/", async (req, res) => {
    const data = await users.find()
    res.send(data)
})

router.post("/", async (req, res) => {
    try {
        const user = await users.create(req.body)
        res.send(user)
    } catch (error) {
        console.error("Error creating user:", error)

        res.status(400).send({
            message: "Could not create account"
        })
    }
})

router.post("/login", async (req, res) => {
    try {
        const { uname, password } = req.body

        if (!uname || !password) {
            return res.status(400).send({
                message: "Username and password are required"
            })
        }

        const user = await users.findOne({ uname: uname })

        if (!user) {
            return res.status(401).send({
                message: "Invalid username or password"
            })
        }

        if (user.password !== password) {
            return res.status(401).send({
                message: "Invalid username or password"
            })
        }

        res.send(user)

    } catch (error) {
        console.error("Login error:", error)

        res.status(500).send({
            message: "Server error during login"
        })
    }
})

export default router