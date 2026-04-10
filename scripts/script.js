//Perfil boton editar
let editButton = document.querySelector(".profile__info-editbutton-edit");
//Perfil boton guardar
let saveButton = document.querySelector(".form__save");
//Formulario
let form = document.querySelector(".form");
let formCloseButton = document.querySelector(".form__close");
let formSaveButton = document.querySelector(".form__save");
//Entradas de formulario
let nameInput = document.querySelector(".form__name");
let aboutInput = document.querySelector(".form__about");

//Tarjeta icono corazon
let cardLikeButtons = document.querySelectorAll(
  ".elements__grid-card-footer-icon",
);

//Funcion para cerrar formulario y limpiar campos
function formClose() {
  nameInput.value = "";
  aboutInput.value = "";
  form.classList.remove("form--visible");
}

//funcion para mostrar formulario
function formToggle() {
  form.classList.add("form--visible");
}

//funcion para editar perfil y cerrar formulario
function EditProfile() {
  let profileName = document.querySelector(".profile__info-name-text");
  let profileAbout = document.querySelector(".profile__info-explorador-text");

  console.log(nameInput.value);
  console.log(aboutInput.value);
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  formClose();
}

//funcion para activar boton guardar
function saveForm() {
  if (nameInput.value.trim() !== "" && aboutInput.value.trim() !== "") {
    saveButton.classList.add("form__save-active");
  } else {
    saveButton.classList.remove("form__save-active");
    return;
  }
}

//funcion para activar/desactivar boton like
function toggleLike(cardLikeButton) {
  if (
    cardLikeButton.getAttribute("src") ===
    "images/grid/grid_icons/btn_heart_icon_empty.png"
  ) {
    cardLikeButton.src = "images/grid/grid_icons/btn_heart_icon_active.png";
    console.log("like activado");
  } else {
    cardLikeButton.src = "images/grid/grid_icons/btn_heart_icon_empty.png";
    console.log("like desactivado");
  }
}

//eventos
editButton.addEventListener("click", formToggle);
formCloseButton.addEventListener("click", formClose);
nameInput.addEventListener("input", saveForm);
aboutInput.addEventListener("input", saveForm);
formSaveButton.addEventListener("click", EditProfile);
cardLikeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleLike(button);
  });
});
// cerrar al iniciar
formClose();

/////REVISAR EL PROBLEMA DE LOS CORAZONES Y ALINEAR EL FOOTER
