import Navbar from "../components/Navbar";

function About({setPage}) {
  return (
    <>
      <div className="default">
        <Navbar setPage={setPage} />

        <h1>About Page</h1>

        <p>
          At <strong>QuickRental</strong>, we make it easy to get the technology
          you need without the cost and commitment of purchasing new equipment.
          Whether you need a computer for a few hours, several days, or an
          extended project, we offer flexible rental solutions designed to fit
          your needs.
        </p>

        <p>
          We provide a wide selection of reliable{' '}
          <strong>
            laptops, desktop computers, monitors, and other technology equipment
          </strong>{' '}
          for individuals, students, professionals, businesses, events, and
          organizations. Our goal is simple: to provide quality equipment,
          straightforward service, and affordable rental options when you need
          them most.
        </p>

        <p>
          <strong>Quality Equipment</strong>
          <br />
          We carefully maintain and test our rental equipment so you can get to
          work with confidence.
        </p>

        <p>
          <strong>Flexible Rentals</strong>
          <br />
          Rent for the timeframe that works for you. Whether it’s a short-term
          need or a long-term project, we offer flexible rental periods.
        </p>

        <p>
          <strong>Affordable Solutions</strong>
          <br />
          Renting gives you access to the technology you need without the upfront
          expense of purchasing equipment.
        </p>

        <p>
          <strong>Friendly Service</strong>
          <br />
          Our team is here to help you choose the right equipment for your needs
          and make the rental process as simple as possible.
        </p>

        <p>
          From a temporary work computer to equipment for a business project,
          training session, conference, school assignment, or special event,{' '}
          <strong>QuickRental</strong> is here to help.
        </p>

        <p>
          We believe renting technology should be convenient, transparent, and
          stress-free. That’s why we focus on dependable equipment, competitive
          pricing, and customer service you can count on.
        </p>

        <p>
          <strong>Need a computer? We’re here to help.</strong> Contact us today
          to find the right rental solution for you.
        </p>

        <footer>
          <p>Trademark of QuickRental Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default About;