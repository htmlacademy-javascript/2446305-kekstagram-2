import { renderThumbnails } from './thumbnails.js';
import { debounce } from './util.js';
import { FILTERS, ACTIVE_BUTTON } from './constants.js';

let currentFilter = FILTERS.DEFAULT;
let pictures = [];
const filterElement = document.querySelector('.img-filters');

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if (!targetButton.matches('button')) {
    return;
  }
  if (activeButton === targetButton) {
    return;
  }
  activeButton.classList.toggle(ACTIVE_BUTTON);
  targetButton.classList.toggle(ACTIVE_BUTTON);
  currentFilter = targetButton.getAttribute('id');

  applyFilter();
}

const debounceRender = debounce(renderThumbnails);

const FiltersActions = {
  [FILTERS.DEFAULT]: () => pictures,
  [FILTERS.RANDOM]: () => pictures.toSorted(() => 0.5 - Math.random()).slice(0, 10),
  [FILTERS.DISCUSSED]: () => pictures.toSorted((a, b) => b.comments.length - a.comments.length)
};

function applyFilter() {
  let filterPictures = FiltersActions[currentFilter]();
  debounceRender(filterPictures);
}

export const configFilter = (picturesData) => {
  filterElement.classList.remove('img-filters--inactive');
  pictures = picturesData;
};

filterElement.addEventListener('click', onFilterChange);
