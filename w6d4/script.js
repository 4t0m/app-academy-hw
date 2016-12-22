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

  const showPhotoForm = (e) => {
    const photoForm = document.querySelector(".photo-form-container");
    if (photoForm.className === "photo-form-container") {
      photoForm.className = "photo-form-container hidden";
    } else {
      photoForm.className = "photo-form-container";
    }
  };

  const photoFormShowButton = document.querySelector(".photo-show-button");
  photoFormShowButton.addEventListener("click", showPhotoForm);


  const handlePhotoSubmit = (e) => {
    e.preventDefault();

    const photoUrlInput = document.querySelector(".photo-url-input");
    const photoUrl = photoUrlInput.value;
    photoUrlInput.value = "";

    const newPhoto = document.createElement("img");
    newPhoto.src = photoUrl;

    const newPhotoLi = document.createElement("li");
    newPhotoLi.appendChild(newPhoto);

    const dogPhotosList = document.querySelector(".dog-photos");
    dogPhotosList.appendChild(newPhotoLi);
  };

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", handlePhotoSubmit);
});
