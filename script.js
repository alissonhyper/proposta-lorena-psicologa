document.addEventListener('DOMContentLoaded', function() {
  const reveals = Array.from(document.querySelectorAll('.reveal'));
  const listItems = Array.from(document.querySelectorAll('.anim-list li'));

  function revealOnScroll() {
    reveals.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });

    // reveal list items when their parent is visible
    listItems.forEach((li) => {
      const rect = li.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        li.classList.add('visible');
      }
    });
  }

  // initial check
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
});
