// JavaScript for dynamic text change in the banner
const changingText = document.getElementById("changingText");
const phrases = [
  "with people that care",
  "with Experts",
  "for Growth",
  "with Passion",
  "with Us",
];
let index = 0;

// Set initial value to "with people that care"
changingText.textContent = phrases[0];

setInterval(() => {
  changingText.textContent = phrases[index];
  index = (index + 1) % phrases.length;
}, 1500); // 3 seconds interval for each change

// About Us - Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const teamName = document.getElementById("team-name");
const teamRole = document.getElementById("team-role");
const teamDescription = document.getElementById("team-description");

const teamData = [
  {
    name: "John Doe",
    role: "Lead Designer",
    description: "John is a talented designer with 10 years of experience.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    description: "Jane ensures all projects run smoothly and on time.",
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    description:
      "Mike specializes in building modern, high-performance websites.",
  },
];

let currentIndex = 0;

function updateSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  // Update text content
  teamName.textContent = teamData[index].name;
  teamRole.textContent = teamData[index].role;
  teamDescription.textContent = teamData[index].description;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

// Add touch swipe functionality
let touchStartX = 0;

const carouselSlider = document.getElementById("carouselSlider");

carouselSlider.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselSlider.addEventListener("touchend", (e) => {
  const touchEndX = e.changedTouches[0].clientX;
  const touchDiff = touchStartX - touchEndX;

  if (touchDiff > 50) {
    // Swipe left (next image)
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  } else if (touchDiff < -50) {
    // Swipe right (previous image)
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  }
});

// Initialize first slide
updateSlide(currentIndex);

// Handling Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (e) => {
    setTimeout(() => {
      alert("Thank you for reaching out! We’ll get back to you soon!");
      form.reset(); // Clears the form after submission
    }, 1000); // Delay to ensure the form is processed
  });
});
