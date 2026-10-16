const profileBtn = document.getElementById('profileBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

profileBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    if(!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('active');
    }
})