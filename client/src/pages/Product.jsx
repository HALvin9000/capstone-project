import ProductCard from "../components/ProductCard"

function Product({user, setPage}) {
    return (
        <div className="default">

            <h1>Product Page</h1>

            <ProductCard user={user} setPage={setPage} />
        </div>
    )
}

export default Product