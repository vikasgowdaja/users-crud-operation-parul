// Theme Toggle Functionality and Scroll on Click
document.getElementById("themeToggle").addEventListener("click", () => {
  console.log("Theme toggle clicked"); // Debug log
  document.body.classList.toggle("dark-theme");
  const theme = document.body.classList.contains("dark-theme")
    ? "Dark"
    : "Light";4
  showToast(`Switched to ${theme} Theme`);
});

// Auto Scrolling Through Sections
const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;
setInterval(() => {
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
}, 7000); // Adjust interval (in milliseconds) as needed

// Typing Effect for Tagline
const typingText = "Welcome to my Portfolio!";
const tagline = document.createElement("h4");
document.querySelector(".container").prepend(tagline);

let typingIndex = 0;
const typeEffect = () => {
  if (typingIndex < typingText.length) {
    tagline.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeEffect, 150); // Adjust typing speed
  }
};
typeEffect();

// Image Carousel for Projects
const projectImages = [
  "images/flat-lay-blue-monday-paper-with-copy-space.jpg",  "images/francisco-andreotti-xlRLUzZmShk-unsplash.jpg",
  "images/a.jpg",
];
let currentImageIndex = 0;

const projectImageElement = document.createElement("img");
projectImageElement.classList.add(
  "thick-blue-border",
  "smaller-image",
  "rectangular-image"
);
projectImageElement.src = projectImages[currentImageIndex];
document.querySelector("#projects").appendChild(projectImageElement);

setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % projectImages.length;
  projectImageElement.src = projectImages[currentImageIndex];
}, 3000);

// Scroll Reveal Animation
const revealOnScroll = () => {
  const reveals = document.querySelectorAll("section");
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;

    console.log(revealTop); // Debug log

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

// Toast Message Display
const showToast = (message) => {
  const toast = document.getElementById("toastMessage");
  const toastText = document.getElementById("toastMessageText");
  toastText.textContent = message;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
};

// Form Submission Logic
document.getElementById("clientForm").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Your message has been sent!");
  document.getElementById("clientForm").reset();
});

// Scroll to Specific Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
