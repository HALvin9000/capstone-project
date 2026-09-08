import { useEffect, useState } from "react"
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

    return (
        <div className="card-container">
            {cards.map((card) => (
                <div className="card" key={card._id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>Stock: {card.stock}</p>
                    <p>${card.price}</p>
                    <button>Rent</button>
                </div>
            ))}
        </div>
    )
}

export default Card