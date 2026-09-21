import Card from "../components/Card"

function Product({user, setPage}) {
    return (
        <div className="default">

            <h1>Product Page</h1>

            <Card user={user} setPage={setPage} />

            <footer>
                <p>Trademark of QuickRental Corp.</p>
            </footer>
        </div>
    )
}

export default Product