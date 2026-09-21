import {useEffect, useState} from "react"
import axios from "axios"
import "./../components/Card.css"

function MyCart({user}) {
    const [orders, setOrders] = useState([])

            useEffect(() => {
                async function getOrders() {
                    if (!user) {
                        return
                    }

            const response = await axios.get(
                `http://localhost:4000/orders/?uname=${user.uname}`
            )

            setOrders(response.data)
        }

        getOrders()
    }, [user])

    async function removeOrder(id) {
        await axios.delete(`http://localhost:4000/orders/${id}`)

        setOrders((currentOrders) =>
            currentOrders.filter((order) => order._id !== id)
        )
    }

    return (
        <div className="default">

            <h1>My Cart</h1>

            {orders.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="card-container">
                    {orders.map((order) => (
                        <div className="card" key={order._id}>
                            <h2>{order.cardId.title}</h2>
                            <p>{order.cardId.description}</p>
                            <p>Stock: {order.cardId.stock}</p>
                            <p>${order.cardId.price}</p>

                            <button onClick={() => removeOrder(order._id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            <footer>
                <p>Trademark of QuickRental Corp.</p>
            </footer>

        </div>
    )
}

export default MyCart