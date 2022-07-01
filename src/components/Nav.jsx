const pawPrint = require("../images/pawprint.png");
const imageLogo = require("../images/logo.png")

const Nav = () => {
  return (
    <header className="bg-dark text-white">
    <a href='/petfinder'>
      <img
        className="paws"
        src={pawPrint}
        alt="paws menu"
        width="50px"
        height="50px"
      />
      </a>

      <a href="/" className="logo">
      <img
          className="headerLogo"
          src={imageLogo}
          alt="logo"
          width="50px"
          height="50px"

        />
        EDENS PALS 
      </a>
    </header>
  );
};

export default Nav;
