const inputFile = document.getElementById("inputFile");
const inputTypeImage = document.getElementById("fileTypeImage");
const inputTypeVideo = document.getElementById("fileTypeVideo");
const imgResult = document.querySelector(".input-result img");
const videoContainer = document.querySelector(".input-result video");
const sourceElement = document.getElementById("video-element");

inputFile.addEventListener("change", (event) => {
  imgResult.src = "";
  imgResult.height = 0;
  imgResult.width = 0;

  videoContainer.src = "";
  videoContainer.height = 0;
  videoContainer.width = 0;
  videoContainer.controls = false;

  const file = inputFile.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    const url = e.target.result;
    if (inputTypeImage.checked) {
      imgResult.height = 400;
      imgResult.width = 400;
      imgResult.src = url;
    } else {
      videoContainer.height = 400;
      videoContainer.width = 400;
      videoContainer.controls = true;
      videoContainer.src = url;
    }
  };
  reader.readAsDataURL(file);
});
