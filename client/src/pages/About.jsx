import "./About.css";

function About() {
  return (
    <div className="default about-page">
      <header className="about-hero">
        <p className="about-eyebrow">GET TO KNOW US</p>

        <h1>Technology Rentals Made Simple.</h1>

        <p className="about-intro">
          At <strong>QuickRental</strong>, we make it easy to get the
          technology you need without the cost and commitment of owning it.
          Each rental is for one month, giving you reliable equipment for
          your projects, work, or studies.
        </p>
      </header>

      <section className="about-section">
        <div className="about-story">
          <h2>Technology When You Need It.</h2>

          <p>
            Whether you need a computer for a project, school, work, or
            your business, our one-month rental period gives you time to
            make the most of your equipment without purchasing it outright.
          </p>

          <p>
            We provide a selection of reliable{" "}
            <strong>
              laptops, desktop computers, monitors, and other technology
              equipment
            </strong>{" "}
            for individuals, students, professionals, businesses, events,
            and organizations.
          </p>

          <p>
            Our goal is simple: provide quality equipment, straightforward
            service, and affordable rental options whenever you need them.
          </p>
        </div>
      </section>

      <section className="about-benefits">
        <div className="about-section-heading">
          <p className="about-eyebrow">THE QUICKRENTAL DIFFERENCE</p>
          <h2>Why Rent With Us?</h2>
          <p>
            The right equipment, without the unnecessary expense of
            purchasing technology outright.
          </p>
        </div>

        <div className="about-card-grid">
          <article className="about-card">
            <div className="about-card-number">01</div>
            <h3>Quality Equipment</h3>
            <p>
              Our rental equipment is maintained and tested to help you get
              to work with confidence.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-number">02</div>
            <h3>One-Month Rentals</h3>
            <p>
              Every rental covers a one-month period, giving you dependable
              access to the equipment you need for your work, studies, or
              projects.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-number">03</div>
            <h3>Affordable Solutions</h3>
            <p>
              Get access to the technology you need without the upfront
              expense of purchasing equipment.
            </p>
          </article>

          <article className="about-card">
            <div className="about-card-number">04</div>
            <h3>Friendly Service</h3>
            <p>
              We aim to make finding the right equipment and arranging your
              rental as simple as possible.
            </p>
          </article>
        </div>
      </section>

      <section className="about-use-cases">
        <div className="about-story">
          <h2>One Rental. Plenty of Possibilities.</h2>

          <p>
            From a work computer to equipment for a business project,
            training session, conference, school assignment, or special
            event, QuickRental is here to help.
          </p>

          <p>
            Our one-month rental period offers a practical way to access
            technology without committing to ownership. We focus on
            dependable equipment, competitive pricing, and helpful service.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <p className="about-eyebrow">READY TO GET STARTED?</p>

        <h2>
          Need a Computer?
          <br />
          <span>We're Here to Help.</span>
        </h2>

        <p>
          Find the equipment you need and get on with what matters most.
        </p>
      </section>
    </div>
  );
}

export default About;