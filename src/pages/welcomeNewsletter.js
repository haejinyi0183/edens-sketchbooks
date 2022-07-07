

const Welcome = () => {
  return (
    <div>
      <main class="form-signin text-center">
        <form>
          <img
            className="mb-4"
            src="public/images/man.png"
            alt="logo"
            width="170"
            height="195"
          />
          <h1 className="mt-4 fw-normal">Welcome~</h1>
        </form>
      </main>
      <img
        className="image rounded mx-auto d-block"
        src="./signon-screen.gif"
        alt="My Project GIF"
        width="550"
        height="350"
      />
    </div>
  );
};

export default Welcome;
