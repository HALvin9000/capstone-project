import {useState} from "react"
import axios from "axios"
import "./ChatWidget.css"

function ChatWidget() {
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
    const [messages, setMessages] = useState([
        {text: "Hi! How can I help?", user: false}
    ])

    async function send() {
        if (text.trim() === "") return

        const userMessage = text

        setMessages((currentMessages) => [
            ...currentMessages,
            {
                text: userMessage,
                user: true
            }
        ])

        setText("")

        try {
            const API_URL = process.env.REACT_APP_API_URL;
//            const response = await axios.post(
//                "http://localhost:4000/chat",
//                {
//                    message: userMessage
//                }
//            )

            const response = await axios.post(
                `${API_URL}/chat`,
                {
                    message: userMessage
                }
            )

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    text: response.data.message,
                    user: false
                }
            ])

        } catch (error) {
            console.error("Chat error:", error)

            setMessages((currentMessages) => [
                ...currentMessages,
                {
                    text: "Sorry, I couldn't connect to the AI.",
                    user: false
                }
            ])
        }
    }

    return (
        <>
            <button
                className={`chat-tab ${open ? "open" : ""}`}
                onClick={() => setOpen(true)}
            >
                Help
            </button>

            <div className={`chat-panel ${open ? "open" : ""}`}>
                <div className="chat-header">
                    AI Assistant

                    <button
                        className="chat-close"
                        onClick={() => setOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map((message, i) => (
                        <div
                            key={i}
                            className={`chat-message ${
                                message.user ? "user" : ""
                            }`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>

                <div className="chat-input-container">
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && send()
                        }
                        placeholder="Type a message..."
                    />

                    <button onClick={send}>
                        ➤
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChatWidget