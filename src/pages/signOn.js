import Nav from "../components/Nav";
import Footer from "../components/Footer";
import manImage from "../images/man.png";

const SignOn = () => {
  return (
    <>
      <Nav />
      <div>
        <main className="form-signin text-center">
          <form action="/signOn" method="post">
            <img
              className="mb-5"
              src={manImage}
              alt="logo"
              width="170"
              height="195"
            />
            <h1 className="mb-3 fw-normal">Please Register</h1>

            <div className="form-floating">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="name@example.com"
                autoComplete="off"
              />
              <label className="text-muted">Email address</label>
            </div>
            <div className="form-floating">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <label className="text-muted">Password</label>
            </div>
            
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Submit
              </button>
            
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default SignOn;
