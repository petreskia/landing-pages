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
    role: "Producer/Editor/VFX Artist",
  },
  {
    name: "Oskar",
    role: "Director/Cinematographer",
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

// Services Cards
// document.addEventListener("DOMContentLoaded", () => {
//   function initializeServicesContainer(container) {
//     const serviceCards = container.querySelectorAll(".service-card");
//     let currentIndex = 0;
//     const totalCards = serviceCards.length;
//     let extraContentOpen = false; // Flag to track extra content state

//     function updateVisibility() {
//       serviceCards.forEach((card, index) => {
//         card.classList.toggle("hide-on-mobile", index !== currentIndex);
//         let cardNumberIndicator = card.querySelector(".card-number");
//         if (!cardNumberIndicator) {
//           cardNumberIndicator = document.createElement("div");
//           cardNumberIndicator.classList.add("card-number");
//           card
//             .querySelector(".service-card-wrapper")
//             .appendChild(cardNumberIndicator);
//         }
//         cardNumberIndicator.textContent = `${currentIndex + 1}/${totalCards}`;
//       });
//     }

//     function scrollToNextCard(direction) {
//       if (extraContentOpen) return; // Disable scroll if extra content is open
//       const nextIndex = currentIndex + direction;

//       if (nextIndex >= 0 && nextIndex < serviceCards.length) {
//         currentIndex = nextIndex;
//         updateVisibility();
//       }
//     }

//     function stopScrollPropagation(event) {
//       if (extraContentOpen) return; // Disable scroll if extra content is open
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     container.addEventListener("wheel", (event) => {
//       stopScrollPropagation(event);
//       scrollToNextCard(event.deltaY > 0 ? 1 : -1);
//     });

//     let touchStartY = 0;
//     let touchEndY = 0;

//     container.addEventListener("touchstart", (event) => {
//       touchStartY = event.touches[0].clientY;
//     });

//     container.addEventListener("touchend", (event) => {
//       if (extraContentOpen) return; //Disable scroll if extra content is open
//       touchEndY = event.changedTouches[0].clientY;
//       if (touchStartY > touchEndY + 50) {
//         scrollToNextCard(1);
//       } else if (touchStartY < touchEndY - 50) {
//         scrollToNextCard(-1);
//       }
//     });

//     updateVisibility();

//     container.querySelectorAll(".read-more").forEach((button) => {
//       button.addEventListener("click", function (event) {
//         event.stopPropagation();

//         const serviceCard = this.closest(".service-card");
//         const extraContent = serviceCard.querySelector(".extra-content");

//         if (extraContent.style.maxHeight) {
//           extraContent.style.maxHeight = null;
//           extraContent.style.opacity = "0";
//           this.textContent = "Read More";
//           extraContentOpen = false; // Extra content is closed
//         } else {
//           extraContent.style.maxHeight = extraContent.scrollHeight + "px";
//           extraContent.style.opacity = "1";
//           this.textContent = "Read Less";
//           extraContentOpen = true; // Extra content is open
//         }
//       });
//     });
//   }

//   document.querySelectorAll(".services-container").forEach((container) => {
//     initializeServicesContainer(container);
//   });
// });
document.addEventListener("DOMContentLoaded", () => {
  function initializeServicesContainer(container) {
    const serviceCards = container.querySelectorAll(".service-card");
    let currentIndex = 0;
    const totalCards = serviceCards.length;
    let extraContentOpen = false;

    function updateVisibility() {
      serviceCards.forEach((card, index) => {
        card.classList.toggle("hide-on-mobile", index !== currentIndex);
        let cardNumberIndicator = card.querySelector(".card-number");
        if (!cardNumberIndicator) {
          cardNumberIndicator = document.createElement("div");
          cardNumberIndicator.classList.add("card-number");
          card
            .querySelector(".service-card-wrapper")
            .appendChild(cardNumberIndicator);
        }
        cardNumberIndicator.textContent = `${currentIndex + 1}/${totalCards}`;
      });
    }

    function scrollToNextCard(direction) {
      if (extraContentOpen) return;
      const nextIndex = currentIndex + direction;

      if (nextIndex >= 0 && nextIndex < serviceCards.length) {
        currentIndex = nextIndex;
        updateVisibility();
      }
    }

    function handleHorizontalScroll(event) {
      container.scrollLeft += event.deltaY;
    }

    container.addEventListener("wheel", (event) => {
      if (extraContentOpen) {
        return;
      }

      if (window.innerWidth > 435) {
        if (event.target.closest(".services-container")) {
          event.preventDefault();
          handleHorizontalScroll(event);
        }
      } else {
        scrollToNextCard(event.deltaY > 0 ? 1 : -1);
      }
    });

    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    container.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    });

    container.addEventListener("touchmove", (event) => {
      touchEndX = event.touches[0].clientX;
      touchEndY = event.touches[0].clientY;
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);
      if (deltaX > deltaY) {
        event.preventDefault(); // Prevent vertical scroll only for horizontal swipes
      }
    });

    container.addEventListener("touchend", (event) => {
      if (extraContentOpen) return;
      if (Math.abs(touchEndX - touchStartX) > 50) {
        if (touchStartX > touchEndX) {
          scrollToNextCard(1);
        } else {
          scrollToNextCard(-1);
        }
      }
    });

    updateVisibility();

    container.querySelectorAll(".read-more").forEach((button) => {
      button.addEventListener("click", function (event) {
        event.stopPropagation();

        const serviceCard = this.closest(".service-card");
        const extraContent = serviceCard.querySelector(".extra-content");

        if (extraContent.style.maxHeight) {
          extraContent.style.maxHeight = null;
          extraContent.style.opacity = "0";
          this.textContent = "Read More";
          extraContentOpen = false;
        } else {
          extraContent.style.maxHeight = extraContent.scrollHeight + "px";
          extraContent.style.opacity = "1";
          this.textContent = "Read Less";
          extraContentOpen = true;
        }
      });
    });
  }

  document.querySelectorAll(".services-container").forEach((container) => {
    initializeServicesContainer(container);
  });
});
