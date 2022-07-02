import React from "react";
import { handleClick } from "../models/handleClick";

function Form() {
  <a href="top" id="top" hidden>.</a>
 
  return (
    <div className="container search-box">
    <h1 className="text-center text-white">Start your journey below</h1>
      <form action="/" method="post" className="pet-form">
        <div className="form-group">
          <label className="text-white h3" htmlFor="animal">Animal</label>
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
      </footer>
    </div>
  );
}
export default Form;
