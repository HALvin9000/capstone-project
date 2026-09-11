function TODO({}) {
  return (
    <>
      <div className="default">

        <p>
          *Most things right now are WIP hardcoded implementations to build structure without much styling or reusable/clean code.<br />
          *Set up the css margins universally on html tag
          *fix footer so its always bottom
          *make cards work and connect to mongoDB
          *duplicated forms for register/signin as I don't know how to make it modular
          *Installed bootstrap but turns out its global and not component based so it ruins my styling. Was going to use their cards and forms. Have to make my own...
          *a log out and something that shows you're logged in whether that be a colored dot or writing it on the navbar
          *fill out the readme and think about how to add the AI feature
          *consider erasing Register page and placing the option in the Sign In page like some websites do
          *MyCart.jsx feels like it duplicated Card.jsx code so the design definitely can be improved
        </p>

        <footer>
          <p>Trademark of QuickRental Corp.</p>
        </footer>
      </div>
    </>
  );
}

export default TODO;