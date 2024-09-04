

document.addEventListener('DOMContentLoaded', () => {
  // Get all nav buttons
  const navButtons = document.querySelectorAll('.nav-btn');
  // Add click event listener to each button
  navButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove 'active' class from all buttons
      navButtons.forEach(btn => btn.classList.remove('active'));
      // Add 'active' class to the clicked button
      this.classList.add('active');
    });
  });
});


const carouselTrack = document.querySelector('.carousel-track');
const carouselItems = Array.from(carouselTrack.children);

const dotsContainer = document.querySelector('.carousel-dots');
dotsContainer.innerHTML = ''; // Clear existing dots
for (let i = 0; i < carouselItems.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
}
const dotspan = document.querySelectorAll('.carousel-dotspan');


const nextButton = document.querySelector('.next-btn');
const prevButton = document.querySelector('.prev-btn');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = carouselItems[0].getBoundingClientRect().width;
  const newTranslateX = -currentIndex * itemWidth;
  carouselTrack.style.transform = `translateX(${newTranslateX}px)`;

  // Update active dot
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Initial update
updateCarousel();






document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  alert("Data submitted successfully!");
});

// SMOOTH SCROLL FUNCTIONALITY
const projectSec = document.querySelector(".projects");
const recommSec = document.querySelector(".recommendation-section");
const contactSec = document.querySelector(".contact-container");
const homeSec = document.querySelector(".hero");

document.querySelector(".project-link").addEventListener("click", () => {
  const finalScrollY = projectSec.offsetTop + -100;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
});

document.querySelector(".project-link-footer").addEventListener("click", () => {
  const finalScrollY = projectSec.offsetTop + -100;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
});


document.querySelector(".recommendations-link").addEventListener("click", () => {
  const finalScrollY = recommSec.offsetTop + -170;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
})

document.querySelector(".recommendations-link-footer").addEventListener("click", () => {
  const finalScrollY = recommSec.offsetTop + -170;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
})
document.querySelector(".contact-link").addEventListener("click", () => {
  const finalScrollY = contactSec.offsetTop + -160;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
})

document.querySelector(".home-link").addEventListener("click", () => {
  const finalScrollY = homeSec.offsetTop + -200;
  window.scrollTo({ behavior: "smooth", top: finalScrollY });
})
