// Select all the navigation links and add an event listener to each one
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default link behavior
    const sectionId = link.getAttribute('href'); // Get the section ID from the link's href attribute
    const section = document.querySelector(sectionId); // Find the section on the page
    section.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
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
