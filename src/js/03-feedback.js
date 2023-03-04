import lodashThrottle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

loadData();

formEl.addEventListener(
  'input',
  lodashThrottle(saveData, 500, { trailing: false })
);

formEl.addEventListener('submit', onSubmitForm);

function loadData() {
  const loadData = load('feedback-form-state');
  console.log(loadData);

  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }
  formEl.email.value = loadData.email;
  formEl.message.value = loadData.message;
}

function saveData(evt) {
  const loginFormEl = evt.currentTarget.elements;
  const submitData = {};
  submitData.email = loginFormEl.email.value;
  submitData.message = loginFormEl.message.value;
  save('feedback-form-state', submitData);
}

function save(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
    // return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function onSubmitForm(evt) {
  evt.preventDefault();
  const loginFormEl = evt.currentTarget.elements;
  console.log(loginFormEl.email.value);
  console.log(loginFormEl.message.value);
  const submitData = {};

  if (loginFormEl.email.value === '' || loginFormEl.message.value === '') {
    return alert('Увага! Всі поля повинні бути заповнені!');
  }

  submitData.email = loginFormEl.email.value;
  submitData.message = loginFormEl.message.value;

  //   save('feedback-form-state', submitData);
  console.log(submitData);
  remove('feedback-form-state');
  return event.currentTarget.reset();
}
