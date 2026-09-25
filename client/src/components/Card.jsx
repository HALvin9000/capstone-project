import {useEffect, useState} from "react"
import axios from "axios"
import "./Card.css"

function Card({user, setPage}) {
    const [cards, setCards] = useState([])
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        async function getCards() {
            let response = await axios.get("http://localhost:4000/cards/")
            setCards(response.data)
        }

        getCards()
    }, [])

    async function rentCard(card) {
        if (!user) {
            setPage("signin")
            return
        }

        try {
            await axios.post("http://localhost:4000/orders/", {
                cardId: card._id,
                uname: user.uname,
                quantity: quantity
            })

            alert("Item rented!")
        } catch (error) {
            console.error("Error renting item:", error)
        }
    }

    return (
        <div className="card-container">
            {cards.map((card) => (
                <div className="card" key={card._id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>Stock: {card.stock}</p>
                    <p>${card.price}</p>

                    <input
                        type="number"
                        min="1"
                        max={card.stock}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />

                    <button onClick={() => rentCard(card)}>
                        Rent
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Card