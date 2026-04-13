const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector (".modal__form")
const editProfileNameInput = editProfileModal.querySelector ("#profile-name-input")
const editProfileDescriptionInput = editProfileModal.querySelector ("#profile-description-input")
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostForm = newPostModal.querySelector(".modal__form");
const cardImageInput =newPostModal.querySelector("#card-image-input");
const cardCaptionInput =newPostModal.querySelector("#card-caption-input");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const profileNameEl= document.querySelector(".profile__name")
const profileDescriptionEl = document.querySelector (".profile__description")

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent
  editProfileDescriptionInput.value = profileDescriptionEl.textContent
 openModal (editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal (editProfileModal);
});
 
newPostBtn.addEventListener("click", function () {
openModal (editProfileModal)
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal (editProfileModal);

newPostForm.addEventListener("submit", function () {
  evt.preventDefault();
  console.log(cardImageInput.value);
  console.log(cardCaptionInput.value);
closeModal (editProfileModal);
});


function handleEditProfileSubmit (evt) {
  evt.preventDefault();
console.log ("submitting");
profileNameEl.textContent = editProfileNameInput.value 
profileDescriptionEl.textContent = editProfileDescriptionInput.value 
closeModal (editProfileModal);

}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
