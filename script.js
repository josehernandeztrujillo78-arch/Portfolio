// --- Animaciones de aparición ---
      const fadeElements = document.querySelectorAll(".fade-in");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      });
      fadeElements.forEach((el) => observer.observe(el));

      // --- Animación de títulos ---
      const sectionTitles = document.querySelectorAll(".section-title");
      const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-title");
          else entry.target.classList.remove("animate-title");
        });
      });
      sectionTitles.forEach((title) => titleObserver.observe(title));

      // --- Slider de proyectos ---
      const slider = document.querySelector(".projects-slider");
      const prev = document.querySelector(".prev");
      const next = document.querySelector(".next");

      next.addEventListener("click", () => {
        slider.scrollBy({ left: 350, behavior: "smooth" });
      });

      prev.addEventListener("click", () => {
        slider.scrollBy({ left: -350, behavior: "smooth" });
      });

      // --- Deslizamiento automático ---
      setInterval(() => {
        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth - 5
        ) {
          slider.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          slider.scrollBy({ left: 350, behavior: "smooth" });
        }
      }, 5000); // cada 5 segundos

      const themeSelect = document.getElementById("themeSelect");

const mainIcon = document.getElementById("mainThemeIcon");
const options = document.getElementById("themeOptions");
const savedTheme = localStorage.getItem("theme");

// Aplicar tema guardado
if (savedTheme) {
  document.body.className = savedTheme;
  updateIcon(savedTheme);
}

// Click para mostrar/ocultar menú
mainIcon.addEventListener("click", () => {
  options.classList.toggle("hidden");
});

// Cambiar tema al seleccionar opción
document.querySelectorAll("#themeOptions button").forEach(option => {
  option.addEventListener("click", () => {
    const theme = option.dataset.theme;
    document.body.className = theme;
    updateIcon(theme);
    localStorage.setItem("theme", theme);
    options.classList.add("hidden");
  });
});

// Cambia el icono principal según el tema seleccionado
function updateIcon(theme) {
  const icons = {
    light: `<i class="fa-regular fa-sun"></i>`,
    dark: `<i class="fa-regular fa-moon"></i>`,
    retro: `<i class="fa-solid fa-gamepad"></i>`,
    cyberpunk: `<i class="fa-solid fa-robot"></i>`,
    paper: `<i class="fa-regular fa-file-lines"></i>`
  };

  mainIcon.innerHTML = icons[theme] || icons.dark;
}