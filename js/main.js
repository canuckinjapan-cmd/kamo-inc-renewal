// Global JS interactions for Kamo Inc. static ecosystem

// Current Year Auto-injector
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("footer-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }
  
  // Header Scroll handler
  const header = document.getElementById("site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.classList.remove("border-transparent", "shadow-none");
        header.classList.add("border-ink/10", "shadow-[0_12px_40px_rgba(14,14,14,0.06)]");
      } else {
        header.classList.remove("border-ink/10", "shadow-[0_12px_40px_rgba(14,14,14,0.06)]");
        header.classList.add("border-transparent", "shadow-none");
      }
    }, { passive: true });
  }

  // Language state recovery
  initLang();
});

// Full language switching framework
function initLang() {
  const stored = localStorage.getItem("kamo-lang") || "en";
  setLang(stored);
}

function setLang(lang) {
  localStorage.setItem("kamo-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  
  // Update page-wide styles rule to prevent display flickers
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

  flagEnImgs.forEach(img => {
    if (lang === "en") {
      img.className = "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-100 opacity-100 cursor-default";
    } else {
      img.className = "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer";
    }
  });

  flagJpImgs.forEach(img => {
    if (lang === "jp") {
      img.className = "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-100 opacity-100 cursor-default";
    } else {
      img.className = "h-[18px] w-auto object-contain rounded-[2px] border border-ink/10 shadow-xs brightness-[0.75] opacity-70 hover:brightness-100 hover:opacity-100 cursor-pointer";
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
