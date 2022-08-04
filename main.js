let readJeopardyData = async () => {
  let rawJeopardyData = await fetch("jeopardy.json");
  let data = await rawJeopardyData.json();
  //console.log(data);

  let groupedData = _.groupBy(data, "value");

  return groupedData;
  //console.log(groupedData)
};

//readJeopardyData()

let gridDiv = document.querySelector("#jeopardy");
let reset = document.querySelector("#header");

let buttonList100 = document.querySelectorAll(".btn.btn-100");
let buttonList200 = document.querySelectorAll(".btn.btn-200");
let buttonList400 = document.querySelectorAll(".btn.btn-400");
let buttonList600 = document.querySelectorAll(".btn.btn-600");
let buttonList800 = document.querySelectorAll(".btn.btn-800");

let displayArea = document.querySelector("#display-area");

let inputBox = document.querySelector("#input-box");
let submitButton = document.querySelector("#submit-button");
let displayScore = document.querySelector("#score");

let scoreKeeper = 0;

let questionObject1 = { answer: "" };
let questionObject2 = { answer: "" };
let questionObject4 = { answer: "" };
let questionObject6 = { answer: "" };
let questionObject8 = { answer: "" };

let clicked = false;

let clear = () => {
  inputBox.value = "";
  displayArea.innerText = "";
};

displayScore.innerText = `Your Score: $${scoreKeeper}`;

// submit button EVENT LISTENER
submitButton.addEventListener("click", () => {
  // $100
  if (inputBox.value.toLowerCase() === questionObject1.answer.toLowerCase()) {
    //console.log('yes!')
    scoreKeeper = scoreKeeper + 100;
    console.log(scoreKeeper);
    displayScore.innerText = `Your Score: $${scoreKeeper}`;
    displayArea.innerText = "Good Job";

    clicked = false;
  }

  // $200
  else if (
    inputBox.value.toLowerCase() === questionObject2.answer.toLowerCase()
  ) {
    scoreKeeper = scoreKeeper + 200;
    console.log(scoreKeeper);
    displayScore.innerText = `Your Score: $${scoreKeeper}`;
    displayArea.innerText = "Great Answer!";

    clicked = false;
  }

  // $400
  else if (
    inputBox.value.toLowerCase() === questionObject4.answer.toLowerCase()
  ) {
    scoreKeeper = scoreKeeper + 400;
    displayScore.innerText = `Your Score: $${scoreKeeper}`;
    displayArea.innerText = "Way to go!!";

    clicked = false;
  }

  // $600
  else if (
    inputBox.value.toLowerCase() === questionObject6.answer.toLowerCase()
  ) {
    scoreKeeper = scoreKeeper + 600;
    displayScore.innerText = `Your Score: $${scoreKeeper}`;
    displayArea.innerText = "That was a tough one!!!";

    clicked = false;
  }

  // $800
  else if (
    inputBox.value.toLowerCase() === questionObject8.answer.toLowerCase()
  ) {
    scoreKeeper = scoreKeeper + 800;
    displayScore.innerText = `Your Score: $${scoreKeeper}`;
    displayArea.innerText = "OUTSTANDING!!!!!";

    clicked = false;
  } else {
    displayArea.innerText = "Wrong";

    clicked = false;
  }

  setTimeout(clear, 2500);
});

// Loops for BUTTONS
let forLoops = async () => {
  let dataStream = await readJeopardyData(); //dataStream is the parsed JSON data from readJeopardyData

  // $100
  for (let i = 0; i < buttonList100.length; i++) {
    let button100 = buttonList100[i];

    let removeListener = ({ target }) => {
      if (clicked === false) {
        clicked = true;

        target.removeEventListener("click", removeListener);
        target.style.opacity = "0.2";
        //let blackout = button100.id
        let randomNumber1 = Math.ceil(Math.random() * dataStream.$100.length);

        questionObject1 = dataStream.$100[randomNumber1];
        console.log(questionObject1);
        displayArea.innerText = questionObject1.question;
        //console.log(button100.classList);

        console.log(button100.id);
      }
    };
    button100.addEventListener("click", removeListener);
  }

  // $200
  for (let i = 0; i < buttonList200.length; i++) {
    let button200 = buttonList200[i];

    let removeListener2 = ({ target }) => {
      if (clicked === false) {
        clicked = true;

        target.removeEventListener("click", removeListener2);
        target.style.opacity = "0.2";

        let randomNumber2 = Math.ceil(Math.random() * dataStream.$200.length);

        questionObject2 = dataStream.$200[randomNumber2];
        console.log(questionObject2);
        displayArea.innerText = questionObject2.question;
      }
    };
    button200.addEventListener("click", removeListener2);
  }

  // $400
  for (let i = 0; i < buttonList400.length; i++) {
    let button400 = buttonList400[i];

    let removeListener4 = ({ target }) => {
      if (clicked === false) {
        clicked = true;

        target.removeEventListener("click", removeListener4);
        target.style.opacity = "0.2";

        let randomNumber4 = Math.ceil(Math.random() * dataStream.$400.length);

        questionObject4 = dataStream.$400[randomNumber4];
        console.log(questionObject4);
        displayArea.innerText = questionObject4.question;
      }
    };
    button400.addEventListener("click", removeListener4);
  }

  // $600
  for (let i = 0; i < buttonList600.length; i++) {
    let button600 = buttonList600[i];

    let removeListener6 = ({ target }) => {
      if (clicked === false) {
        clicked = true;

        target.removeEventListener("click", removeListener6);
        target.style.opacity = "0.2";

        let randomNumber6 = Math.ceil(Math.random() * dataStream.$600.length);
        questionObject6 = dataStream.$600[randomNumber6];

        console.log(questionObject6);
        displayArea.innerText = questionObject6.question;
      }
    };
    button600.addEventListener("click", removeListener6);
  }

  // $800
  for (let i = 0; i < buttonList800.length; i++) {
    let button800 = buttonList800[i];

    let removeListener8 = ({ target }) => {
      if (clicked === false) {
        clicked = true;

        target.removeEventListener("click", removeListener8);
        target.style.opacity = "0.2";

        let randomNumber8 = Math.ceil(Math.random() * dataStream.$800.length);
        questionObject8 = dataStream.$800[randomNumber8];

        console.log(questionObject8);
        displayArea.innerText = questionObject8.question;
      }
    };
    button800.addEventListener("click", removeListener8);
  }
};

forLoops();
