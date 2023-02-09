// Get all the links in the navigation bar
const links = document.querySelectorAll("header nav a");

// Add an event listener to each link
links.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    alert("This feature is under development. Stay tuned!");
  });
});

window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
};


document.querySelector('.btn-primary').addEventListener('click', function() {
    alert('Log In button clicked');
  });
  
  document.querySelector('.btn-secondary').addEventListener('click', function() {
    alert('Sign Up button clicked');
  });
    





