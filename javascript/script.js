const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    
    const currentPagePath = window.location.pathname;
    if (currentPagePath === "/index.html") {
      e.preventDefault(); // Prevent the default link behavior
      const sectionId = link.getAttribute('href'); // Get the section ID from the link's href attribute
      const section = document.querySelector(sectionId); // Find the section on the page

      // add pixel offset to account for the fixed header
      const offset = 200;
      const sectionTop = section.offsetTop - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      }); // Scroll to the section smoothly
    }
    else {
      // If the user is not on the home page, redirect them to the home page
      window.location.href = "/index.html";

      // Wait for the page to load before scrolling to the section
      window.onload = function() {
        e.preventDefault(); // Prevent the default link behavior
        const sectionId = link.getAttribute('href'); // Get the section ID from the link's href attribute
        const section = document.querySelector(sectionId); // Find the section on the page

        // add pixel offset to account for the fixed header
        const offset = 200;
        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        }); // Scroll to the section smoothly
      }
    }
  });
});

// Add a hover effect to the project items
const projectItems = document.querySelectorAll('#projects li');
projectItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = '#eee';
  });
  item.addEventListener('mouseout', function() {
    item.style.backgroundColor = 'transparent';
  });
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

