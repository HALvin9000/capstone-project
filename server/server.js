import express from 'express'
import cors from 'cors'
import connectToDB from './dbConnection.js'
import usersRouter from './routers/usersRouter.js'

const server = express()
server.use(cors())
server.use(express.json())

connectToDB()

server.use("/users", usersRouter)

server.get("/", (req, res) => {
    res.send("This is the server")
})

server.listen(4000, () => {
    console.log("Server is running on port 4000")
})