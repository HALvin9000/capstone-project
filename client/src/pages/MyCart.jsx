import {useEffect, useState} from "react"
import axios from "axios"
import "./../components/ProductCard.css"

function MyCart({user}) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        async function getOrders() {
            if (!user) {
                return
            }

            try {
                const response = await axios.get(
                    `http://localhost:4000/orders/?userId=${user._id}`
                )

                setOrders(response.data)
            } catch (error) {
                console.error("Error loading orders:", error)
            }
        }

        getOrders()
    }, [user])

    async function removeOrder(id) {
        try {
            await axios.delete(`http://localhost:4000/orders/${id}`)

            setOrders((currentOrders) =>
                currentOrders.filter((order) => order._id !== id)
            )
        } catch (error) {
            console.error("Error removing order:", error)
        }
    }

    return (
        <div className="default">

            <h1>My Cart</h1>

            {orders.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="product-container">
                    {orders.map((order) => (
                        <div
                            className="product card shadow-sm"
                            key={order._id}
                        >
                            <img
                                src={order.productId.image}
                                className="card-img-top"
                                alt={order.productId.title}
                            />

                            <div className="card-body d-flex flex-column">

                                <h2 className="card-title">
                                    {order.productId.title}
                                </h2>

                                <p className="card-text">
                                    {order.productId.description}
                                </p>

                                <p>
                                    Rented: {order.quantity}
                                </p>

                                <p>
                                    Price: $
                                    {order.productId.price.toFixed(2)}
                                </p>

                                <p className="total-price">
                                    Total: $
                                    {(
                                        order.productId.price *
                                        order.quantity
                                    ).toFixed(2)}
                                </p>

                                <div className="expiration">
                                    Expires:{" "}
                                    {new Date(
                                        order.expiresAt
                                    ).toLocaleDateString()}
                                </div>

                                <button
                                    className="btn btn-danger mt-auto"
                                    onClick={() =>
                                        removeOrder(order._id)
                                    }
                                >
                                    Remove
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MyCart