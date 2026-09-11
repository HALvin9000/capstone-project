import Card from "../components/Card"

function Product({addToCart}) {
    return (
        <div className="default">

            <h1>Product Page</h1>

            <Card addToCart={addToCart} />

            <footer>
                <p>Trademark of QuickRental Corp.</p>
            </footer>
        </div>
    )
}

export default Product