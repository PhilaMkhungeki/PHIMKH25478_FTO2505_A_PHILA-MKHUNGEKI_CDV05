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

 menu.addEventListener('click', function() {
    mobileMenu.classList.toggle("show");
    console.log("icon clicked!");
 });

 //small screen responsiveness

 const mobileNav = document.getElementById("menu");
  
mobileNav.addEventListener('click', function() {
    alert("Icon clicked!");
});