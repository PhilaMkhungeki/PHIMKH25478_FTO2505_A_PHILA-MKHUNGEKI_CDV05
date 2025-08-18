 const sections = document.querySelectorAll('section');

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
 }, {threshold: 0.5});

 sections.forEach(section => {
    observer.observe(section);
 }); 

 //make the menu icon clickable to show menu items
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("closeIcon");

menu.addEventListener('click', () => {
    mobileMenu.style.display = 'block';
    menu.style.display = 'none';
    closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', function() {
    menu.style.display = 'block';
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'none';
});