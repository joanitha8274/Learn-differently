const container = document.getElementById('container');
const register= document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventlistener('click', ()=> {
    container.classList.add("active");
});

loginBtn.addEventlistener('click', ()=> {
    container.classList.remove("active");
});


