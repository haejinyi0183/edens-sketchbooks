function showAnimals(pets) {
  const results = document.querySelector("#results");

  results.innerHTML = "";

  pets.forEach((pet) => {
    
    const div = document.createElement("div");
    div.classList.add("card", "mb-3");
    div.innerHTML = `
          <div className="row listingFont">
            <div className="col-sm-6">
              <h4>${pet.name} (${pet.age})</h4>
              <p className="text-secondary">${pet.breeds.primary}</p>
              <p>${pet.contact.address.city}, ${pet.contact.address.state} ${
      pet.contact.address.postcode}</p>
              <ul className="list-group">
                <li className="list-group-item listItems">${
                  pet.contact.phone
                    ? `<li className="list-group-item listItems">Phone: ${pet.contact.phone}</li>`
                    : ``
                }</li>
                ${
                  pet.contact.email
                    ? `<li className="list-group-item listItems">Email: ${pet.contact.email}</li>`
                    : ``
                }
                <li className="list-group-item listItems">Shelter ID: ${
                  pet.organization_id
                }</li>
              </ul>
            
            </div>
            <div className="col-sm-6">
            <img className="petImg img-fluid rounded-circle mx-auto d-block mt-2" src="${
              pet.photos[0] ? pet.photos[0].medium : ""
            }">
            </div>
          </div>
        `;
    results.appendChild(div);
  });
}
