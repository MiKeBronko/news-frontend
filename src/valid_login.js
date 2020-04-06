const { form } = document.forms;

const email = document.querySelector('.popup__input-email');
const sample = document.querySelector('.popup__input-sample');
const submit = document.querySelector('.popup__button_login');


const emailRegExp = /^\w+([^.-][\w]+)*@([A-Za-z0-9]+)(-[A-Za-z0-9]+)*\.[A-Za-z]{2,3}$/;

const passRegExp = /(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

function setError() {
  submit.setAttribute('disabled', true);
  submit.classList.remove('popup__button_active');
}
function resetError() {
  submit.removeAttribute('disabled', true);
  submit.classList.add('popup__button_active');
}

function isEmail(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);
  const test = emailRegExp.test(element.value);
  if (element.value.length === 0) {
    errorElement.textContent = 'Это обязательное поле';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (!test) {
    errorElement.textContent = 'Неверный формат email';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (test) {
    errorElement.textContent = 'good';
    errorElement.style.color = 'green';
    return true;
  }
  return false;
}

function isPass(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);
  const test = passRegExp.test(element.value);
  if (element.value.length === 0) {
    errorElement.textContent = 'Это обязательное поле';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (!test) {
    errorElement.textContent = 'Неверный формат пароля';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (test) {
    errorElement.textContent = 'good';
    errorElement.style.color = 'green';
    return true;
  }
  return false;
}

function validate(element) {
  if (!isEmail(element) && !isPass(element)) {
    setError();
  } else {
    resetError(element);
  }
}

function handleValidate(event) {
  validate(event);
  // event.preventDefault();
  const inputs = Array.from(form.elements);
  inputs.forEach((elem) => {
    if (elem.id !== submit.id && elem.id === email.id) {
      isEmail(elem);
    }
    if (elem.id !== submit.id && elem.id === sample.id) {
      isPass(elem);
    }
  });
}

export {
  form, email, sample, isEmail, isPass, handleValidate,
};
