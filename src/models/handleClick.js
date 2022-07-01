import { isValidZip, showAlert } from "./validate.js";
import { showAnimals } from "../models/showAnimals";

export async function handleClick(event) {
  event.preventDefault();

  const zip = document.querySelector("#zip").value;
  const animal = document.querySelector("#animal").value;

  if (!isValidZip(zip)) {
    showAlert("Please Enter A Valid Zipcode", "danger");
    return;
  }

  let token;

  await fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_API_KEY}&client_secret=${process.env.REACT_APP_API_SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => {
      token = data.access_token;
    })
    .then(() => {
      fetch(
        `https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}&limit=50`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => showAnimals(data.animals));
      console.log(showAnimals);
    })
    .catch((err) => console.error(err));
}
