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

// Image Slider
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const teamName = document.getElementById("team-name");
const teamRole = document.getElementById("team-role");
const indicators = document.querySelectorAll(".indicator");

const teamData = [
  {
    name: "Eskil",
    role: "Marketing",
  },
  {
    name: "William",
    role: "Director/Producer",
  },
  {
    name: "Oskar",
    role: "Cinematographer/VFX Artist",
  },
  {
    name: "Abdi",
    role: "Photographer/Cinematographer",
  },
  {
    name: "Erfan",
    role: "Operations",
  },
  {
    name: "Robin",
    role: "Operations",
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

  // Update indicators
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle("active", i === index);
  });
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

// Handle clicks on the left and right sides of the image
carouselSlider.addEventListener("click", (e) => {
  const carouselWidth = carouselSlider.offsetWidth;
  const clickPosition = e.clientX;

  if (clickPosition < carouselWidth / 4) {
    // Clicked on the left side (previous image)
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  } else if (clickPosition > (carouselWidth * 3) / 4) {
    // Clicked on the right side (next image)
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  }
});

// Initialize first slide
updateSlide(currentIndex);

// Handle indicator clicks
indicators.forEach((indicator) => {
  indicator.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.getAttribute("data-index"));
    updateSlide(currentIndex);
  });
});

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
// Cards - Extra content
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const serviceCard = this.closest(".service-card");
    const extraContent = serviceCard.querySelector(".extra-content");
    const button = this;

    if (extraContent.style.maxHeight) {
      extraContent.style.maxHeight = null;
      extraContent.style.opacity = "0";
      button.textContent = "Read More";
    } else {
      extraContent.style.maxHeight = extraContent.scrollHeight + "px";
      extraContent.style.opacity = "1";
      button.textContent = "Read Less";
    }
  });
});
