const themeButton = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("devlinks-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("devlinks-theme", theme);
});
