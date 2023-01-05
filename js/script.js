// Create a namespace object to hold the app:
const insultApp = {};

// STEP ONE: Create an init method that will run when our app first loads. This is where all of our first functions will be called.
// Remember to also call the init method at the bottom of this file!

insultApp.init = () => {
  // alert('Naughty language may lie ahead.')
// insultApp.getInsultLeft();
insultApp.getInsultRight();
insultApp.getZenLeft();
// insultApp.getZenRight();
}

insultApp.getInsultLeft = () => {
fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    // console.log(jsonResult);
    const insult = jsonResult.insult;
    // console.log(insult)
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
    console.log(jsonResult);
    const insult = jsonResult.insult;
    // console.log(insult)
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    // clear existing content
    insultRightText.innerHTML = '';
    insultRightText.innerHTML = jsonResult.insult;
  });
};

insultApp.getZenLeft = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://zenquotes.io/api/random/')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    console.log(jsonResult);  
    const zen = jsonResult[0];
    console.log(zen.q);
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
    insultLeftText.innerHTML = '';
    insultLeftText.innerHTML = zen.q;
  });
};

insultApp.getZenRight = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://zenquotes.io/api/random/')
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    console.log(jsonResult);  
    const zen = jsonResult[0];
    console.log(zen.q);
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    // clear existing content
    insultRightText.innerHTML = '';
    insultRightText.innerHTML = zen.q;
  });
};

insultApp.init();