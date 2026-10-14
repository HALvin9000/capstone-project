import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnection.js'
import usersRouter from './routers/usersRouter.js'
import productsRouter from './routers/productsRouter.js'
import ordersRouter from './routers/ordersRouter.js'
import products from './models/products.js'
import dotenv from 'dotenv'
import Anthropic from '@anthropic-ai/sdk'

const server = express()
dotenv.config()

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY
})

server.use(cors())
server.use(express.json())

connectToDB()

server.use("/users", usersRouter)
server.use("/products", productsRouter)
server.use("/orders", ordersRouter)

server.get("/", (req, res) => {
    res.send("This is the server")
})

server.post("/chat", async (req, res) => {
    try {
        const data = await products.find()

        const response = await anthropic.messages.create({
            model: "claude-sonnet-4-6",
            max_tokens: 500,
            system: `You are the QuickRental AI assistant. Answer questions about the website and products: ${JSON.stringify(data)}`,
            messages: [
                {
                    role: "user",
                    content: req.body.message
                }
            ]
        })

        res.send({
            message: response.content[0].text
        })

    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: "Sorry, I couldn't connect to the AI."
        })
    }
})

const PORT = process.env.PORT || 4000;

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});