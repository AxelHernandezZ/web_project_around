let editButton = document.querySelector(".profile__info-editbutton-edit");
let form = document.querySelector(".form");
let formCloseButton = document.querySelector(".form__close");

function formClose() {
  form.classList.remove("form--visible");
}

function formToggle() {
  form.classList.add("form--visible");
}

editButton.addEventListener("click", formToggle);
formCloseButton.addEventListener("click", formClose);

// cerrar al iniciar
formClose();
