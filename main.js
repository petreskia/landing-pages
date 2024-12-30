document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current path or set to "index.html" for the root URL
  const currentPath =
    window.location.pathname === "/"
      ? "index.html"
      : window.location.pathname.split("/").pop();

  console.log("Pathname:", window.location.pathname);
  console.log("Current Path:", currentPath);

  // Highlight the active link
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop(); // Normalize href
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
