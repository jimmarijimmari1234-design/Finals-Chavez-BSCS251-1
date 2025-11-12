const loginRadio = document.getElementById('login');
const signupRadio = document.getElementById('signup');
const createAccountLink = document.getElementById('create-account-link');

createAccountLink.addEventListener('click', (e) => {
  e.preventDefault();
  signupRadio.checked = true;
  document.querySelector('.form-inner .login').style.marginLeft = '-50%';
});

signupRadio.addEventListener('change', () => {
  document.querySelector('.form-inner .login').style.marginLeft = '-50%';
});

loginRadio.addEventListener('change', () => {
  document.querySelector('.form-inner .login').style.marginLeft = '0%';
});