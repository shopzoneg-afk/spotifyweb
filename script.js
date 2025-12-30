import { exportPNG } from "./export.js";

const preview = document.getElementById("preview");

async function getAlbumData(albumId) {
  const url = `https://open.spotify.com/oembed?url=https://open.spotify.com/album/${albumId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Album not found");
  const data = await res.json();

  // Separar título y artista
  const parts = data.title.split(" - ");
  return {
    album: parts[0],
    artist: parts[1] || "",
    cover: data.thumbnail_url
  };
}

document.getElementById("create").onclick = async () => {
  const albumId = document.getElementById("albumId").value.trim();
  if (!albumId) {
    alert("Enter a Spotify Album ID");
    return;
  }

  try {
    const data = await getAlbumData(albumId);
    window.__POSTER_DATA__ = data;

    preview.innerHTML = `
      <svg width="300" height="450" viewBox="0 0 300 450">
        <rect width="100%" height="100%" fill="#fff"/>
        <image href="${data.cover}" x="30" y="30" width="240" height="240"/>
        <text x="150" y="330" font-size="16" text-anchor="middle">
          ${data.album}
        </text>
        <text x="150" y="355" font-size="12" text-anchor="middle" fill="#666">
          ${data.artist}
        </text>
      </svg>
    `;
  } catch (err) {
    alert("Invalid album ID");
  }
};

document.getElementById("save").onclick = () => {
  if (!window.__POSTER_DATA__) {
    alert("Create poster first");
    return;
  }
  exportPNG(window.__POSTER_DATA__);
};
