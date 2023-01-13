// Creating a namespace object to hold the app
const insultApp = {};

// NAMESPACE THIS YO
let isLeftSide = true; // variable to determine which side will call API/fill text bubble
let leftCounter = 5;
let rightCounter = 5; 

insultApp.leftImage = document.getElementById('leftPersonImage');
insultApp.rightImage = document.getElementById('rightPersonImage');

const leftPictures = [
  './photos/explosion.png',
  './photos/personLeft/personInsultLeft4.png',
  './photos/personLeft/personInsultLeft3.png',
  './photos/personLeft/personInsultLeft2.png',
  './photos/personLeft/personInsultLeft1.png',
  './photos/personLeft/personAILeft.png',
  './photos/personLeft/personAdviceLeft4.png',
  './photos/personLeft/personAdviceLeft3.png',
  './photos/personLeft/personAdviceLeft2.png',
  './photos/personLeft/personAdviceLeft1.png',
  './photos/explosion.png',
]
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
]

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
}


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
// Currently this code is duplicated in the insultApp.getInsultLeft (and right) functions... How do we run this code here and insert the filteredInsult data there? It's a scope issue...
insultApp.languageFilter = (jsonResult) => {
  let badWords = / anal| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| tit| turd| twat| vagina| wank| whore/gi;
  let rawInsult = jsonResult.insult;
  console.log(rawInsult);
  let filteredInsult = rawInsult.replace(badWords,'____');
  if (isLeftSide) {
  insultApp.replaceInsultRight(filteredInsult);
  } else {
  insultApp.replaceInsultLeft(filteredInsult);
  };
};

// NAMESPACE THIS YO
const leftPersonTextReset = () => {
  const reset = document.querySelector('#leftPersonSpeechText')
  reset.innerHTML = '';
}

const rightPersonTextReset = () => {
  const reset = document.querySelector('#rightPersonSpeechText')
  reset.innerHTML = '';
}

insultApp.gameReset = () => {
  // images reset to neutral
  insultApp.leftImage.src = leftPictures[4];
  insultApp.rightImage.src = rightPictures[4];
  // speech bubbles clear
  leftPersonTextReset();
  rightPersonTextReset();
  leftCounter=  5;
  rightCounter = 5;
}

// add event listeners
// NAMESPACE THIS YO
document.getElementById("insultButton").addEventListener("click", e => {
  if (leftCounter === 0 ||
    rightCounter === 0) {
      alert(`You insulted them to death.`); // call function to reset game
      insultApp.gameReset();
      //player 1 (Left)
    } else {
      if (isLeftSide) {
        insultApp.getInsultLeft();
        rightCounter--;
        isLeftSide = !isLeftSide;
        insultApp.rightImage.src = rightPictures[rightCounter];
        //player 2 (Right)
        } else {
          insultApp.getInsultRight();
          leftCounter--;
          isLeftSide = !isLeftSide;
          insultApp.leftImage.src = leftPictures[leftCounter];
      };
    };
  });

  //advice button conditions
    // NAMESPACE THIS YO
  document.getElementById("adviceButton").addEventListener("click", e => {
      if (leftCounter === 10 ||
        rightCounter === 10) {
        alert(`You praised them into a new dimension!`); // call function to reset game
        insultApp.gameReset();
      //player 1 (Left)
      } else {
        if (isLeftSide) {
          insultApp.getAdviceLeft();
          rightCounter++;
          isLeftSide = !isLeftSide;
          insultApp.rightImage.src = rightPictures[rightCounter];
        //player 2 (Right)
        } else {
          insultApp.getAdviceRight();
          leftCounter++;
          isLeftSide = !isLeftSide;
          insultApp.leftImage.src = leftPictures[leftCounter];
      };
    };
  });

// init function to kick off the code
insultApp.init = () => {
  insultApp.leftImage.src = leftPictures[leftCounter];
  insultApp.rightImage.src = rightPictures[rightCounter];
}

insultApp.init();