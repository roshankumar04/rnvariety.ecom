
const showInfoButton = document.getElementById("showInfoButton");
const developerInfo = document.getElementById("developerInfo");

showInfoButton.addEventListener("click", function() {
  if (developerInfo.style.display === "none" || developerInfo.style.display === "") {
    developerInfo.style.display = "block";
    showInfoButton.textContent = "Hide Developer Info";
  } else {
    developerInfo.style.display = "none";
    showInfoButton.textContent = "Show Developer Info";
  }
});

const showInfostore = document.getElementById("showInfostore");
const storeInfo = document.getElementById("storeInfo");

showInfostore.addEventListener("click", function() {
  if (storeInfo.style.display === "none" || storeInfo.style.display === "") {
    storeInfo.style.display = "block";
    showInfostore.textContent = "Hide store Info";
  } else {
    storeInfo.style.display = "none";
    showInfostore.textContent = "Show store Info";
  }
});
