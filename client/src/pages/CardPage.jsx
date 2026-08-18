import Navbar from "../components/Navbar";
import Card from "../components/Card";

function CardPage({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

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