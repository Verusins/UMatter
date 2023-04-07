//login form toggle
loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

//sign-up form toggle
sign_upForm = document.querySelector('.sign-up-form-container');
document.querySelector('#sign-up-btn').onclick = () =>{
  sign_upForm.classList.toggle('active');
}
document.querySelector('#close-sign-up-btn').onclick = () =>{
  sign_upForm.classList.toggle('active');
}