import {useEffect, useState} from "react"
import axios from "axios"
import "./Card.css"

function Card() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function getCards() {
            let response = await axios.get("http://localhost:4000/cards/")
            setCards(response.data)
        }

        getCards()
    }, [])

    async function rentCard(card) {
        try {
            await axios.post("http://localhost:4000/orders/", {
                cardId: card._id
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

                    <button onClick={() => rentCard(card)}>
                        Rent
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Card