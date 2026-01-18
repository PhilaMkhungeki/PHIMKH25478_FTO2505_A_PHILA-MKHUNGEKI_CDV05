 

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

//smooth project scroll 
const projectsWrapper = document.querySelector('.projects-wrapper');

let autoScroll;
let isInteracting = false;

function startAutoScroll() {
    autoScroll = setInterval(() => {
        if (!isInteracting) {
            projectsWrapper.scrollLeft += 1;
        }
    }, 60);
}

startAutoScroll();

/*Pause when user interacts*/
["mouseup", "mouseleave"].forEach(event => {
    projectsWrapper.addEventListener(event, () => {
        isInteracting = false;
    });
});

if(projectsWrapper.scrollLeft >= projectsWrapper.scrollWidth - projectsWrapper.clientWidth) {
    projectsWrapper.scrollLeft = 0;
}

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
