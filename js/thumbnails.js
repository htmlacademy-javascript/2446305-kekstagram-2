import { open as openModal } from './modal.js'

const template = document.querySelector('#picture').content.querySelector('.picture');
const containerElement = document.querySelector('.pictures');


export const renderThumbnails = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const thumbnail = template.cloneNode(true);
    const image = thumbnail.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;

    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;

    thumbnail.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(photo);
    })

    fragment.append(thumbnail)
  });
  containerElement.append(fragment)
}
