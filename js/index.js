const tiers = [
  {
    name: "Based",
    color: "rgb(255, 127, 127)",
  },
  {
    name: "DTC",
    color: "rgb(255, 223, 127)",
  },
  {
    name: "Sometimes",
    color: "rgb(191, 255, 127)",
  },
  {
    name: "Bad",
    color: "rgb(255, 255, 127)",
  },
  {
    name: "Never",
    color: "rgb(127, 191, 255)",
  },
  {
    name: "Trash",
    color: "rgb(127, 127, 255)",
  },
];

const editors = [
  {
    name: "Vim",
  },
  {
    name: "Vscode",
  },
  {
    name: "DreamWeaver",
  },
  {
    name: "Nano",
    imagePath: "nano.png",
  },
];
// elements
const tierGrid = document.querySelector(".grid");

let tierRows = [];
for (const tier of tiers) {
  const tierRow = document.createElement("div");
  tierRow.classList.add("grid-item");
  tierRow.classList.add("flex");
  const tierRowHeader = document.createElement("div");
  const text = document.createElement("p");
  text.textContent = tier.name;
  tierRowHeader.appendChild(text);
  tierRowHeader.style.backgroundColor = tier.color;
  tierRowHeader.classList.add("flex-item");
  tierRow.append(tierRowHeader);
  tierRows.push(tierRow);
}
tierGrid.append(...tierRows);

// event listeners
document.addEventListener("keydown", (e) => {
  if (!e.code.includes("Digit")) return;
  if (+e.key >= tiers.length + 1) return;
  const editorLogo = new Image(100, 100);
  editorLogo.src = "./public/images/nano.png";
  editorLogo.classList.add("logo-nano");
  tierGrid.children[+e.key - 1].append(editorLogo);
  // remove other nano logos
  const nanoLogos = document.querySelectorAll(".logo-nano");
  if (!!nanoLogos.length) {
    nanoLogos.forEach((logo) => {
      if (logo !== editorLogo) logo.remove();
    });
  }
});
