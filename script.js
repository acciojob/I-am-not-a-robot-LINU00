var images = ["img1", "img2", "img3", "img4", "img5"];
var selectedImages = [];
var imageContainer = document.getElementById("image-container");
var resetBtn = document.getElementById("reset");
var verifyBtn = document.getElementById("verify");
var para = document.getElementById("para");

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function setupImages() {
  imageContainer.innerHTML = "";
  para.textContent = "";
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  var imgs = images.slice();
  var duplicateIndex = Math.floor(Math.random() * imgs.length);
  imgs.push(imgs[duplicateIndex]);
  imgs = shuffle(imgs);
  imgs.forEach(function(imgClass) {
    var img = document.createElement("img");
    img.className = imgClass;
    img.dataset.id = imgClass;
    img.addEventListener("click", function() {
      handleClick(img);
    });
    imageContainer.appendChild(img);
  });
}

function handleClick(img) {
  if (selectedImages.includes(img)) return;
  if (selectedImages.length < 2) {
    img.classList.add("selected");
    selectedImages.push(img);
    resetBtn.style.display = "inline-block";
    if (selectedImages.length === 2) verifyBtn.style.display = "inline-block";
  }
}

resetBtn.addEventListener("click", function() {
  setupImages();
});

verifyBtn.addEventListener("click", function() {
  var img1 = selectedImages[0];
  var img2 = selectedImages[1];
  if (img1.dataset.id === img2.dataset.id) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  verifyBtn.style.display = "none";
});

window.onload = setupImages;
