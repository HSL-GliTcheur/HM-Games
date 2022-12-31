const hamburgerToggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const slidingNewsletter = document.querySelector(".bouton-categorie");

const toggleNav = () => {
  hamburgerToggler.classList.toggle("open");

  const ariaToggle =
    hamburgerToggler.getAttribute("aria-expanded") === "true"
      ? "false"
      : "true";
  hamburgerToggler.setAttribute("aria-expanded", ariaToggle);

  navLinksContainer.classList.toggle("open");
};
hamburgerToggler.addEventListener("click", toggleNav);

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 900) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);

// ---------------- btn catégorie -----------------

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  // console.log(scrollTop, clientHeight);

  const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

  console.log(topElementToTopViewport);

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.4
  ) {
    slidingNewsletter.classList.add("active");
  }
});
