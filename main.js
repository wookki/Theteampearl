const windowWidth = window.matchMedia("screen and (max-width: 768px)");
const icon = document.querySelector('.header .inner .material-icons');
const downloadBox = document.querySelector('.header .download__box');
let isHideDownloadBox = false;

icon.addEventListener('click', function () {
  isHideDownloadBox = !isHideDownloadBox;
  if (isHideDownloadBox) {
    downloadBox.classList.add('hide')
  } else {
    downloadBox.classList.remove('hide')
  }
})
