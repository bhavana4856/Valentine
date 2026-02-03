const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const askScreen = document.getElementById("askScreen");
const resultScreen = document.getElementById("resultScreen");

// Move NO button to a random spot inside the viewport
function moveNoButton() {
  const padding = 20;

  const btnRect = noBtn.getBoundingClientRect();
  const btnW = btnRect.width || 120;
  const btnH = btnRect.height || 50;

  const maxX = window.innerWidth - btnW - padding;
  const maxY = window.innerHeight - btnH - padding;

  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Make NO run away when user tries to click/hover/touch it
["mouseenter", "mousedown", "touchstart", "click"].forEach(evt => {
  noBtn.addEventListener(evt, (e) => {
    e.preventDefault();
    moveNoButton();
  }, { passive: false });
});

// YES click -> show result screen
yesBtn.addEventListener("click", () => {
  askScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
});

// Start NO button at a random place
window.addEventListener("load", moveNoButton);
window.addEventListener("resize", moveNoButton);
