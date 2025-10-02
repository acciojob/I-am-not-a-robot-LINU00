const images = ["img1", "img2", "img3", "img4", "img5"];
let selectedImages = [];
const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setupImages() {
  imageContainer.innerHTML = "";
  para.textContent = "";
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  let imgs = [...images];
  const duplicateIndex = Math.floor(Math.random() * imgs.length);
  imgs.push(imgs[duplicateIndex]);
  imgs = shuffle(imgs);
  imgs.forEach((imgClass, index) => {
    const img = document.createElement("img");
    img.className = imgClass;
    img.dataset.id = imgClass;
    img.addEventListener("click", () => handleClick(img));
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

resetBtn.addEventListener("click", () => {
  setupImages();
});

verifyBtn.addEventListener("click", () => {
  const [img1, img2] = selectedImages;
  if (img1.dataset.id === img2.dataset.id) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  verifyBtn.style.display = "none";
});

window.onload = setupImages;
//your code here
const images = ["img1", "img2", "img3", "img4", "img5"];
let selectedImages = [];
const imageContainer = document.getElementById("image-container");
const resetBtn = document.getElementById("reset");
const verifyBtn = document.getElementById("verify");
const para = document.getElementById("para");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setupImages() {
  imageContainer.innerHTML = "";
  para.textContent = "";
  selectedImages = [];
  resetBtn.style.display = "none";
  verifyBtn.style.display = "none";
  let imgs = [...images];
  const duplicateIndex = Math.floor(Math.random() * imgs.length);
  imgs.push(imgs[duplicateIndex]);
  imgs = shuffle(imgs);
  imgs.forEach((imgClass, index) => {
    const img = document.createElement("img");
    img.className = imgClass;
    img.dataset.id = imgClass;
    img.addEventListener("click", () => handleClick(img));
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

resetBtn.addEventListener("click", () => {
  setupImages();
});

verifyBtn.addEventListener("click", () => {
  const [img1, img2] = selectedImages;
  if (img1.dataset.id === img2.dataset.id) {
    para.textContent = "You are a human. Congratulations!";
  } else {
    para.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  verifyBtn.style.display = "none";
});

window.onload = setupImages;
