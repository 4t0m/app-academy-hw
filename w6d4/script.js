document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!

  const addFavorite = (e) => {
    e.preventDefault();

    const placeInputEl = document.querySelector(".favorite-input");
    const placeName = placeInputEl.value;
    placeInputEl.value = "";

    const placesList = document.getElementById("sf-places");
    const newPlace = document.createElement("li");
    newPlace.textContent = placeName;

    placesList.appendChild(newPlace);

  };

  const listSubmitButton = document.querySelector(".favorite-submit");
  listSubmitButton.addEventListener("click", addFavorite);



  // adding new photos

  // --- your code here!



});
