import { renderThumbnails } from './thumbnails.js';
import './form.js';
import { showErrorMessage } from './util.js';
import { getData } from './api.js';
import { configFilter } from './filter.js';

getData()
  .then((data) => {
    renderThumbnails(data);
    configFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });
