document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Get the current path from the URL
  const currentPath =
    window.location.pathname
      .split("/")
      .filter(Boolean) // Removes empty strings caused by leading/trailing slashes
      .pop() || "index.html"; // Default to index.html if root path

  console.log("Pathname:", window.location.pathname);
  console.log("Current Path:", currentPath);

  // Highlight the active link
  navLinks.forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (
      href === currentPath ||
      (currentPath === "index.html" && href === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
