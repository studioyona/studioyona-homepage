(() => {
  const currentYear = new Date().getFullYear();

  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = String(currentYear);
  });

  const isLocalPreview = () => {
    const { hostname, protocol } = window.location;
    return (
      protocol === "file:" ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "0.0.0.0" ||
      hostname === "::1"
    );
  };

  const createLocalStamphoHomePanel = (lang) => {
    const article = document.createElement("article");
    article.className = "app-panel";
    article.dataset.localPreviewOnly = "stampho";
    article.innerHTML =
      lang === "en"
        ? `
            <div class="app-copy">
              <p class="section-kicker">Second release</p>
              <h2 class="app-title">Stampho</h2>
              <p class="app-text">
                Made for adding useful stamps directly onto photos and videos. Capture, place text
                stamps, manage presets by category, and revisit edits in a lightweight flow.
              </p>
              <ul class="app-points">
                <li>Fast text stamps for photos and videos</li>
                <li>Category-based stamp presets</li>
                <li>The second planned release from Studio YONA</li>
              </ul>
              <div class="app-actions">
                <a class="button secondary" href="/en/apps/stampho/">View app</a>
                <a class="text-link" href="/en/apps/stampho/legal/privacy/">Privacy Policy</a>
                <a class="text-link" href="/en/apps/stampho/legal/terms/">Terms</a>
              </div>
            </div>
            <div class="app-visual app-visual-stampho" aria-hidden="true">
              <div class="visual-stamp-card">
                <span>DATE</span>
                <span>PLACE</span>
                <span>MEMO</span>
              </div>
            </div>
          `
        : `
            <div class="app-copy">
              <p class="section-kicker">Second release</p>
              <h2 class="app-title"><span class="app-title-main no-break">Stampho</span></h2>
              <p class="app-text">
                사진과 영상 위에 필요한 stamp를 바로 남기고 싶어서 만든 앱입니다.
                촬영, 텍스트 stamp, 카테고리별 preset, 재편집 흐름을 가볍게 이어 줍니다.
              </p>
              <ul class="app-points">
                <li>사진과 영상에 남기는 빠른 text stamp</li>
                <li>자주 쓰는 stamp preset과 카테고리 관리</li>
                <li>두 번째 출시 예정인 Studio YONA 앱</li>
              </ul>
              <div class="app-actions">
                <a class="button secondary" href="/ko/apps/stampho/">앱 소개 보기</a>
                <a class="text-link" href="/ko/apps/stampho/legal/privacy/">개인정보처리방침</a>
                <a class="text-link" href="/ko/apps/stampho/legal/terms/">이용약관</a>
              </div>
            </div>
            <div class="app-visual app-visual-stampho" aria-hidden="true">
              <div class="visual-stamp-card">
                <span>DATE</span>
                <span>PLACE</span>
                <span>MEMO</span>
              </div>
            </div>
          `;
    return article;
  };

  const createLocalStamphoAppsCard = (lang) => {
    const article = document.createElement("article");
    article.className = "card";
    article.dataset.localPreviewOnly = "stampho";
    article.innerHTML =
      lang === "en"
        ? `
            <span class="tag">Coming soon</span>
            <h3>Stampho</h3>
            <p>Add useful text stamps to photos and videos, then keep repeated records moving with category-based presets.</p>
            <div class="card-actions">
              <a class="button secondary" href="/en/apps/stampho/">Learn more</a>
            </div>
          `
        : `
            <span class="tag">출시 준비 중</span>
            <h3>Stampho</h3>
            <p>사진과 영상 위에 필요한 text stamp를 남기고, 카테고리별 preset으로 반복 기록을 더 쉽게 이어 가세요.</p>
            <div class="card-actions">
              <a class="button secondary" href="/ko/apps/stampho/">자세히 보기</a>
            </div>
          `;
    return article;
  };

  const addLocalStamphoPreview = () => {
    if (!isLocalPreview()) return;

    document.body.dataset.localPreview = "true";

    document.querySelectorAll(".home-page .apps-stack[data-lang-block]").forEach((stack) => {
      if (stack.querySelector('[data-local-preview-only="stampho"]')) return;
      const featured = stack.querySelector(".app-panel-featured");
      if (!featured) return;
      const panel = createLocalStamphoHomePanel(stack.dataset.langBlock);
      featured.insertAdjacentElement("afterend", panel);
    });

    document.querySelectorAll(".compact-page .section[data-lang-block] .card-grid").forEach((grid) => {
      if (grid.querySelector('[data-local-preview-only="stampho"]')) return;
      const section = grid.closest("[data-lang-block]");
      const firstCard = grid.querySelector(".card");
      if (!section || !firstCard) return;
      const card = createLocalStamphoAppsCard(section.dataset.langBlock);
      firstCard.insertAdjacentElement("afterend", card);
    });
  };

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
  addLocalStamphoPreview();

  const menu = document.querySelector("[data-menu]");
  const menuToggles = document.querySelectorAll("[data-menu-toggle]");
  const menuClosers = document.querySelectorAll("[data-menu-close]");

  const syncMenuState = (expanded) => {
    menuToggles.forEach((button) => {
      button.setAttribute("aria-expanded", expanded ? "true" : "false");
    });
  };

  const closeMenu = () => {
    if (!menu) return;
    menu.hidden = true;
    document.body.classList.remove("menu-open");
    syncMenuState(false);
  };

  const openMenu = () => {
    if (!menu) return;
    menu.hidden = false;
    document.body.classList.add("menu-open");
    syncMenuState(true);
  };

  if (menu) {
    menuToggles.forEach((button) => {
      button.addEventListener("click", () => {
        if (menu.hidden) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    });

    menuClosers.forEach((button) => {
      button.addEventListener("click", () => {
        closeMenu();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        closeMenu();
      }
    });
  }

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
