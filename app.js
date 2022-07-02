const toggleButton = document.querySelector('.toggle-btn');
const sideBar = document.querySelector('.side-bar');

toggleButton.addEventListener('click', () => {
    sideBar.classList.toggle('hide');
});