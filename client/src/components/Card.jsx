import {useEffect, useState} from "react"
import axios from "axios"
import "./Card.css"

function Card({addToCart, cards: cardsProp, removeFromCart}) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (cardsProp) {
            setCards(cardsProp)
            return
        }

        async function getCards() {
            let response = await axios.get("http://localhost:4000/cards/")
            setCards(response.data)
        }

        getCards()
    }, [cardsProp])

    return (
        <div className="card-container">
            {cards.map((card) => (
                <div className="card" key={card._id}>
                    <h2>{card.title}</h2>
                    <p>{card.description}</p>
                    <p>Stock: {card.stock}</p>
                    <p>${card.price}</p>
                    
                    {addToCart && (
                        <button onClick={() => addToCart(card)}>
                            Rent
                        </button>
                    )}

                    {removeFromCart && (
                        <button onClick={() => removeFromCart(card._id)}>
                            Remove
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Card