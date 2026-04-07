let editButton = document.querySelector(".profile__info-editbutton-edit");
let form = document.querySelector(".form");
let formCloseButton = document.querySelector(".form__close");
let formSaveButton = document.querySelector(".form__save");

function formClose() {
  form.classList.remove("form--visible");
}

function formToggle() {
  form.classList.add("form--visible");
}

function EditProfile() {
  let nameInput = document.querySelector(".form__name");
  let aboutInput = document.querySelector(".form__about");
  let profileName = document.querySelector(".profile__info-name");
  let profileAbout = document.querySelector(".profile__info-explorador");

  console.log(nameInput.value);
  console.log(aboutInput.value);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

editButton.addEventListener("click", formToggle);
formCloseButton.addEventListener("click", formClose);
formSaveButton.addEventListener("click", EditProfile);

// cerrar al iniciar
formClose();
