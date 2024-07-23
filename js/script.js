const imageContainer = document.querySelector("#image-container");
const loader = document.querySelector("#loader");

// Unsplash API
const count = 5;
const myKeyWords = "human faces";
const accessKey = "qPCV1kb2qZjLZPyqQtHpL7O_AkdYE8ev-_RjLB6WixQ";

// Variables
let apiURL = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}&query=${myKeyWords}`;

let photosArray = [];
let readyToRun = false;
let currentImagesLoaded = 0;
let totalImages = 0;
let isInitialLoad = true;

// Helper Functions
function updateURL(newCount) {
  apiURL = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${newCount}&query=${myKeyWords}`;
}

function SetElementAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Called for Each individual Image
function ImageLoaded() {
  currentImagesLoaded++;
  if (currentImagesLoaded === totalImages) {
    readyToRun = true;
    loader.hidden = true;
  }
}

// Display Images
function DisplayPhotos() {
  totalImages = photosArray.length;
  currentImagesLoaded = 0;

  photosArray.forEach((photo) => {
    // Create Elements
    const myAchor = document.createElement("a");
    const myImg = document.createElement("img");

    // Setting Attributes
    SetElementAttributes(myAchor, {
      href: photo.links.html,
      target: "_blank",
    });

    SetElementAttributes(myImg, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    // Check if image is loaded
    myImg.addEventListener("load", ImageLoaded);

    // Append
    myAchor.appendChild(myImg);
    imageContainer.appendChild(myAchor);
  });
}
// Get Photos from Unsplash
async function GetPhotos() {
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      throw new Error("Problems with network response...");
    }
    photosArray = await response.json();
    DisplayPhotos();
    if (isInitialLoad) {
      updateURL(20);
    }
  } catch (error) {
    // Catch Error
    console.error("ERROR::: fetching data:", error);
  }
}

// Image Loader

// Check if scroll is near bottom
window.addEventListener("scroll", () => {
  // the distance from top of the page that was scrolled
  const scrolledFromTop = window.scrollY;

  // height of the viewport = the height of the window that you are seeing
  const windowHeight = window.innerHeight;

  // total height of the document
  const documentHeight = document.documentElement.scrollHeight;
  const THRESHOLD = 0.8 * documentHeight;
  if (scrolledFromTop + windowHeight >= THRESHOLD && readyToRun) {
    GetPhotos();
    readyToRun = false;
  }
});

// On Load
GetPhotos();
