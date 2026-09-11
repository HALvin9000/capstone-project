import "./../components/Card.css"

function MyCart({cart, removeFromCart}) {
    return (
        <div className="default">

            <h1>My Cart Page</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="card-container">
                    {cart.map((item) => (
                        <div className="card" key={item._id}>
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                            <p>Stock: {item.stock}</p>
                            <p>${item.price}</p>

                            <button onClick={() => removeFromCart(item._id)}>
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