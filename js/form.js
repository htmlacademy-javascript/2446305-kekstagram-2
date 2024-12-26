import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js'
import { showPopup } from './popup.js';
import { POPUPS, SUBMIT_TEXTS } from './constants.js';
import { sendData } from './api.js';
import { removeEscapeControl, setEscapeControl } from './escape-control.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('#upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancel = uploadForm.querySelector('.img-upload__cancel');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const body = document.body;
const inputHashtags = uploadForm.querySelector('.text__hashtags');
const inputComment = uploadForm.querySelector('.text__description');

const closeForm = () => {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const canCloseForm = () => !(document.activeElement === inputHashtags || activeElement === inputComment)

const openForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  setEscapeControl(closeForm, canCloseForm);
}

uploadFile.addEventListener('change', () => {
  openForm();
});

uploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeForm();
  removeEscapeControl();
});

/*document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
});/*/


const blockSubmit = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SUBMIT_TEXTS.SENDING : SUBMIT_TEXTS.IDLE;
}

const onFormSubmit = (evt) => {
  evt.preventDefault();
  if (isValid()) {

    blockSubmit();

    sendData(new FormData(uploadForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error()
        }
        closeForm();
        removeEscapeControl();
        showPopup(POPUPS.SUCCESS);
      })
      .catch(() => {

        showPopup(POPUPS.ERROR);
      })
      .finally(() => {
        blockSubmit(false);
      })
  }
};

uploadForm.addEventListener('submit', onFormSubmit);
