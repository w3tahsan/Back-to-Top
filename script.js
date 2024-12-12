// Get the button element
const backToTopButton = document.getElementById('backToTop');

// Show the button when the user scrolls down 200px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
};
