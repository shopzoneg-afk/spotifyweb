import { RATIOS } from "./ratios.js";
import { generatePosterSVG } from "./poster.js";

export function exportPNG(data) {
  const ratioKey = document.getElementById("ratio").value;
  const size = RATIOS[ratioKey];

  const svg = generatePosterSVG(data, {}, size);
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = size.w;
    canvas.height = size.h;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    const a = document.createElement("a");
    a.download = `poster-${ratioKey}-300dpi.png`;
    a.href = canvas.toDataURL("image/png");
    a.click();

    URL.revokeObjectURL(url);
  };
  img.src = url;
}
