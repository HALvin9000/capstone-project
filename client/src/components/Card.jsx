function Card({title, description, stock, price}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{stock}</p>
      <p>{price}</p>
      <button>Rent</button>
    </div>
  );
}

export default Card;