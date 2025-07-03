window.addEventListener('scroll', function () {
    document.querySelectorAll('.main-img, .offset-img').forEach(el => {
      const position = el.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 100) {
        el.classList.add('visible');
      }
    });
  });

window.addEventListener('DOMContentLoaded', () => {
    const mainImages = document.querySelectorAll('.main-img');
    const offsetImages = document.querySelectorAll('.offset-img');

    mainImages.forEach(img => {
      img.classList.add('animate-from-top');
    });

    offsetImages.forEach(img => {
      img.classList.add('animate-from-right');
    });
});