function changeLanguage(lang) {

  const elements = document.querySelectorAll("[data-pt]");

  elements.forEach(el => {

    const translation = el.getAttribute(`data-${lang}`);

    if (translation) {
      el.textContent = translation;
    }

  });

  localStorage.setItem("language", lang);
}

window.addEventListener("DOMContentLoaded", () => {

  const savedLang =
    localStorage.getItem("language") || "pt";

  changeLanguage(savedLang);

});