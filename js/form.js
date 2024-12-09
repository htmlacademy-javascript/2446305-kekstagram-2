import { isValid, reset as resetValidation } from "./validation.js";

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const body = document.body;

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

uploadFile.addEventListener('change', () => {
  openForm();
});

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
};

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
});

const onFormSubmit = (evt) => {
 if(!isValid()){
 evt.preventDefault();
 }
};

uploadForm.addEventListener('submit', onFormSubmit);

