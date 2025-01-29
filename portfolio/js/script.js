// ダークモード設定
document.documentElement.classList.toggle(
  "dark",
  localStorage.currentTheme == "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme:dark)").matches)
);

localStorage.currentTheme = "light";
localStorage.currentTheme = "dark";
localStorage.removeItem("theme");
