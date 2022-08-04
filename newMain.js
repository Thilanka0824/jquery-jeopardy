let dataStream = null;

const readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  let data = await rawJeopardyData.json();
  //console.log(data);

  dataStream = _.groupBy(data, "value");
};

readJeopardyData();

const parent = document.getElementById("jeopardy");
const buttons = parent.querySelectorAll("button");

const displayArea = document.querySelector("#display-area");
const displayScore = document.querySelector("#score");
const inputBox = document.querySelector("#input-box");
const submitButton = document.querySelector("#submit-button");

let scoreKeeper = 0;

let qo = {};

const clear = () => {
  inputBox.value = "";
  displayArea.innerText = "";
  qo = {};
};

// submit button EVENT LISTENER
submitButton.addEventListener("click", () => {
  // after click, get value of input (IV)
  // compare if IV === QO.answer
  // if not equal, subtract from score, show error
  // if equal, add to score, show success message, then clear
});

// 1. click button, then disable
// 2. from that event target, we get identifier from which we can derive Dollar Amount (DA)
// 3. remove unnecessary characters from DA, ID
// 4. get array (AR) from JSON
// 5. using that identifier, we create a random number (RN)
// 6. we use RN as the index, and in the corresponding array for the DA, and set question Object (QO) from that index in array, and splice form array
// 7. in display area (DSA), populate with QO question.

const clickHandler = ({ target }) => {
  if (Object.keys(qo).length) {
    return;
  }

  // 2.
  // 3. (example: console.log(string.slice(-3));) ID === 800
  // 4. AR = datastream[`$${ID}`]
  // 5. RN
};

buttons.forEach((button) => {
  button.addEventListener("click", clickHandler);
});
