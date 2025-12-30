import { exportPNG } from "./export.js";

const preview = document.getElementById("preview");

document.getElementById("create").onclick = () => {
  // Demo data (replace later with Spotify API)
  preview.innerHTML = `
    <svg width="600" height="900" viewBox="0 0 600 900">
      <rect width="100%" height="100%" fill="#fff"/>
      <rect x="60" y="60" width="480" height="480" fill="#ddd"/>
      <text x="300" y="700" font-size="32" text-anchor="middle">Album Title</text>
    </svg>
  `;
};

document.getElementById("save").onclick = () => {
  const data = {
    album: "Album Title",
    cover: "https://via.placeholder.com/1500"
  };
  exportPNG(data);
};
