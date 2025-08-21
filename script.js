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

//contact form submission
const form = document.querySelector("form");

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "accept": "application/json" }
        });

        if(response.ok) {
            alert("Thank you! Your message has been sent.")
            form.reset();
        } else {
            const data = await response.json();
            if(Object.hasOwn(data, 'errors')) {
                alert(data["errors"].map(error => error["message"]).join(", "));
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        }
    } catch (error) {
        alert("A network error occured.");
    }
    
});