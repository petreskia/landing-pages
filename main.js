document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current path without leading slashes
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // Highlight the correct nav link based on the current URL
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop(); // Match only the file name
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
