// =========================================================
// Dr. Ornella Lira Spinali De Figueredo — Author Website
// Shared interactivity
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
  }

  /* Scroll reveal */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Book language toggle */
  var bookCards = document.querySelectorAll("[data-book]");
  bookCards.forEach(function (card) {
    var buttons = card.querySelectorAll(".lang-btn");
    var coverImg = card.querySelector(".book-cover img");
    var titleEl = card.querySelector(".book-title");
    var blurbEl = card.querySelector(".book-blurb");
    var fullEl = card.querySelector(".book-full");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");

        var lang = btn.getAttribute("data-lang");
        var newSrc = btn.getAttribute("data-cover");
        var newTitle = btn.getAttribute("data-title");
        var newBlurb = btn.getAttribute("data-blurb");
        var newFull = btn.getAttribute("data-full");
        var newAlt = btn.getAttribute("data-alt");

        if (coverImg) {
          coverImg.style.opacity = 0;
          setTimeout(function () {
            coverImg.src = newSrc;
            coverImg.alt = newAlt || newTitle;
            coverImg.style.opacity = 1;
          }, 150);
        }
        if (titleEl) titleEl.textContent = newTitle;
        if (blurbEl) blurbEl.textContent = newBlurb;
        if (fullEl) fullEl.textContent = newFull;
      });
    });
  });

});
