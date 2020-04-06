const { formReg } = document.forms;

const emailReg = document.querySelector('.popup__input-email_reg');
const sampleReg = document.querySelector('.popup__input-sample_reg');
const username = document.querySelector('.popup__input-username');
const submitReg = document.querySelector('.popup__button_reg');


const emailRegExp = /^\w+([^.-][\w]+)*@([A-Za-z0-9]+)(-[A-Za-z0-9]+)*\.[A-Za-z]{2,3}$/;

const passRegExp = /(?=^.{4,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

const nameRegExp = /^([А-ЯЁ][а-яё]+)(-[А-ЯЁ][а-яё]+)?$/;

function setError() {
  submitReg.setAttribute('disabled', true);
  submitReg.classList.remove('popup__button_active');
}

function resetError() {
  submitReg.removeAttribute('disabled', true);
  submitReg.classList.add('popup__button_active');
}

function isEmailReg(element) {
  emailRegExp.lastIndex = 0;
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
    errorElement.textContent = '';
    // errorElement.style.color = 'green';
    emailReg.style.BorderBottom = '1px solid rgba(0, 0, 0, .2)';
    return true;
  }
  return false;
}

function isPassReg(element) {
  passRegExp.lastIndex = 0;
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
    sampleReg.style.BorderBottom = '1px solid rgba(0, 0, 0, .2)';
    errorElement.textContent = '';
    // errorElement.style.color = 'green';
    return true;
  }
  return false;
}

function isName(element) {
  const errorElement = document.querySelector(`#error-${element.id}`);
  const test = nameRegExp.test(element.value);
  if (element.value.length === 0) {
    errorElement.textContent = 'Это обязательное поле';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (!test) {
    errorElement.textContent = 'Неверный формат имени';
    errorElement.style.color = 'red';
    setError(element);
    return false;
  }
  if (test) {
    errorElement.textContent = '';
    // errorElement.style.color = 'green';
    username.style.BorderBottom = '1px solid rgba(0, 0, 0, .2)';
    return true;
  }
  return false;
}

function validate(element) {
  if (!isEmailReg(element) && !isPassReg(element) && !isName(element)) {
    setError();
  } else {
    resetError(element);
  }
}

function handleValidateReg(event) {
  validate(event);
  // event.preventDefault();
  const inputs = Array.from(formReg.elements);
  inputs.forEach((elem) => {
    if (elem.id !== submitReg.id && elem.id === emailReg.id) {
      isEmailReg(elem);
    }
    if (elem.id !== submitReg.id && elem.id === sampleReg.id) {
      isPassReg(elem);
    }
    if (elem.id !== submitReg.id && elem.id === username.id) {
      isName(elem);
    }
  });
}

export {
  formReg, handleValidateReg,
};
