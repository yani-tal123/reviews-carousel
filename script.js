const reviews = [{
  id: 1,
  name: "Jane Cooper",
  job: "Web Designer"
}, {
  id: 2,
  name: "Cody Fisher",
  job: "Dog Trainer"
}, {
  id: 3,
  name: "Guy Hawkins",
  job: "Medical Assistant"
}, {
  id: 4,
  name: "Wade Warren",
  job: "President of Sales"
}];

let reviewContainer = document.getElementById("review");
let currentReview = reviews[0];

function generateReview(reviewNum) {
  const newReview = reviews[reviewNum - 1];
  reviewContainer.innerHTML = `
  <div id="image-container">
    <img src="avatar${newReview.id}.png">
    <div id="quotations">”</div>
  </div>

  <h2>${newReview.name}</h2>
  <h4>${newReview.job}</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat.</p>
  <div id="arrows-wrapper">
    <button id="left-arrow">←</button>
    <button id="right-arrow">→</button>
  </div>
  <button id="surprise-button">Surprise me</button>
`;

  goToPrevious();
  goToNext();
  currentReview = newReview;
}

goToPrevious();
goToNext();

function goToPrevious() {
  const leftArrow = document.getElementById("left-arrow");
  leftArrow.addEventListener("click", (button) => {
    if (currentReview.id === 1) {
      generateReview(4);
    } else {
      generateReview(currentReview.id - 1);
    }
  });
}

function goToNext() {
  const rightArrow = document.getElementById("right-arrow");
  rightArrow.addEventListener("click", (button) => {
    if (currentReview.id === 4) {
      generateReview(1);
    } else {
      generateReview(currentReview.id + 1);
    }
  });
}