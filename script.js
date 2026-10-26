const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;
function updateCounter() {
  counterValue.textContent = count;
}
increaseBtn.addEventListener("click", function () {
  count++;
  updateCounter();
});
decreaseBtn.addEventListener("click", function () {
  if (count > 0) {
    count--;
  }
  updateCounter();
});
resetBtn.addEventListener("click", function () {
  count = 0;
  updateCounter();
});
updateCounter();
 
const previewInput = document.getElementById("previewInput");
const previewText = document.getElementById("previewText");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");
const placeholderText = "Your text will appear here";
function updatePreview() {
  const text = previewInput.value;
 
  if (text === "") {
    previewText.textContent = placeholderText;
    previewText.classList.add("empty");
  } else {
    previewText.textContent = text;
    previewText.classList.remove("empty");
  }
 
  charCount.textContent = text.length;
}
previewInput.addEventListener("input", updatePreview);
clearBtn.addEventListener("click", function () {
  previewInput.value = "";
  updatePreview();
  previewInput.focus();
});
updatePreview();
 
 
const imageSelect = document.getElementById("imageSelect");
const mainImage = document.getElementById("mainImage");
const imageCaption = document.getElementById("imageCaption");
const images = {
  concert: {
    src: "images/concert.jpg",
    alt: "Musician with a guitar on a stage under spotlights",
    caption: "Concert: a live performance on stage"
  },
  festival: {
    src: "images/festival.jpg",
    alt: "Festival tents and mountains at sunset with colourful flags",
    caption: "Festival: an open-air music event at sunset"
  },
  club: {
    src: "images/club.jpg",
    alt: "Night club with neon light stripes and a disco ball",
    caption: "Club night: a party with neon lights"
  }
};
function changeImage() {
  const chosen = images[imageSelect.value];
 
  mainImage.src = chosen.src;
  mainImage.alt = chosen.alt;
  imageCaption.textContent = chosen.caption;
}
imageSelect.addEventListener("change", changeImage);
changeImage();
 
 
const keyForm = document.getElementById("keyForm");
const keyInput = document.getElementById("keyInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyInput.addEventListener("keydown", function (event) {
  keyStatus.textContent = "Last key pressed: " + event.key;
 
  if (event.key === "Enter") {
    event.preventDefault();
    keyResult.textContent = keyInput.value;
  }
 
  if (event.key === "Escape") {
    keyInput.value = "";
    keyResult.textContent = "";
  }
});
 
keyForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
 

const focusCard = document.getElementById("focusCard");
const cardInfo = document.getElementById("cardInfo");
 
const defaultInfo = "Move the mouse over the card or press Tab to focus it.";
const activeInfo = "The card is highlighted!";
 
function highlightCard() {
  focusCard.classList.add("highlight");
  cardInfo.textContent = activeInfo;
}
function resetCard() {
  focusCard.classList.remove("highlight");
  cardInfo.textContent = defaultInfo;
}
focusCard.addEventListener("mouseenter", highlightCard);
focusCard.addEventListener("mouseleave", resetCard);
focusCard.addEventListener("focus", highlightCard);
focusCard.addEventListener("blur", resetCard);