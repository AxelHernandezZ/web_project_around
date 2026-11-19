//Perfil boton editar
let editButton = document.querySelector(".profile__info-editbutton-edit");
//Perfil boton guardar
let saveButton = document.querySelector(".form__save");
//Perfil boton añadir imagen
let addButton = document.querySelector(".profile__info-addbutton-add");

//Posicion de las tarjetas
let imgContainer = document.querySelector(".elements__grid");

//Formulario editar perfil
let form = document.querySelector(".form");
let formCloseButton = document.querySelector(".form__close");
let formSaveButton = document.querySelector(".form__save");
//Formulario agregar imagen
let formImg = document.querySelector(".formImg");
let formImgCloseButton = document.querySelector(".formImg__close");
let formImgSaveButton = document.querySelector(".formImg__save");
let titleInput = document.querySelector(".formImg__name");
let urlImage = document.querySelector(".formImg__url");

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

//Funcion para cerrar formulario de imagen y limpiar campos
function formImgClose() {
  titleInput.value = "";
  urlImage.value = "";
  formImg.classList.remove("formImg--visible");
}

//funcion para mostrar formulario
function formToggle() {
  form.classList.add("form--visible");
}

//funcion para mostrar formulario de imagen
function formImgToggle() {
  console.log("se abre para guardar");
  formImg.classList.add("formImg--visible");
}

function addImage(title, url) {
  //Se establece el uso de la plantilla
  const imgTemplate = document.querySelector("#card-template");
  const imgElement = imgTemplate.content
    .querySelector(".elements__grid-card")
    .cloneNode(true);
  //Se agregan los valores obtenidos del form a la plantilla
  imgElement.querySelector(".elements__grid-card-footer-text").textContent =
    title;
  imgElement.querySelector(".elements__grid-card-image").src = url;

  //Se carga la plantilla dentro de la visualización
  imgContainer.prepend(imgElement);
  formImgClose();
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

//formulario de perfil_funcion para activar boton guardar
function saveForm() {
  if (nameInput.value.trim() !== "" && aboutInput.value.trim() !== "") {
    saveButton.classList.add("form__save-active");
  } else {
    saveButton.classList.remove("form__save-active");
    return;
  }
}

//Guardar datos del formulario de la imagen

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

//eventos para formulario de perfil
editButton.addEventListener("click", formToggle);
formCloseButton.addEventListener("click", formClose);
nameInput.addEventListener("input", saveForm);
aboutInput.addEventListener("input", saveForm);
formSaveButton.addEventListener("click", EditProfile);

//eventos para boton like de tarjeta
cardLikeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleLike(button);
  });
});

//eventos de formulario de imagen
addButton.addEventListener("click", formImgToggle);
formImgCloseButton.addEventListener("click", formImgClose);
formImgSaveButton.addEventListener("click", function () {
  console.log("boton save activado");
  const imgTitle = document.querySelector(".formImg__name");
  const imgUrl = document.querySelector(".formImg__url");
  addImage(imgTitle.value, imgUrl.value);
});

// cerrar al iniciar
formClose();
