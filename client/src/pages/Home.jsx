import Navbar from "../components/Navbar";
import "./Home.css";

function Home({setPage}) {
  return (
    <div>
      <Navbar setPage={setPage} />

      <section className="home-hero">
        <p>Technology Rentals Without The Commitment</p>

        <h1 className="home-slogan">
          Need a Computer?
          <br />
          Just Rent One.
        </h1>

        <p>
          No big purchase. No long-term commitment. No hassle.
        </p>
      </section>

      <section>
        <h2>Whatever You're Working On, We've Got the Gear.</h2>

        <p>
          From getting through a busy week to powering an entire event, rent the
          equipment that keeps you moving.
        </p>

        <h3>Need a Laptop?</h3>

        <p>
          Grab a reliable laptop for work, school, travel, presentations, or
          anything else on your to-do list.
        </p>

        <h3>Need a Desktop?</h3>

        <p>
          Set up a temporary office, add computers to your workspace, or get the
          power you need for a project.
        </p>

        <h3>Need More Than One?</h3>

        <p>
          Equipping a team, classroom, conference, or event? Rent the technology you
          need without buying it all.
        </p>

        <h2>Sometimes You Don't Need to Own It.</h2>

        <p>
          Maybe your computer is being repaired. Maybe you have a big presentation
          next week. Maybe your business needs extra equipment for a temporary
          project.
        </p>

        <p>
          Whatever the situation, buying expensive equipment for a temporary need
          doesn't always make sense.
        </p>

        <p>
          <strong>That's where QuickRental comes in.</strong>
        </p>

        <p>
          Rent what you need, use it for as long as you need it, and move on when
          you're finished.
        </p>

        <h2>Three Steps. That's It.</h2>

        <h3>01. Choose Your Equipment</h3>

        <p>
          Find the laptop, desktop, monitor, or other technology that fits your needs.
        </p>

        <h3>02. Pick Your Rental</h3>

        <p>
          Choose the rental timeframe that works for your project, schedule, or
          event.
        </p>

        <h3>03. Get to Work</h3>

        <p>
          Get your equipment and focus on what you actually need to get done.
        </p>

        <h2>One Rental. A Lot of Possibilities.</h2>

        <p>
          Work. School. Business. Events. Conferences. Training. Travel. Temporary
          projects.
        </p>

        <p>
          Need one computer or equipment for an entire team? QuickRental helps you
          get set up without turning a temporary need into a permanent expense.
        </p>

        <h2>
          Don't Buy It.
          <br />
          Rent It.
        </h2>

        <p>
          Get the technology you need without the cost and commitment of owning it.
        </p>
      </section>

      <footer>
        <p>Trademark of QuickRental Corp.</p>
      </footer>
    </div>
  );
}

export default Home;