const signInBtnLink = document.querySelector('.signInBtn-Link');
const signUpBtnLink = document.querySelector('.signUpBtn-Link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.ink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});

signInBtnLink.ink.addEventListener('click', () => {
  wrapper.classList.toggle('active');
});



