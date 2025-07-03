window.addEventListener("scroll", function () {
    const goTopBtn = document.getElementById("goTopBtn");
    if (window.scrollY > 300) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  // Scroll to top on click
  document.getElementById("goTopBtn").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });