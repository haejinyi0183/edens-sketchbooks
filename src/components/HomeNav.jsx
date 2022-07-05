import React, {useState} from "react"
const manImage = require("../images/man.png");
const pencil = require("../images/pencil.png");

const HomeNav = () => {

    const [ modal, setModal ] = useState(false);
    const Toggle = () => setModal(!modal);

    // function closeBtn () {
    //   <Toggle />
    // }

  return (
    <>
    <header className="header">
      <h2 className="headerName mt-4">edens sketchbook</h2>
      <a onClick={() => Toggle()} href="#top">
        <input className="pencil grow mt-4" type="image" src={pencil} alt='contact' />
      </a>
    </header>
    <div id='modal'>
        <div className={modal ? 'modal' : null }>
        <form action="https://formsubmit.co/7522e92b2f613d44854d0b5ac6f2d5f8" method="post">
          <img
            className="mb-2 mt-4"
            src={manImage}
            alt=""
            width="100"
            height="100"
          />
          <h1 className="mb-3">Signup for my newsletter!</h1>
            <div className="inputPadding">
            <input type="text" name="FirstName" className="mb-1 form-control" placeholder="First Name" required autoFocus autoComplete="off"/>
            <input type="text" name="LastName" className="mb-1 form-control" placeholder="Last Name" required autoComplete="off"/>
            <input type="email" name="Email" className="form-control" placeholder="Email" required autoComplete="off"/>
         </div>
          <button className="mt-2 w-10 btn btn-lg btn-primary sendBtn" type="submit">Sign up</button>
          <button className="mt-2 w-10 btn btn-lg closeBtn" onClick={Toggle} type="button">Cancel</button>

          <footer className="copy mt-3 text-muted">&copy; Edens Sketchbook</footer>
        </form>
      </div>
      </div>
      
      </>
    
  );
};

export default HomeNav;
