// Create a namespace object to hold the app:
const insultApp = {};

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!

insultApp.getInsultLeft = () => {
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    console.log(jsonResult);
    const insult = jsonResult.insult;
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
    insultLeftText.innerHTML = '';
    insultLeftText.innerHTML = jsonResult.insult;
  })
  // change right person image to pure anger
  // NOTE - add the following to the other getInsult/getAdvice methods
  .then(function (changeImageRight) {
    document.getElementById('rightPersonImage').src='./photos/personRight/PersonInsultRight5.png'
  })
};

insultApp.getInsultRight = () => {
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const insult = jsonResult.insult;
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    // clear existing content
    insultRightText.innerHTML = '';
    insultRightText.innerHTML = jsonResult.insult;
  });
};

insultApp.getAdviceLeft = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    console.log(jsonResult);  
    const advice = jsonResult.slip;
    console.log(advice.advice);
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
    insultLeftText.innerHTML = '';
    insultLeftText.innerHTML = advice.advice;
  });
};

insultApp.getAdviceRight = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const advice = jsonResult.slip;
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    // clear existing content
    insultRightText.innerHTML = '';
    insultRightText.innerHTML = advice.advice;
  });
};

insultApp.init = () => {
// Left player always starts. Speech bubbles should not be displayed.
  // iteration should be 0 (even!)
  let whoseTurn = 0;
  console.log(whoseTurn)
  // check if number is even or odd, even = player 1, odd = player 2
  if (whoseTurn % 2 === 0) {
    console.log("ready left player")
  // add event listeners
  document.getElementById("insultButton").addEventListener("click", e => {
    insultApp.getInsultLeft();
    whoseTurn = whoseTurn+1;
    console.log(whoseTurn);
  });
  document.getElementById("adviceButton").addEventListener("click", e => {
    insultApp.getAdviceLeft();
    whoseTurn = whoseTurn+1;
    console.log(whoseTurn);

  });
  } else {
    console.log("ready right player")
  // add event listeners
  document.getElementById("insultButton").addEventListener("click", e => {
    insultApp.getInsultRight();
    whoseTurn = whoseTurn+1;
    console.log(whoseTurn);
  });
  document.getElementById("adviceButton").addEventListener("click", e => {
    insultApp.getAdviceRight();
    whoseTurn = whoseTurn+1;
    console.log(whoseTurn);

    });
  };
};


insultApp.init();


  // player clicks either button, API code is run, then
// They can choose Insult or Advise button
// Once clicked, either an insult of advice API call is made and displayed in the upper speech bubble
// It is now the right players turn
  // iteration should be 1 (odd!)
// They can choose Insult or Advise button
// Once clicked, either an insult of advice API call is made and displayed in the upper speech bubble