$(function () {
  // write your code here
  const filtersContainer = document.getElementById("filtersContainer");
  const itemsContainer = document.getElementById("itemsContainer");

  // Fetch bike data
  fetch("https://challenges.brainster.tech/ajax_data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const bikes = data.products;
      initializeFilters(bikes);
      renderBikes(bikes);
      setupFilters(bikes);
    })
    .catch((error) => console.error("Error fetching bike data:", error));

  // Render bike cards
  function renderBikes(bikes) {
    itemsContainer.innerHTML = "";
    bikes.forEach((bike) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="card-inner">
        <div class="card-top">
          <img src="./img/${bike.image}.png" alt="${bike.name}" />
          </div>
          <div class="card-bottom">
            <h3 class="card-title">${bike.name}</h3>
            <span>${bike.price} $</span>
          </div>
        </div>
      `;
      itemsContainer.appendChild(card);
    });
  }

  // Initialize filters
  function initializeFilters(bikes) {
    // Update the "Show All" badge
    const filterShowAll = document.getElementById("ValueShowAll");
    if (filterShowAll) filterShowAll.textContent = bikes.length;

    // Update gender badges
    const genderMale = document.getElementById("genderMale");
    const genderFemale = document.getElementById("genderFemale");
    if (genderMale)
      genderMale.textContent = bikes.filter(
        (bike) => bike.gender.toLowerCase() === "male"
      ).length;
    if (genderFemale)
      genderFemale.textContent = bikes.filter(
        (bike) => bike.gender.toLowerCase() === "female"
      ).length;

    // Update brand badges
    const brandFilters = document.querySelectorAll(".filters-brand .filters");
    brandFilters.forEach((filter) => {
      const brand = filter
        .querySelector(".brand-name")
        .textContent.toLowerCase();
      const badge = filter.querySelector("span");
      if (badge)
        badge.textContent = bikes.filter(
          (bike) => bike.brand.toLowerCase() === brand
        ).length;
    });
  }

  // Setup filters
  function setupFilters(bikes) {
    const allFilters = document.querySelectorAll(".filters");

    // Set "Show All" as active on page load
    const showAllFilter = document.querySelector(".filters-show-all");
    if (showAllFilter) showAllFilter.classList.add("active");

    filtersContainer.addEventListener("click", (e) => {
      // Find the closest filter div to the clicked element
      const filterDiv = e.target.closest(".filters");
      if (!filterDiv) return; // Exit if no filter div is found

      // Remove the active class from all filters
      allFilters.forEach((filter) => filter.classList.remove("active"));

      // Add the active class to the clicked filter
      filterDiv.classList.add("active");

      // Determine the filter category based on its text
      const filterCategory = filterDiv
        .querySelector("p")
        ?.textContent.toLowerCase();
      if (!filterCategory) return;

      let filteredBikes;

      if (filterCategory === "show all") {
        filteredBikes = bikes;
      } else if (filterCategory === "male" || filterCategory === "female") {
        filteredBikes = bikes.filter(
          (bike) => bike.gender.toLowerCase() === filterCategory
        );
      } else {
        filteredBikes = bikes.filter(
          (bike) => bike.brand.toLowerCase() === filterCategory
        );
      }

      renderBikes(filteredBikes);
    });
  }
});
