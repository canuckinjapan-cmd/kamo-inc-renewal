// Global JS interactions for Kamo Inc. static ecosystem

// Current Year Auto-injector & Initialization flow
function init() {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Header Scroll handler
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 10) {
          header.classList.remove("border-transparent", "shadow-none");
          header.classList.add("border-ink/10", "shadow-[0_12px_40px_rgba(14,14,14,0.06)]");
        } else {
          header.classList.remove("border-ink/10", "shadow-[0_12px_40px_rgba(14,14,14,0.06)]");
          header.classList.add("border-transparent", "shadow-none");
        }
      },
      { passive: true },
    );
  }

  // Bind modern attributes dynamically to prevent CSP/inline script issues
  bindEvents();

  // Language state recovery
  initLang();

  // Initialize animated metric counters
  initCounters();

  // Initialize parallax scrolling for hero
  initParallax();
}

function bindEvents() {
  // Bind language switch buttons
  document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang-switch");
      if (lang) setLang(lang);
    });
  });

  // Bind mobile menu toggle buttons
  document.querySelectorAll("[data-mobile-menu-toggle]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const action = btn.getAttribute("data-mobile-menu-toggle");
      toggleMobileMenu(action === "open");
    });
  });

  // Bind contact form if present
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactSubmit);
  }
}

function handleContactSubmit(e) {
  e.preventDefault();

  const form = document.getElementById("contact-form");
  const successBlock = document.getElementById("contact-success-block");
  if (!form || !successBlock) return;

  const nameInput = document.getElementById("form-name");
  const emailInput = document.getElementById("form-email");
  const messageInput = document.getElementById("form-message");

  const nameVal = nameInput ? nameInput.value.trim() : "";
  const emailVal = emailInput ? emailInput.value.trim() : "";
  const messageVal = messageInput ? messageInput.value.trim() : "";

  const errName = document.getElementById("error-name");
  const errEmail = document.getElementById("error-email");
  const errMessage = document.getElementById("error-message");

  let hasError = false;

  // Validate Name
  if (nameVal.length === 0) {
    if (errName) errName.classList.remove("hidden");
    hasError = true;
  } else {
    if (errName) errName.classList.add("hidden");
  }

  // Validate Email (simple matching)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailVal)) {
    if (errEmail) errEmail.classList.remove("hidden");
    hasError = true;
  } else {
    if (errEmail) errEmail.classList.add("hidden");
  }

  // Validate Message
  if (messageVal.length < 5) {
    if (errMessage) errMessage.classList.remove("hidden");
    hasError = true;
  } else {
    if (errMessage) errMessage.classList.add("hidden");
  }

  if (!hasError) {
    // Success: hide form, show block
    form.classList.add("hidden");
    successBlock.classList.remove("hidden");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Full language switching framework
function initLang() {
  let stored = null;
  try {
    if (
      typeof localStorage !== "undefined" &&
      localStorage &&
      typeof localStorage.getItem === "function"
    ) {
      stored = localStorage.getItem("kamo_lang") || localStorage.getItem("kamo-lang");
    }
  } catch (e) {
    // Falls back silently when localStorage is restricted
  }

  const isJpPage =
    window.location.pathname.includes("/ja/") || window.location.pathname.endsWith("/ja");

  if (!stored) {
    // Detect browser language (not region detection)
    var userLangs = navigator.languages || [navigator.language || navigator.userLanguage || ""];
    var isJapanese = false;
    for (var i = 0; i < userLangs.length; i++) {
      if (userLangs[i] && userLangs[i].toLowerCase().indexOf("ja") === 0) {
        isJapanese = true;
        break;
      }
    }
    stored = isJapanese ? "ja" : "en";
    try {
      if (
        typeof localStorage !== "undefined" &&
        localStorage &&
        typeof localStorage.setItem === "function"
      ) {
        localStorage.setItem("kamo_lang", stored);
        localStorage.setItem("kamo-lang", stored);
      }
    } catch (e) {}
  }

  if (stored === "ja" && !isJpPage) {
    window.location.replace(window.location.pathname.includes("/ja") ? "./" : "ja/");
    return;
  } else if (stored === "en" && isJpPage) {
    window.location.replace("../");
    return;
  }

  setLangState(isJpPage ? "ja" : "en");
}

function setLang(lang) {
  const normLang = lang === "ja" || lang === "jp" ? "ja" : "en";
  try {
    if (
      typeof localStorage !== "undefined" &&
      localStorage &&
      typeof localStorage.setItem === "function"
    ) {
      localStorage.setItem("kamo_lang", normLang);
      localStorage.setItem("kamo-lang", normLang);
    }
  } catch (e) {
    // Falls back silently
  }

  const isJpPage =
    window.location.pathname.includes("/ja/") || window.location.pathname.endsWith("/ja");

  if (normLang === "en" && isJpPage) {
    window.location.href = "../";
    return;
  } else if (normLang === "ja" && !isJpPage) {
    window.location.href = "ja/";
    return;
  }

  setLangState(normLang);
}

function setLangState(lang) {
  document.documentElement.setAttribute("lang", lang);

  // Update page-wide styles rule if needed
  let style = document.getElementById("lang-loader-style");
  if (!style) {
    style = document.createElement("style");
    style.id = "lang-loader-style";
    document.head.appendChild(style);
  }

  if (lang === "en") {
    style.textContent = `
      .lang-jp { display: none !important; }
      .lang-en { display: inline-block; }
      p.lang-en, div.lang-en, section.lang-en, h1.lang-en, h2.lang-en, h3.lang-en { display: block; }
    `;
  } else {
    style.textContent = `
      .lang-en { display: none !important; }
      .lang-jp { display: inline-block; }
      p.lang-jp, div.lang-jp, section.lang-jp, h1.lang-jp, h2.lang-jp, h3.lang-jp { display: block; }
    `;
  }

  // Header active buttons highlights
  const flagEnImgs = document.querySelectorAll("#flag-en-img, .mobile-flag-en");
  const flagJpImgs = document.querySelectorAll("#flag-jp-img, .mobile-flag-jp");

  flagEnImgs.forEach((img) => {
    if (lang === "en") {
      img.className =
        "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-100 opacity-100 cursor-default";
    } else {
      img.className =
        "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer";
    }
  });

  flagJpImgs.forEach((img) => {
    if (lang === "ja" || lang === "jp") {
      img.className =
        "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-100 opacity-100 cursor-default";
    } else {
      img.className =
        "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer";
    }
  });
}

// Mobile side-drawer menu slide logic
function toggleMobileMenu(isOpen) {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;

  if (isOpen) {
    menu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    menu.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Parallax scroll effect for hero background
function initParallax() {
  const parallaxBg = document.getElementById("hero-background-parallax");
  if (!parallaxBg) return;

  // Use requestAnimationFrame for smooth perf
  let ticking = false;

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          // Adjust multiplier for parallax strength. 0.3 moves it slower than scroll.
          // It moves down relative to the container as we scroll down.
          parallaxBg.style.transform = `scale(1.15) translateY(${scrolled * 0.4 - 35}px)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );
}

// Meter counter animation with progressive enhancement
function initCounters() {
  const stats = [
    { id: "stat-carbon", target: 100, suffix: "+" },
    { id: "stat-experience", target: 35, suffix: "+" },
    { id: "stat-clients", target: 20, suffix: "+" },
  ];

  // If IntersectionObserver is not supported, just leave HTML as is (pre-rendered final numbers)
  if (!("IntersectionObserver" in window)) {
    return;
  }

  // Reset values to zero for count-up animation only if observer is active
  stats.forEach((stat) => {
    const el = document.getElementById(stat.id);
    if (el) {
      el.textContent = "0" + stat.suffix;
    }
  });

  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const startTimePage = performance.now();
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        // Synchronize with CSS fade-in delay (2.1s)
        const elapsedSinceLoad = performance.now() - startTimePage;
        const delayNeeded = Math.max(0, 2100 - elapsedSinceLoad);

        if (delayNeeded > 0) {
          setTimeout(animateStats, delayNeeded);
        } else {
          animateStats();
        }
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const meterSection = document.getElementById("hero-meter-section");
  if (meterSection) {
    observer.observe(meterSection);
  }

  function animateStats() {
    stats.forEach((stat) => {
      const el = document.getElementById(stat.id);
      if (!el) return;

      const duration = 1500; // ms transition duration
      const startValue = 0;
      const endValue = stat.target;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function - easeOutQuad
        const easeProgress = progress * (2 - progress);
        const currentValue = Math.floor(startValue + easeProgress * (endValue - startValue));

        el.textContent = currentValue + stat.suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = endValue + stat.suffix;
        }
      }

      requestAnimationFrame(update);
    });
  }
}

// Expose legacy functions globally to prevent any inline call errors
window.setLang = setLang;
window.toggleMobileMenu = toggleMobileMenu;
window.handleContactSubmit = handleContactSubmit;
