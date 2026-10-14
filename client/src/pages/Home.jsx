import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <p className="home-eyebrow">
          Technology Rentals Without the Commitment
        </p>

        <h1 className="home-slogan">
          Need a Computer?
          <br />
          <span>Just Rent One.</span>
        </h1>

        <p className="home-hero-description">
          No big purchase. No long-term commitment. No hassle.
        </p>
      </section>

      <main className="home-content">
        <section className="home-section home-intro">
          <p className="home-eyebrow home-eyebrow-dark">
            Technology for Every Situation
          </p>

          <h2>Whatever You're Working On, We've Got the Gear.</h2>

          <p className="home-lead">
            From getting through a busy week to powering an entire event,
            rent the equipment that keeps you moving.
          </p>

          <div className="home-card-grid">
            <article className="home-card">
              <span className="home-card-number">01</span>
              <h3>Need a Laptop?</h3>
              <p>
                Grab a reliable laptop for work, school, travel,
                presentations, or anything else on your to-do list.
              </p>
            </article>

            <article className="home-card">
              <span className="home-card-number">02</span>
              <h3>Need a Desktop?</h3>
              <p>
                Set up a temporary office, expand your workspace,
                or get the power you need for your next project.
              </p>
            </article>

            <article className="home-card">
              <span className="home-card-number">03</span>
              <h3>Need More Than One?</h3>
              <p>
                Equip a team, classroom, conference, or event
                without the expense of buying everything outright.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section home-ownership">
          <div className="home-section-copy">
            <p className="home-eyebrow home-eyebrow-dark">
              A Smarter Way to Get Equipped
            </p>

            <h2>Sometimes You Don't Need to Own It.</h2>

            <p>
              Maybe your computer is being repaired. Maybe you have
              a big presentation next week. Maybe your business needs
              extra equipment for a temporary project.
            </p>

            <p>
              Buying expensive equipment for a temporary need
              doesn't always make sense.
            </p>

            <p className="home-highlight">
              That's where QuickRental comes in.
            </p>

            <p>
              Rent what you need, use it for as long as you need it,
              and move on when you're finished.
            </p>
          </div>
        </section>

        <section className="home-section home-process">
          <p className="home-eyebrow home-eyebrow-dark">
            Simple From Start to Finish
          </p>

          <h2>Three Steps. That's It.</h2>

          <div className="home-steps">
            <article className="home-step">
              <span className="home-step-number">01</span>
              <h3>Choose Your Equipment</h3>
              <p>
                Find the laptop, desktop, monitor, or other
                technology that fits your needs.
              </p>
            </article>

            <article className="home-step">
              <span className="home-step-number">02</span>
              <h3>Pick Your Rental</h3>
              <p>
                Choose a rental timeframe that works for your
                project, schedule, or event.
              </p>
            </article>

            <article className="home-step">
              <span className="home-step-number">03</span>
              <h3>Get to Work</h3>
              <p>
                Get your equipment and focus on what you
                actually need to get done.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section home-possibilities">
          <p className="home-eyebrow home-eyebrow-dark">
            One Solution. Endless Uses.
          </p>

          <h2>One Rental. A Lot of Possibilities.</h2>

          <div className="home-use-cases">
            <span>Work</span>
            <span>School</span>
            <span>Business</span>
            <span>Events</span>
            <span>Conferences</span>
            <span>Training</span>
            <span>Travel</span>
            <span>Temporary Projects</span>
          </div>

          <p className="home-lead">
            Need one computer or equipment for an entire team?
            QuickRental helps you get set up without turning a
            temporary need into a permanent expense.
          </p>
        </section>

        <section className="home-final-cta">
          <p className="home-eyebrow">Your Next Project Starts Here</p>

          <h2>
            Don't Buy It.
            <br />
            <span>Rent It.</span>
          </h2>

          <p>
            Get the technology you need without the cost and
            commitment of owning it.
          </p>
        </section>
      </main>

      <footer className="home-footer">
        <p>© {new Date().getFullYear()} QuickRental Corp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;