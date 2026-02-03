const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const askScreen = document.getElementById("askScreen");
const resultScreen = document.getElementById("resultScreen");

let dodgeCount = 0;

function moveNoButton() {
  noBtn.style.position = "fixed";   // becomes floating only when dodging

  const padding = 16;
  const rect = noBtn.getBoundingClientRect();
  const btnW = rect.width || 80;
  const btnH = rect.height || 40;

  const maxX = window.innerWidth - btnW - padding;
  const maxY = window.innerHeight - btnH - padding;

  const x = Math.random() * (maxX - padding) + padding;
  const y = Math.random() * (maxY - padding) + padding;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}


// optional viral effect: YES grows a little each time NO dodges
function growYes() {
  dodgeCount += 1;
  const scale = 1 + Math.min(dodgeCount * 0.06, 0.6); // max 1.6x
  yesBtn.style.transform = `scale(${scale})`;
}

["mouseenter", "mousedown", "touchstart", "click"].forEach(evt => {
  noBtn.addEventListener(evt, (e) => {
    e.preventDefault();
    moveNoButton();
    growYes();
  }, { passive: false });
});

yesBtn.addEventListener("click", () => {
  askScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
});

window.addEventListener("load", () => {
  // keep No visible at start; don't move immediately
});

window.addEventListener("resize", moveNoButton);
