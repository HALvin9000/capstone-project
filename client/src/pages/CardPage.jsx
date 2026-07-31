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
        /> 

        <footer>
          <p>Trademark of QuickStart Hardware Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default CardPage;