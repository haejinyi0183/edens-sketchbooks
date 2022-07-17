import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import manImage from "../images/man.png";
import pastel from "../images/pastel.jpg";
// import Canvas from "../models/colorPastel";
const Home = () => {
  
  return (
    <>
      <HomeNav />
      <div className="bottomContent">
        <div className="body">
          <img
            className="head-icon"
            width="30%"
            height="30%"
            src={manImage}
            alt=""
          />
          <div className="bodyText">
            <h1>I'm hae jin</h1>
            <h1>a web developer</h1>
          </div>
          <h1 className="lorem">
            A developing side project to showcase my learning curve.
          </h1>
          <ul className="list">
            <li>
              Wrote a simple website to have users signup for my newsletter.
            </li>
            <li>
              Tried using Mailchimp mail API using NodeJs and spent days trying
              to get it to work on Github pages. Stackoverflow reminded me
              Github only supported static apps...
            </li>
            <li>
              Deployed on{" "}
              <a href="https://edens-sketchbook-website-app.herokuapp.com/">
                Heroku
              </a>
              .
            </li>
            <li>
              Often heard recommendations to build something within my passion.
              Our family adores our pup, so I tinkered with the Petfinder API
              and created a tool to search for{" "}
              <a href='/petFinderHome'>pet adoption</a>.
            </li>
            <li>
              Created a{" "}
              <a href="/signOn">sign-on page</a>{" "}
              with node, express, mongoDbAtlas, and bcrypt for password hashing.
            </li>
            <li>
              Scroll through and select a color from the pastel color image
              below to change the background color of the website, and get the
              HEX/RGB code as well.
            </li>
          </ul>
        </div>

        <div className="pastelColor">
          <div className="preview result">
    
            <span>&nbsp HEX: #22142b</span>
            <span>&nbsp RGB: (34,20,43)</span>
          </div>

          <img className="pastelRadius" src={pastel} alt="" />
        </div>

        <div className="result"></div>

        <canvas id="cs"></canvas>
      </div>
      <Footer />
    </>
  );
};

export default Home;
