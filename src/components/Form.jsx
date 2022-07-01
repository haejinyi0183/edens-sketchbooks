import React from "react";
import { handleClick } from "../models/handleClick";



function Form() {
  const year = new Date().getFullYear();
  <a href="top" id="top" hidden>.</a>
 
  return (
    <div className="container">
      <form action="/" method="post" className="pet-form">
        <div className="form-group ">
          <label htmlFor="animal">Animal</label>
          <select
            id="animal"
            className="form-control form-control-lg form-control-inline mb-3"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="barnyard">Barnyard</option>
          </select>
          <input
            name="zipCode"
            type="text"
            id="zip"
            className="form-control form-control-lg"
            placeholder="Enter your zipcode"
          />
          <button
            onClick={handleClick}
            type="submit"
            value="Find"
            className="btn btn-dark btn-lg btn-block mt-3 mb-2">Find
          </button>

          <div id="results"></div>
        </div>
      </form>

      <footer className="footerText text-center">
        <p className="text-center text-muted">Edens Pals ⓒ {year}</p>
      </footer>
    </div>
  );
}
export default Form;
