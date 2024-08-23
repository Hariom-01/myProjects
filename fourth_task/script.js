let theme = false;

function swapTheme() {
  if (theme) {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  } else {

    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }

  theme = !theme;
}

function toggleVisibility() {
  let element = document.getElementById("useless-paragraph");
  if (element.style.display === "none") {
    element.style.display = "block";
  }
  else {
    element.style.display = "none";
  }
}