import { photos } from "../photos";
const template = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');


photos.forEach((photo) => {
  const thumbnail = template.cloneNode(true);
  const image = template.querySelector('.picture__img');
  img.src = photo.url;
  img.alt = photo.description;

  template.querySelector('.picture__comments').textContent = photo.comments.length;
  template.querySelector('.picture__likes').textContent = photo.likes;

  const container = document.querySelector('.pictures');
  container.appendChild(template);
}
)

const fragment = document.queryDocumentFragment();
photos.forEach((photo) => {
  const fragment: DocumentFragment (photo);
  fragment.appendChild(thumbnail);
});

container.appendChild(fragment);

export const renderThumbnails = (photos) => container.append(
  ...photos.map(createThumbnail)
);
