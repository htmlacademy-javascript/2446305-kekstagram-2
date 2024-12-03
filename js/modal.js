const modalElement = document.querySelector('.big-picture');
const closeButtonElement = document.querySelector('.big-picture__cancel');
const body = document.body;
const imageElement = modalElement.querySelector('.big-picture__img img');
const captionElement = modalElement.querySelector('.social__caption');
const likesElement = modalElement.querySelector('.likes-count');
const totalCommentsElement = modalElement.querySelector('.social__comment-total-count');
const commentsContainerElement = document.querySelector('.social__comments');
const commentElement = document.querySelector('.social__comment');


const show = () => {
  modalElement.classList.remove('hidden');
  body.classList.add('modal-open');
}

const hide = () => {
  modalElement.classList.add('hidden');
  body.classList.remove('modal-open');
}

const render = (photo) => {
  imageElement.src = photo.url;
  captionElement.textContent = photo.description;
  likesElement.textContent = photo.likes;
  totalCommentsElement.textContent = photo.comments.length;
};

export const open = (data) => {
  console.log(data);
  render(data);
  show();
  commentsContainerElement.innerHTML = "";
}
closeButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  modalElement.classList.add('hidden');
  hide()
})
