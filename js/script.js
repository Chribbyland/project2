// Create a namespace object to hold the app:
const insultApp = {};
let isLeftSide = true; // variable to determine which side will call API/fill text bubble

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!

insultApp.getInsultLeft = () => {
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(’https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
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
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(’https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
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
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
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
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
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

  // add event listeners
  document.getElementById("insultButton").addEventListener("click", e => {
    if (isLeftSide) {
      insultApp.getInsultLeft();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getInsultRight();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    }
  });

  document.getElementById("adviceButton").addEventListener("click", e => {
    if (isLeftSide) {
      insultApp.getAdviceLeft();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getAdviceRight();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    }
  });

// init function to kick off the code
insultApp.init = () => {
  // alert('Naughty language may lie ahead.')
// insultApp.getInsultLeft();
// insultApp.getInsultRight();
// insultApp.getAdviceLeft();
// insultApp.getAdviceRight();
  // insultApp.gameStart();
}

// call the init function
insultApp.init();


// create boolean variable
// isLeftSide true/false
// false = right side