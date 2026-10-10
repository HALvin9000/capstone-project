import {useEffect, useState} from "react"
import axios from "axios"
import "./ProductCard.css"

function ProductCard({user, setPage}) {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState({})

    useEffect(() => {
        async function getProducts() {
            try {
                const API_URL = process.env.REACT_APP_API_URL;
                const response = await axios.get(
                    `${API_URL}/products/`
                )

//                const response = await axios.get(
//                    "http://localhost:4000/products/"
//                )

                setProducts(response.data)
            } catch (error) {
                console.error("Error loading products:", error)
            }
        }

        getProducts()
    }, [])

    async function rentProduct(product) {
        if (!user) {
            setPage("signin")
            return
        }

        try {
//            await axios.post(
//                "http://localhost:4000/orders/",
//                {
//                    productId: product._id,
//                    userId: user._id,
//                    quantity: quantities[product._id] || 1
//                }
//            )
            const API_URL = process.env.REACT_APP_API_URL;
            await axios.post(
                `${API_URL}/orders/`,
                {
                    productId: product._id,
                    userId: user._id,
                    quantity: quantities[product._id] || 1
                }
            )

            alert("Item rented successfully!")

            const quantity = quantities[product._id] || 1

            setProducts((currentProducts) =>
                currentProducts.map((currentProduct) =>
                    currentProduct._id === product._id
                        ? {
                            ...currentProduct,
                            stock: currentProduct.stock - quantity
                        }
                        : currentProduct
                )
            )

        } catch (error) {
            console.error("Error renting item:", error)

            alert(
                error.response?.data?.message ||
                "There was a problem renting this item."
            )
        }
    }

    return (
        <div className="product-container">
            {products.map((product) => (
                <div
                    className="product card shadow-sm"
                    key={product._id}
                >
                    <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                    />

                    <div className="card-body d-flex flex-column">

                        <h2 className="card-title">
                            {product.title}
                        </h2>

                        <p className="card-text">
                            {product.description}
                        </p>

                        <p>
                            Stock: {product.stock}
                        </p>

                        <p>
                            Price: ${product.price.toFixed(2)}
                        </p>

                        <p className="total-price">
                            Total: $
                            {(
                                product.price *
                                (quantities[product._id] || 1)
                            ).toFixed(2)}
                        </p>

                        <input
                            className="form-control quantity-input"
                            type="number"
                            min="1"
                            max={product.stock}
                            value={quantities[product._id] || 1}
                            onChange={(e) =>
                                setQuantities({
                                    ...quantities,
                                    [product._id]: Number(e.target.value)
                                })
                            }
                        />

                        <button
                            className="btn btn-primary rent-button"
                            onClick={() => rentProduct(product)}
                        >
                            Rent
                        </button>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductCard