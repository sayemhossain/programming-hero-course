let photos = [
  "img/action.png",
  "img/airpod.png",
  "img/camera.png",
  "img/drone.png",
  "img/mic.png",
  "img/setup.png",
  "img/tripod.png",
];
const imgId = document.getElementById("photo-slider");
let photosIndex = 0;
setInterval(() => {
  if (photosIndex > photos.length - 1) {
    photosIndex = 0;
  }
  const photosUrl = photos[photosIndex];
  imgId.setAttribute("src", photosUrl);
  photosIndex++;
}, 1000);
