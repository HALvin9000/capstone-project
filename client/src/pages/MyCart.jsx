import Card from "../components/Card"

function MyCart({cart, removeFromCart}) {
    return (
        <div className="default">

            <h1>My Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <Card
                    cards={cart}
                    removeFromCart={removeFromCart}
                />
            )}

            <footer>
                <p>Trademark of QuickRental Corp.</p>
            </footer>

        </div>
    )
}

export default MyCart