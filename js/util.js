const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;
const showTime = 5000;

export const showErrorMessage = () => {
  const newDataError = dataErrorTemplate.cloneNode(true);
  body.append(newDataError);
  setTimeout(() => {
    newDataError.remove();
  }, 5000)
}
