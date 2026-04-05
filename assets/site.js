(() => {
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(currentYear);
  });

  const getLanguage = () => {
    const search = new URLSearchParams(window.location.search);
    return search.get("lang") === "en" ? "en" : "ko";
  };

  const setLanguageUrl = (lang) => {
    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.set("lang", "en");
    } else {
      url.searchParams.delete("lang");
    }
    return `${url.pathname}${url.search}${url.hash}`;
  };

  const applyLanguage = (lang) => {
    document.documentElement.lang = lang;
    document.body.dataset.activeLang = lang;

    const { dataset } = document.body;
    const title = lang === "en" ? dataset.titleEn : dataset.titleKo;
    const description = lang === "en" ? dataset.descriptionEn : dataset.descriptionKo;

    if (title) {
      document.title = title;
    }

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta && description) {
      descriptionMeta.setAttribute("content", description);
    }

    document.querySelectorAll("[data-lang-block]").forEach((node) => {
      node.hidden = node.dataset.langBlock !== lang;
    });

    document.querySelectorAll("[data-lang-inline]").forEach((node) => {
      node.hidden = node.dataset.langInline !== lang;
    });

    document.querySelectorAll("[data-href-ko][data-href-en]").forEach((node) => {
      const href = lang === "en" ? node.dataset.hrefEn : node.dataset.hrefKo;
      if (href) {
        node.setAttribute("href", href);
      }
    });

    document.querySelectorAll("[data-set-lang]").forEach((node) => {
      const target = node.dataset.setLang;
      const isCurrent = target === lang;
      node.setAttribute("href", setLanguageUrl(target));
      if (isCurrent) {
        node.setAttribute("aria-current", "page");
      } else {
        node.removeAttribute("aria-current");
      }
    });
  };

  const path = window.location.pathname.replace(/\/+$/, "/");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    try {
      const linkPath = new URL(href, window.location.origin).pathname.replace(/\/+$/, "/");
      if (linkPath === path || (linkPath !== "/" && path.startsWith(linkPath))) {
        link.setAttribute("aria-current", "page");
      }
    } catch {
      return;
    }
  });

  document.querySelectorAll("[data-set-lang]").forEach((node) => {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      const target = node.dataset.setLang === "en" ? "en" : "ko";
      window.history.replaceState(null, "", setLanguageUrl(target));
      applyLanguage(target);
    });
  });

  applyLanguage(getLanguage());

  const revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealTargets.length > 0) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.14 }
    );

    revealTargets.forEach((element) => observer.observe(element));
  } else {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
  }
})();
