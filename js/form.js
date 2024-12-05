const uploadForm = document.querySelector('.img-upload__form');
const uploadFile = uploadForm.querySelector('.upload-file');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadCancrl = uploadForm.querySelector('.img-upload__cancel');

uploadFile.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
})
