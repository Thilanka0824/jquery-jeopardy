let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    //console.log(data);

    let groupedData = _.groupBy(data, 'value')
     console.log(groupedData.$100);
    // console.log(groupedData.$200);
    // console.log(groupedData.$400);
    // console.log(groupedData.$600);
    // console.log(groupedData.$800);
   
    return groupedData
    //console.log(groupedData)
}

//readJeopardyData()


let gridDiv = document.querySelector('#jeopardy')

let buttonList100 = document.querySelectorAll('.btn.btn-100')
let buttonList200 = document.querySelectorAll('.btn.btn-200')
let buttonList400 = document.querySelectorAll('.btn.btn-400')
let buttonList600 = document.querySelectorAll('.btn.btn-600')
let buttonList800 = document.querySelectorAll('.btn.btn-800')

let displayArea = document.querySelector('#display-area')

let inputBox = document.querySelector('#input-box')
let submitButton = document.querySelector('#submit-button')


let forLoops = async () => {
  let dataStream = await readJeopardyData();


  let randomNumber = Math.ceil(Math.random() * dataStream.$100.length);

  for (let i = 0; i < buttonList100.length; i++) {
    let button100 = buttonList100[i];

    let questionObject = dataStream.$100[randomNumber]

    button100.addEventListener("click", () => {
      //console.log(button100.classList);
      //console.log(button100.id);
      //console.log(questionObject.question);
      console.log(questionObject)
      displayArea.innerText = questionObject.question
      //console.log(dataStream[3]);
      
    });

    
  }
  submitButton.addEventListener('click', () => {
    console.log('yo yo')
    if(inputBox.value === questionObject.answer){
        console.log('yes')
    }
})


    
  
  
  
  
  
  
  
  
  
  
  for (let i = 0; i < buttonList200.length; i++) {
        let button200 = buttonList200[i];

    button200.addEventListener("click", () => {
      console.log(dataStream);
      //console.log(button200.classList)
      //console.log(button200.id)
    });
  }

  for (let i = 0; i < buttonList400.length; i++) {
    let button400 = buttonList400[i];

    button400.addEventListener("click", () => {
      console.log(button400.classList);
      console.log(button400.id);
    });
  }

  for (let i = 0; i < buttonList600.length; i++) {
    let button600 = buttonList600[i];

    button600.addEventListener("click", () => {
      console.log(button600.classList);
      console.log(button600.id);
    });
  }

  for (let i = 0; i < buttonList800.length; i++) {
    let button800 = buttonList800[i];

    button800.addEventListener("click", () => {
      console.log(button800.classList);
      console.log(button800.id);
    });
  }
};


forLoops()