document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current path or set to "index.html" for the root URL
  const currentPath =
    window.location.pathname === "/"
      ? "index.html"
      : window.location.pathname.split("/").pop();

  // Highlight the active link
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop(); // Normalize href
    if (href === currentPath) {
      link.classList.add("active");
      link.classList.remove("text-white-50"); // Optional: Remove inactive styles
    } else {
      link.classList.remove("active");
      link.classList.add("text-white-50"); // Optional: Add inactive styles
    }
  });
});
