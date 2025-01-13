import { debounce } from './util.js'

let currentFilter = 'filter-default';
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON = 'img-filters__button--active';

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

function applyFilter() {
  let filterPictures = [];
  if (currentFilter === 'filter-default') {
    filterPictures = pictures;
  }
  if (currentFilter === 'filter-random') {
    filterPictures = pictures.toSorted(() => 0.5 - Math.random()).slice(0, 10);
  }
  if (currentFilter === 'filter-discussed') {
    filterPictures = pictures.toSorted((a, b) => b.comments.length - b.comments.length);
  }
  debounceRender(filterPictures);
}

function configFilter(picturesData) {
  filterElement.classList.remove('.img-filters--inactive');
  filterElement.addEventListener('click', onFilterChange);
  pictures = picturesData;
}

export {configFilter};
