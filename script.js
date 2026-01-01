// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// AOS Initialization
AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

// Theme Toggle
const themeToggle = document.querySelector("#theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});
if (localStorage.getItem("theme") === "dark")
  document.body.classList.add("dark");

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("show");
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Hero Carousel
new Swiper(".hero-carousel", {
  loop: true,
  speed: 1500, // Slower transition for luxury feel
  autoplay: { delay: 5000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  effect: "fade", // Elegant fade effect
  fadeEffect: { crossFade: true },
  allowTouchMove: false, // Prevent accidental swipes on desktop
});

// GSAP Animations
gsap.from(".hero-content", { y: 50, opacity: 0, duration: 1.5, delay: 0.5 });
gsap.utils.toArray(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () =>
    gsap.to(btn, { scale: 1.05, duration: 0.3 })
  );
  btn.addEventListener("mouseleave", () =>
    gsap.to(btn, { scale: 1, duration: 0.3 })
  );
});

// Stats Counter Animation
const stats = document.querySelectorAll(".counter");
stats.forEach((stat) => {
  const target = +stat.getAttribute("data-target");
  gsap.to(stat, {
    innerHTML: target,
    duration: 2,
    scrollTrigger: {
      trigger: stat,
      start: "top 80%",
    },
    snap: { innerHTML: 1 }, // Snap to whole numbers
    ease: "power1.out",
    onUpdate: function () {
      stat.innerHTML =
        Math.ceil(this.targets()[0].innerHTML) + (target > 100 ? "+" : "");
    },
  });
});

// Testimonial Swiper
new Swiper(".testimonial-swiper", {
  loop: true,
  autoplay: { delay: 4000 },
  pagination: { el: ".swiper-pagination", clickable: true },
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Close menu on outside click
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("show");
    hamburger.classList.remove("active");
  }
});
