let currentFilter = 'filter-default';
let pictures = [];
const filterElement = document.querySelector('.img-filters');
const ACTIVE_BUTTON = 'img-filters__button--active';

function onFilterChange(evt) {
  const targetButton = evt.target;
  const activeButton = document.querySelector(`.${ACTIVE_BUTTON}`);
  if(!targetButton.matches('button')) {
    return;
  }
  if(activeButton === targetButton) {
    return;
  }

}
