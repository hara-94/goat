export function switchVideo() {
  const video = document.getElementById("main-visual-video");
  const source = document.createElement("source");
  const currentWidth = window.innerWidth;
  const shouldStyleForPc = currentWidth > 810;

  source.src = shouldStyleForPc
    ? "https://goat-510.com/asset/video/main-movie.mp4"
    : "https://goat-510.com/asset/video/main-movie-sp.mp4";
  video.appendChild(source);
}
