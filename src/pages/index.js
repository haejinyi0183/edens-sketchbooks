import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Slider from "../models/slider";

const Home = () => {
    return(
      <>
      <Nav />
        <Slider />
        <BackToTop />
        <Footer />
        </>
    )
}

export default Home;