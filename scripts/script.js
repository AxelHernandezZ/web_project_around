//Perfil boton editar
let editButton = document.querySelector(".profile__info-editbutton-edit");
//Formulario
let form = document.querySelector(".form");
let formCloseButton = document.querySelector(".form__close");
let formSaveButton = document.querySelector(".form__save");
//Entradas de formulario
let nameInput = document.querySelector(".form__name");
let aboutInput = document.querySelector(".form__about");

function formClose() {
  nameInput.value = "";
  aboutInput.value = "";
  form.classList.remove("form--visible");
}

function formToggle() {
  form.classList.add("form--visible");
}

function EditProfile() {
  let profileName = document.querySelector(".profile__info-name-text");
  let profileAbout = document.querySelector(".profile__info-explorador-text");

  console.log(nameInput.value);
  console.log(aboutInput.value);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  formClose();
}

editButton.addEventListener("click", formToggle);
formCloseButton.addEventListener("click", formClose);
formSaveButton.addEventListener("click", EditProfile);

// cerrar al iniciar
formClose();
