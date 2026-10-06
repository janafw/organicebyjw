// OrgaNICE by JW
// Shared site functionality

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      navMenu.classList.toggle("active");
    });

    document.addEventListener("click", (event) => {
      if (
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        navMenu.classList.remove("active");
      }
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });

    window.addEventListener("scroll", () => {
      navMenu.classList.remove("active");
    });
  }

  // Back-to-top button
  const backToTopBtn = document.getElementById("backToTop");

  if (backToTopBtn) {
    const updateBackToTop = () => {
  const scrollable =
    document.documentElement.scrollHeight - window.innerHeight;
  const halfway = scrollable / 2;

  if (window.scrollY > halfway) {
        backToTopBtn.classList.add("show");
        backToTopBtn.classList.remove("hide");
      } else {
        backToTopBtn.classList.add("hide");
        backToTopBtn.classList.remove("show");
      }
    };

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // Track clicks on the primary booking button
  const bookBtn = document.getElementById("book-button");

  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      if (typeof gtag === "function") {
        gtag("event", "book_click", {
          event_category: "engagement",
          event_label: "Top Book Button",
          value: 1
        });
      }
    });
  }
});