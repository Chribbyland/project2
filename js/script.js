// Creating a namespace object to hold the app
const insultApp = {};
import { leftPictures, rightPictures } from './image-arrays.js';


// variable to determine which side will call API/fill text bubble
insultApp.isLeftSide = true;

// setting counter to middle value. Counter's range is 0-10 and refers to the two arrays of pictures below, leftPictures and rightPictures.
insultApp.leftCounter = 5;
insultApp.rightCounter = 5; 

// make array for left character image locations, including alt text stored as a property in the array

// TO DO - implement async/await on the API calls so the text appears as the images are changed. Currently, there is a delay in waiting for the API to return info but the images are swapped out immediately.
insultApp.getInsult = (e) => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(`https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    // run language filter
    insultApp.languageFilter(jsonResult);
    // re-enable insult button
    e.target.disabled = false;
  });
};

insultApp.replaceInsultLeft = (filteredInsult) => {
  // replace existing content
  const insultLeftText = document.querySelector('#leftPersonSpeechText');
  insultLeftText.innerHTML = filteredInsult;
  // make speech bubble visible
  document.getElementById('leftSpeechContainer').style.visibility = 'visible';
  insultApp.turnIndicatorRight();
};

insultApp.replaceInsultRight = (filteredInsult) => {
  // replace existing content
  const insultRightText = document.querySelector('#rightPersonSpeechText');
  insultRightText.innerHTML = filteredInsult;
  // make speech bubble visible
  document.getElementById('rightSpeechContainer').style.visibility = 'visible';
  insultApp.turnIndicatorLeft();
};

insultApp.getAdviceLeft = (e) => {
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const advice = jsonResult.slip;
    const adviceLeftText = document.querySelector('#leftPersonSpeechText');
    // replace existing content
    adviceLeftText.innerHTML = advice.advice;
    insultApp.turnIndicatorRight();
    // re-enable advice button and make speech bubble visible
    e.target.disabled = false;
    document.getElementById('leftSpeechContainer').style.visibility = 'visible';
  });
};

insultApp.getAdviceRight = (e) => {
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const advice = jsonResult.slip;
    const adviceRightText = document.querySelector('#rightPersonSpeechText');
    // replace existing content
    adviceRightText.innerHTML = advice.advice;
    insultApp.turnIndicatorLeft();
    // re-enable advice button and make speech bubble visible
    e.target.disabled = false;
    document.getElementById('rightSpeechContainer').style.visibility = 'visible';
  });
};

// nasty words ahead!
insultApp.languageFilter = (jsonResult) => {
  let badWords = / abortion| anal| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| devilcock| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| semen| tit| turd| twat| vagina| wank| motherfuck| whore/gi;
  let rawInsult = jsonResult.insult;
  let filteredInsult = rawInsult.replace(badWords,' ____ ');
  if (insultApp.isLeftSide) {
  insultApp.replaceInsultRight(filteredInsult);
  } else {
  insultApp.replaceInsultLeft(filteredInsult);
  };
};

// font awesome icon indicating left player's turn
insultApp.turnIndicatorLeft = () => {
  const leftIndicator = document.querySelector('i');
  leftIndicator.innerHTML = `<i class="fa-regular fa-4x fa-hand-point-left fa-rotate-by" style="--fa-rotate-angle: 35deg;"></i>`
};

// font awesome icon indicating right player's turn
insultApp.turnIndicatorRight = () => {
  const rightIndicator = document.querySelector('i');
  rightIndicator.innerHTML = `<i class="fa-regular fa-4x fa-hand-point-right fa-rotate-by" style="--fa-rotate-angle: -35deg;"></i>`
};

// remove welcome message and start button on game start
insultApp.removeWelcome = () => {
  const byeWelcome = document.getElementById("welcome");
  byeWelcome.parentNode.removeChild(byeWelcome);
  const byeStartBox = document.getElementById("startButtonBox");
  byeStartBox.parentNode.removeChild(byeStartBox);
};

// reset left person text box on game reset
insultApp.leftPersonTextReset = () => {
  const reset = document.querySelector('#leftPersonSpeechText');
  reset.innerHTML = '';
};

// reset right person text box on game reset
insultApp.rightPersonTextReset = () => {
  const reset = document.querySelector('#rightPersonSpeechText');
  reset.innerHTML = '';
};

// function to reset game/counters/images
insultApp.gameReset = (e) => {
  // images and their alt text reset to neutral
  insultApp.leftImage.src = leftPictures[5].imgLoc;
  insultApp.leftImage.alt = leftPictures[5].altText;
  insultApp.rightImage.src = rightPictures[5].imgLoc;
  insultApp.rightImage.alt = rightPictures[5].altText;
  // clear speech bubbles 
  insultApp.leftPersonTextReset();
  insultApp.rightPersonTextReset();
  insultApp.turnIndicatorLeft();
  insultApp.leftCounter = 5;
  insultApp.rightCounter = 5;
  // re-enable advice button
  e.target.disabled = false;
  // hiding speech bubbles until user clicks insult/advise
  document.getElementById('leftSpeechContainer').style.visibility = 'hidden';
  document.getElementById('rightSpeechContainer').style.visibility = 'hidden';
};

// add event listeners
// insult button conditions
insultApp.insultListener = () => {
  document.getElementById("insultButton").addEventListener("click", e => {
    e.target.disabled = true;
    console.log(insultApp.leftCounter, insultApp.rightCounter)
    if (insultApp.leftCounter === 0 ||
      insultApp.rightCounter === 0) {
        alert(`You insulted them to death.`);
        // call function to reset game
        insultApp.gameReset(e);
      //player 1 (Left)
      } else {
        if (insultApp.isLeftSide) {
          insultApp.getInsult(e);
          insultApp.rightCounter--;
          insultApp.isLeftSide = !insultApp.isLeftSide;
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
          insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;

        //player 2 (Right)
        } else {
        insultApp.getInsult(e);
        insultApp.leftCounter--;
        insultApp.isLeftSide = !insultApp.isLeftSide;
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
        insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
      };
    };
  });
};

// advice button conditions
insultApp.adviceListener = () => {
  document.getElementById("adviceButton").addEventListener("click", e => {
    e.target.disabled = true;
    if (insultApp.leftCounter === 10 ||
      insultApp.rightCounter === 10) {
        alert(`You praised them into a new dimension!`);
        // call function to reset game
        insultApp.gameReset(e);
      //player 1 (Left)
      } else {
        if (insultApp.isLeftSide) {
          insultApp.rightCounter++;
          insultApp.getAdviceLeft(e);
          insultApp.isLeftSide = !insultApp.isLeftSide;
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
          insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
        //player 2 (Right)
        } else {
        insultApp.getAdviceRight(e);
        insultApp.leftCounter++;
        insultApp.isLeftSide = !insultApp.isLeftSide;
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
        insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
      };
    };
  });
};

// listen for "Start" button click event
insultApp.gameStartListener = () => {
  document.getElementById('startButton').addEventListener("click", e => {
  insultApp.gameStart();
  });
};

// initialize middle section for gameplay after start button is clicked
  // left person speech container 
insultApp.setMiddle = () => {
  const leftSpeechContainer = document.createElement('div');
  leftSpeechContainer.setAttribute('class', 'leftSpeechContainer leftTail');
  leftSpeechContainer.setAttribute('id', 'leftSpeechContainer');
  document.getElementById('middle').appendChild(leftSpeechContainer);

  // left person text field
  const leftPersonSpeechText = document.createElement('p');
  leftPersonSpeechText.setAttribute('class', 'leftPersonSpeechText');
  leftPersonSpeechText.setAttribute('id', 'leftPersonSpeechText');
  document.getElementById('leftSpeechContainer').appendChild(leftPersonSpeechText);

  // right person speech container 
  const rightSpeechContainer = document.createElement('div');
  rightSpeechContainer.setAttribute('class', 'rightSpeechContainer rightTail');
  rightSpeechContainer.setAttribute('id', 'rightSpeechContainer');
  document.getElementById('middle').appendChild(rightSpeechContainer);

  // right person text field
  const rightPersonSpeechText = document.createElement('p');
  rightPersonSpeechText.setAttribute('class', 'rightPersonSpeechText');
  rightPersonSpeechText.setAttribute('id', 'rightPersonSpeechText');
  document.getElementById('rightSpeechContainer').appendChild(rightPersonSpeechText);

  // turn indicator container
  const turnIndicatorContainer = document.createElement('div');
  turnIndicatorContainer.setAttribute('class', 'turnIndicatorContainer');
  turnIndicatorContainer.setAttribute('id', 'turnIndicatorContainer');
  document.getElementById('middle').appendChild(turnIndicatorContainer);

  // font awesome <i>
  const turnIndicator = document.createElement('i');
  document.getElementById('turnIndicatorContainer').appendChild(turnIndicator);

  // insult button container
  const insultButtonBox = document.createElement('div');
  insultButtonBox.setAttribute('class', 'buttonBox', 'insultButtonBox');
  insultButtonBox.setAttribute('id', 'insultButtonBox');
  document.getElementById('middle').appendChild(insultButtonBox);

  // insult button 
  const insultButton = document.createElement('button');
  insultButton.setAttribute('class', 'insultButton');
  insultButton.setAttribute('id', 'insultButton');
  insultButton.innerText = "Insult!"
  document.getElementById('insultButtonBox').appendChild(insultButton);
  
  // advice button container
  const adviceButtonBox = document.createElement('div');
  adviceButtonBox.setAttribute('class', 'buttonBox', 'adviceButtonBox');
  adviceButtonBox.setAttribute('id', 'adviceButtonBox');
  document.getElementById('middle').appendChild(adviceButtonBox);

  // advice button
  const adviceButton = document.createElement('button');
  adviceButton.setAttribute('class', 'adviceButton');
  adviceButton.setAttribute('id', 'adviceButton');
  adviceButton.innerText = "Advise!"
  document.getElementById('adviceButtonBox').appendChild(adviceButton);

  // hiding speech bubbles until user clicks insult/advise
  document.getElementById('leftSpeechContainer').style.visibility = 'hidden';
  document.getElementById('rightSpeechContainer').style.visibility = 'hidden';
};

insultApp.gameStart = () => {
  // kicks off after user clicks Start button
  insultApp.removeWelcome();
  insultApp.setMiddle();
  insultApp.turnIndicatorLeft();
  insultApp.insultListener();
  insultApp.adviceListener();
};

// init function to kick off the code
insultApp.init = () => {
  insultApp.leftImage = document.getElementById('leftPersonImage');
  insultApp.rightImage = document.getElementById('rightPersonImage');
  insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
  insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
  insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
  insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
  insultApp.gameStartListener();
};

insultApp.init();