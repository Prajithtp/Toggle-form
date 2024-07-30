const login = document.querySelector('.login-form');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.reg-link');
const btnPopup = document.querySelector('.login-btn');
const tclose = document.querySelector('.cbutton');


registerlink.addEventListener('click',()=>{
    login.classList.add('active');
});


loginlink.addEventListener('click',()=>{
    login.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    login.classList.add('active-popup');
});


tclose.addEventListener('click', ()=>{
    login.classList.remove('active-popup');
});