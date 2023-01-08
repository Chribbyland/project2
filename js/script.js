// Create a namespace object to hold the app:
const insultApp = {};

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!

insultApp.init = () => {
  // alert('Naughty language may lie ahead.')
// insultApp.getInsultLeft();
insultApp.getInsultRight();
insultApp.getAdviceLeft();
// insultApp.getAdviceRight();
}

insultApp.getInsultLeft = () => {
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const insult = jsonResult.insult;
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
    insultLeftText.innerHTML = '';
    insultLeftText.innerHTML = jsonResult.insult;
  });
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

insultApp.init();





// 