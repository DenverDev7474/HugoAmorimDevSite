const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const currentPagePath = window.location.pathname;

    if (currentPagePath === "/index.html") {
      e.preventDefault();
      const sectionId = link.getAttribute('href');
      const section = document.querySelector(sectionId);

      const offset = 200;
      const sectionTop = section.offsetTop - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    } else {
      window.location.href = "/index.html";

      window.onload = function() {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        const offset = 200;
        const sectionTop = section.offsetTop - offset;

        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      }
    }
  });
});

const projectItems = document.querySelectorAll('#projects li');
projectItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    item.style.backgroundColor = '#eee';
  });

  item.addEventListener('mouseout', function() {
    item.style.backgroundColor = 'rgba(79, 76, 77, 0.05)';
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
