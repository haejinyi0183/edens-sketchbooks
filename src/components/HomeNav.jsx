import React, {useState} from "react"
const manImage = require("../images/man.png");
const pencil = require("../images/pencil.png");

const HomeNav = () => {

    const [ modal, setModal ] = useState(false);
    const Toggle = () => setModal(!modal);

  return (
    <>
    <header className="header">
      <h2 className="headerName mt-4">edens sketchbook</h2>
      <button type="button" src={pencil} alt='contact' onClick={() => Toggle()}>
      <img className="pencil grow mt-4" type="image" src={pencil} alt="contact" />
      </button>
    </header>
    <div id='modal'>
        <div className={modal ? 'modal' : null }>
        <form action="/signOn" method="post">
          <img
            className="mb-2 mt-4"
            src={manImage}
            alt=""
            width="100"
            height="100"
          />
          <h1 className="mb-3">Signup for my newsletter!</h1>
            <div className="inputPadding">
            <input type="text" name="fullName" className="mb-1 form-control" placeholder="Full Name" required autoFocus autoComplete="off"/>
            <input type="email" name="Email" className="mb-1 form-control" placeholder="Email" required autoComplete="off"/>
            <input type="password" name="Password" className="form-control" placeholder="Password" required autoComplete="off"/>
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
