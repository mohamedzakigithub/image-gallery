import "../styles/style.scss";

const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const overlay = document.querySelectorAll(".imageDiv");
const span = document.getElementsByClassName("close")[0];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const imageUrl = urlParams.get("image");

if (queryString) {
  showModal(imageUrl + ".jpg");
}

overlay.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event);
    handleClick(event);
  });
});

function handleClick(event) {
  console.log(event);
  const targetUrl = event.target.dataset.id;
  window.location.href = "?image=" + targetUrl;
}

function showModal(imageId) {
  modalImage.src = "./images/" + imageId;
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
