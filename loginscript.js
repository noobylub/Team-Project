const container = document.getElementById('container');
const aboutBtn = document.getElementById('about-us');
const loginBtn = document.getElementById('login');

aboutBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
