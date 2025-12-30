export function generatePosterSVG(data, options, size) {
  const { w, h } = size;

  return `
<svg xmlns="http://www.w3.org/2000/svg"
     width="${w}" height="${h}"
     viewBox="0 0 ${w} ${h}">

  <rect width="100%" height="100%" fill="#ffffff"/>

  <image href="${data.cover}"
         x="${w*0.1}"
         y="${h*0.05}"
         width="${w*0.8}"
         height="${w*0.8}" />

  <text x="${w/2}"
        y="${h*0.92}"
        font-size="180"
        text-anchor="middle"
        font-family="Arial"
        fill="#000">
    ${data.album}
  </text>

</svg>`;
}
