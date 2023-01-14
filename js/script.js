// Creating a namespace object to hold the app
const insultApp = {};

// variable to determine which side will call API/fill text bubble
insultApp.isLeftSide = true;

// setting counter to middle value. Counter's range is 0-10 and refers to the two arrays of pictures below, leftPictures and rightPictures.
insultApp.leftCounter = 5;
insultApp.rightCounter = 5; 

// how to display alt text on these?!?
// make array for left character image locations
const leftPictures = [
  './photos/explosion.png',
  './photos/personLeft/personInsultLeft4.png' ,
  './photos/personLeft/personInsultLeft3.png',
  './photos/personLeft/personInsultLeft2.png',
  './photos/personLeft/personInsultLeft1.png',
  './photos/personLeft/personAILeft.png',
  './photos/personLeft/personAdviceLeft4.png',
  './photos/personLeft/personAdviceLeft3.png',
  './photos/personLeft/personAdviceLeft2.png',
  './photos/personLeft/personAdviceLeft1.png',
  './photos/explosion.png',
];

// how to display alt text on these?!?
// make array for right character image locations
const rightPictures = [
  './photos/explosion.png',
  './photos/personRight/personInsultRight4.png',
  './photos/personRight/personInsultRight3.png',
  './photos/personRight/personInsultRight2.png',
  './photos/personRight/personInsultRight1.png',
  './photos/personRight/personAIRight.png',
  './photos/personRight/personAdviceRight4.png',
  './photos/personRight/personAdviceRight3.png',
  './photos/personRight/personAdviceRight2.png',
  './photos/personRight/personAdviceRight1.png',
  './photos/explosion.png',
];

// TO DO - implement async/await on the API calls so the text appears as the images are changed. Currently, there is a delay in waiting for the API to return info but the images are swapped out immediately.
insultApp.getInsultLeft = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(`https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    // run language filter
    insultApp.languageFilter(jsonResult);
  });
};

insultApp.getInsultRight = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(`https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    // run language filter
    insultApp.languageFilter(jsonResult);
  });
};

insultApp.replaceInsultLeft = (filteredInsult) => {
    // replace existing content
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    insultLeftText.innerHTML = filteredInsult;
}

insultApp.replaceInsultRight = (filteredInsult) => {
    // replace existing content
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    insultRightText.innerHTML = filteredInsult;
};

insultApp.getAdviceLeft = () => {
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const advice = jsonResult.slip;
    const adviceLeftText = document.querySelector('#leftPersonSpeechText');
    // replace existing content
    adviceLeftText.innerHTML = advice.advice;
  });
};

insultApp.getAdviceRight = () => {
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const advice = jsonResult.slip;
    const adviceRightText = document.querySelector('#rightPersonSpeechText');
    // replace existing content
    adviceRightText.innerHTML = advice.advice;
  });
};

// nasty words ahead!
insultApp.languageFilter = (jsonResult) => {
  let badWords = / anal| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| semen| tit| turd| twat| vagina| wank| whore/gi;
  let rawInsult = jsonResult.insult;
  console.log(rawInsult);
  let filteredInsult = rawInsult.replace(badWords,'____');
  if (insultApp.isLeftSide) {
  insultApp.replaceInsultRight(filteredInsult);
  } else {
  insultApp.replaceInsultLeft(filteredInsult);
  };
};

// reset left person text box on game reset
insultApp.leftPersonTextReset = () => {
  const reset = document.querySelector('#leftPersonSpeechText')
  reset.innerHTML = '';
};

// reset right person text box on game reset
insultApp.rightPersonTextReset = () => {
  const reset = document.querySelector('#rightPersonSpeechText')
  reset.innerHTML = '';
};

// function to reset game/counters/images
insultApp.gameReset = () => {
  // images reset to neutral
  insultApp.leftImage.src = leftPictures[4];
  insultApp.rightImage.src = rightPictures[4];
  // speech bubbles clear
  insultApp.leftPersonTextReset();
  insultApp.rightPersonTextReset();
  insultApp.leftCounter=  5;
  insultApp.rightCounter = 5;
};

// add event listeners
// insult button conditions
insultApp.insultListener = () => {
  document.getElementById("insultButton").addEventListener("click", e => {
    if (insultApp.leftCounter === 0 ||
      insultApp.rightCounter === 0) {
        alert(`You insulted them to death.`); // call function to reset game
        insultApp.gameReset();
      //player 1 (Left)
      } else {
        if (insultApp.isLeftSide) {
          insultApp.getInsultLeft();
          insultApp.rightCounter--;
          insultApp.isLeftSide = !insultApp.isLeftSide;
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter];
        //player 2 (Right)
        } else {
        insultApp.getInsultRight();
        insultApp.leftCounter--;
        insultApp.isLeftSide = !insultApp.isLeftSide;
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter];
      };
    };
  });
};

// advice button conditions
insultApp.adviceListener = () => {
  document.getElementById("adviceButton").addEventListener("click", e => {
    if (insultApp.leftCounter === 10 ||
      insultApp.rightCounter === 10) {
        alert(`You praised them into a new dimension!`); // call function to reset game
        insultApp.gameReset();
      //player 1 (Left)
      } else {
        if (insultApp.isLeftSide) {
          insultApp.getAdviceLeft();
          insultApp.rightCounter++;
          insultApp.isLeftSide = !insultApp.isLeftSide;
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter];
        //player 2 (Right)
        } else {
        insultApp.getAdviceRight();
        insultApp.leftCounter++;
        insultApp.isLeftSide = !insultApp.isLeftSide;
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter];
      };
    };
  });
};

// init function to kick off the code
insultApp.init = () => {
  insultApp.leftImage = document.getElementById('leftPersonImage');
  insultApp.rightImage = document.getElementById('rightPersonImage');
  insultApp.leftImage.src = leftPictures[insultApp.leftCounter];
  insultApp.rightImage.src = rightPictures[insultApp.rightCounter];
  insultApp.insultListener();
  insultApp.adviceListener();
};

insultApp.init();