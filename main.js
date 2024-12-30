document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current path, consider root as index.html
  const currentPath =
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
      ? "index.html"
      : window.location.pathname.split("/").pop();

  // Highlight the active link
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").replace("./", ""); // Normalize href (strip leading ./)
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
