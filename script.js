document.querySelectorAll('.view-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let card = this.closest('.box');
    card.classList.toggle('is-flipped');
  });
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    let card = this.closest('.box');
    card.classList.remove('is-flipped');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const scrollToGalleryButton = document.getElementById("scroll-to-gallery");

  if (scrollToGalleryButton) {
      scrollToGalleryButton.addEventListener("click", function(event) {
          event.preventDefault();

          const gallerySection = document.getElementById("about");
          const offsetTop = gallerySection.offsetTop;

          window.scrollTo({
              top: offsetTop,
              behavior: "smooth"
          });
      });
  }
  
});
