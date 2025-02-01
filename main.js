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
