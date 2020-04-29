export function searchInput() {
  if (document.querySelector('.search__input').value.length === 0) {
    document.querySelector('.search__button').setAttribute('disabled', true);
    return false;
  } if (document.querySelector('.search__input').value.length !== 0) {
    document.querySelector('.search__button').removeAttribute('disabled', true);
    return true;
  }
  return searchInput();
}

