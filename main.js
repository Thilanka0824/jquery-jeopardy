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

let questionObject1 = {}
let questionObject2 = {}
let questionObject4 = {}
let questionObject6 = {}
let questionObject8 = {}

// submit button EVENT LISTENER
submitButton.addEventListener('click', () => {
    //console.log('yo yo')
    // $100
    if(inputBox.value === questionObject1.answer){
        console.log('yes!')
    } else if(inputBox.value !== questionObject1.answer){
        console.log('WRONG!')
    }
    
    // $200
    else if(inputBox.value === questionObject2.answer){
        console.log('yes!')
        
    } else if(inputBox.value !== questionObject2.answer){
        console.log('WRONG!')
    }

    // $400
    else if(inputBox.value === questionObject4.answer){
        console.log('yes!')
    } else if(inputBox.value !== questionObject4.answer){
        console.log('WRONG!')
    }

    // $600
    else if(inputBox.value === questionObject6.answer){
        console.log('yes!')
    } else if(inputBox.value !== questionObject6.answer){
        console.log('WRONG!')
    }

    // $800
    else if(inputBox.value === questionObject8.answer){
        console.log('yes!')
    } else if(inputBox.value !== questionObject8.answer){
        console.log('WRONG!')
    }
})





let forLoops = async () => {
  let dataStream = await readJeopardyData();

    let randomNumber1 = Math.ceil(Math.random() * dataStream.$100.length);

    let randomNumber2 = Math.ceil(Math.random() * dataStream.$200.length);
    let randomNumber4 = Math.ceil(Math.random() * dataStream.$400.length);
    let randomNumber6 = Math.ceil(Math.random() * dataStream.$600.length);
    let randomNumber8 = Math.ceil(Math.random() * dataStream.$800.length);

  for (let i = 0; i < buttonList100.length; i++) {
    let button100 = buttonList100[i];

    questionObject1 = dataStream.$100[randomNumber1]

    button100.addEventListener("click", () => {
        console.log(questionObject1)
        displayArea.innerText = questionObject1.question
        //console.log(button100.classList);
      //console.log(button100.id);
      //console.log(questionObject.question);
      
      //console.log(dataStream[3]);
      
    });

    
  }
  
  
  // $200
  for (let i = 0; i < buttonList200.length; i++) {
        let button200 = buttonList200[i];

        questionObject2 = dataStream.$200[randomNumber2]

    button200.addEventListener("click", () => {
        console.log(questionObject2)
        displayArea.innerText = questionObject2.question
      
        //console.log(dataStream);
      //console.log(button200.classList)
      //console.log(button200.id)
    });
  }
  
  // $400
  for (let i = 0; i < buttonList400.length; i++) {
    let button400 = buttonList400[i];

    questionObject4 = dataStream.$400[randomNumber4]
    
    button400.addEventListener("click", () => {
        console.log(questionObject4)
        displayArea.innerText = questionObject4.question
    
        //   console.log(button400.classList);
    //   console.log(button400.id);
    });
  }

  // $600
  for (let i = 0; i < buttonList600.length; i++) {
    let button600 = buttonList600[i];

    questionObject6 = dataStream.$600[randomNumber6]

    button600.addEventListener("click", () => {
        console.log(questionObject6)
        displayArea.innerText = questionObject6.question
    
   
    });
  }

  for (let i = 0; i < buttonList800.length; i++) {
    let button800 = buttonList800[i];

    questionObject8 = dataStream.$800[randomNumber8]

    button800.addEventListener("click", () => {
        console.log(questionObject8)
        displayArea.innerText = questionObject8.question
    });
  }
};


forLoops()