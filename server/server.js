import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import Anthropic from '@anthropic-ai/sdk'

import connectToDB from './dbConnection.js'
import usersRouter from './routers/usersRouter.js'
import productsRouter from './routers/productsRouter.js'
import ordersRouter from './routers/ordersRouter.js'
import products from './models/products.js'

dotenv.config()

const server = express()

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_API_KEY
})

// Allowed frontend origins
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://capstone-new-frontend.onrender.com'
]

// Middleware
server.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}))

server.use(express.json())

// API routes
server.use('/users', usersRouter)
server.use('/products', productsRouter)
server.use('/orders', ordersRouter)

// Basic health check
server.get('/', (req, res) => {
    res.send('This is the server')
})

// AI chat endpoint
server.post('/chat', async (req, res) => {
    try {
        const data = await products.find()

        const response = await anthropic.messages.create({
            model: 'claude-sonnet-4-6',
            max_tokens: 500,
            system: `You are the QuickRental AI assistant. Answer questions about the website and products: ${JSON.stringify(data)}`,
            messages: [
                {
                    role: 'user',
                    content: req.body.message
                }
            ]
        })

        res.send({
            message: response.content[0].text
        })
    } catch (error) {
        console.error('Chat error:', error.message)

        res.status(500).send({
            message: "Sorry, I couldn't connect to the AI."
        })
    }
})

// Connect to MongoDB before starting the server
const PORT = process.env.PORT || 4000

async function startServer() {
    try {
        await connectToDB()

        server.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.error(
            'Server startup aborted because MongoDB is unavailable.'
        )
        process.exit(1)
    }
}

startServer()