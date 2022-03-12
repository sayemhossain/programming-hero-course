let photos = [
  "img/action.png",
  "img/airpod.png",
  "img/camera.png",
  "img/drone.png",
  "img/mic.png",
  "img/setup.png",
  "img/tripod.png",
];
let photosIndex = 0;
setInterval(() => {
  const photosUrl = photos[photosIndex];
  console.log(photosUrl);
  photosIndex++;
}, 1000);
