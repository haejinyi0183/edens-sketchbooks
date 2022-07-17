const Nav = require("../components/Nav");
const Footer = require("../components/Footer");
const manImage = require("../images/man.png");
const gif = require("../images/signon-screen.gif")


const Welcome = () => {
  return (
    <div>
    <Nav />
      <main className="form-signin text-center">
        <form>
          <img
            className="mb-4"
            src={manImage}
            alt="logo"
            width="170"
            height="195"
          />
          <h1 className="mt-4 fw-normal">Welcome~</h1>
        </form>
      </main>
      <img
        className="image rounded mx-auto d-block"
        src={gif}
        alt="My Project GIF"
        width="550"
        height="350"
      />
      <Footer />
    </div>
  );
};

export default Welcome;
