import ProductCard from "../components/ProductCard"

function Product({user, setPage}) {
    return (
        <div className="default">

            <h1>Product Page</h1>

            <ProductCard user={user} setPage={setPage} />

            <footer>
                <p>Trademark of QuickRental Corp.</p>
            </footer>

        </div>
    )
}

export default Product