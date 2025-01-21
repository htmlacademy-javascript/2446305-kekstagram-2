import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { showErrorMessage } from './util.js';
import { getData } from './api.js';
import { setFilter } from './filter.js';

getData()
  .then((data) => {
    renderThumbnails(data);
    setFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });
