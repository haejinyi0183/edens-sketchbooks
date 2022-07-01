export function showAnimals(pets) {
  const results = document.querySelector("#results");

  results.innerHTML = "";

  // loop through pets
  pets.forEach((pet) => {
    // create elements
    const div = document.createElement("div");
    div.classList.add("card", "mb-3");
    div.innerHTML = `
          <div class="row listingFont">
            <div class="col-sm-6">
              <h4>${pet.name} (${pet.age})</h4>
              <p class="text-secondary">${pet.breeds.primary}</p>
              <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
      pet.contact.address.postcode}</p>
              <ul class="list-group">
                <li class="list-group-item listItems">${
                  pet.contact.phone
                    ? `<li class="list-group-item listItems">Phone: ${pet.contact.phone}</li>`
                    : ``
                }</li>
                ${
                  pet.contact.email
                    ? `<li class="list-group-item listItems">Email: ${pet.contact.email}</li>`
                    : ``
                }
                <li class="list-group-item listItems">Shelter ID: ${
                  pet.organization_id
                }</li>
              </ul>
            
            </div>
            <div class="col-sm-6">
            <img class="petImg img-fluid rounded-circle mx-auto d-block mt-2" src="${
              pet.photos[0] ? pet.photos[0].medium : ""
            }">
            </div>
          </div>
        `;
    results.appendChild(div);
  });
}
