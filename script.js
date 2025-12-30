import { exportPNG } from "./export.js";

const preview = document.getElementById("preview");

document.getElementById("create").onclick = async () => {
  const albumId = document.getElementById("albumId").value.trim();
  if (!albumId) {
    alert("Enter a Spotify Album ID");
    return;
  }

  // 🔹 DEMO DATA (para probar render)
  const data = {
    album: "Demo Album Title",
    cover: "https://i.scdn.co/image/ab67616d0000b273e0f2c3d0f9c8f0b7a6e4e3d2"
  };

  preview.innerHTML = `
    <svg width="300" height="450" viewBox="0 0 300 450">
      <rect width="100%" height="100%" fill="#fff"/>
      <image href="${data.cover}" x="30" y="30" width="240" height="240"/>
      <text x="150" y="340" font-size="18" text-anchor="middle">
        ${data.album}
      </text>
    </svg>
  `;

  window.__POSTER_DATA__ = data;
};

document.getElementById("save").onclick = () => {
  if (!window.__POSTER_DATA__) {
    alert("Create poster first");
    return;
  }
  exportPNG(window.__POSTER_DATA__);
};
