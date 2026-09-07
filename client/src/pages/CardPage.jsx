import Card from "../components/Card";

function CardPage({}) {
  return (
    <>
      <div className="default">

        <h1>Card Page</h1>

        <Card
          title="Test Card"
          description="Some description."
          stock="Some amount of quantity."
          price="Some price."
        />

        <Card
          title="RTX Pro 6000"
          description="96 GB of GDDR7"
          stock="1"
          price="$8000"
        />

        <footer>
          <p>Trademark of QuickRental Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default CardPage;