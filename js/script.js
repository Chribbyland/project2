// Creating a namespace object to hold the app
const insultApp = {};

// variable to determine which side will call API/fill text bubble
insultApp.isLeftSide = true;

// setting counter to middle value. Counter's range is 0-10 and refers to the two arrays of pictures below, leftPictures and rightPictures.
insultApp.leftCounter = 5;
insultApp.rightCounter = 5; 

// make array for left character image locations, including alt text stored as a property in the array
const leftPictures = [
  {
    imgLoc: './photos/explosion.png',
    altText: 'A large explosion!'
  },
  {
    imgLoc: './photos/personLeft/personInsultLeft4.png',
    altText: 'Stick figure on the left is incredibly angry!'
  },
  {
    imgLoc: './photos/personLeft/personInsultLeft3.png',
    altText: 'Stick figure on the left is quite mad!'
  },
  {
    imgLoc: './photos/personLeft/personInsultLeft2.png',
    altText: 'Stick figure on the left is rather annoyed!'
  },
  {
    imgLoc: './photos/personLeft/personInsultLeft1.png',
    altText: 'Stick figure on the left is upset.'
  },
  {
    imgLoc: './photos/personLeft/personAILeft.png',
    altText: 'Stick figure on the left is feeling neutral.'
  },
  {
    imgLoc: './photos/personLeft/personAdviceLeft4.png',
    altText: 'Stick figure on the left is smiling a little.'
  },
  {
    imgLoc: './photos/personLeft/personAdviceLeft3.png',
    altText: 'Stick figure on the left is quite pleased!'
  },
  {
    imgLoc: './photos/personLeft/personAdviceLeft2.png',
    altText: 'Stick figure on the left is raising their arms in joy!'
  },
  {
    imgLoc: './photos/personLeft/personAdviceLeft1.png',
    altText: 'Stick figure on the left is positively jubilant!'
  },
  {
    imgLoc: './photos/explosion.png',
    altText: 'A large explosion!'
  }
];

// how to display alt text on these?!?
// make array for right character image locations
const rightPictures = [
  {
    imgLoc: './photos/explosion.png',
    altText: 'A large explosion!'
  },
  {
    imgLoc: './photos/personRight/personInsultRight4.png',
    altText: 'Stick figure on the right is incredibly angry!'
  },
  {
    imgLoc: './photos/personRight/personInsultRight3.png',
    altText: 'Stick figure on the right is quite mad!'
  },
  {
    imgLoc: './photos/personRight/personInsultRight2.png',
    altText: 'Stick figure on the right is rather annoyed!'
  },
  {
    imgLoc: './photos/personRight/personInsultRight1.png',
    altText: 'Stick figure on the right is upset.'
  },
  {
    imgLoc: './photos/personRight/personAIRight.png',
    altText: 'Stick figure on the right is feeling neutral.'
  },
  {
    imgLoc: './photos/personRight/personAdviceRight4.png',
    altText: 'Stick figure on the right is smiling a little.'
  },
  {
    imgLoc: './photos/personRight/personAdviceRight3.png',
    altText: 'Stick figure on the right is quite pleased!'
  },
  {
    imgLoc: './photos/personRight/personAdviceRight2.png',
    altText: 'Stick figure on the right is raising their arms in joy!'
  },
  {
    imgLoc: './photos/personRight/personAdviceRight1.png',
    altText: 'Stick figure on the right is positively jubilant!'
  },
  {
    imgLoc: './photos/explosion.png',
    altText: 'A large explosion!'
  }
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
  // images and their alt text reset to neutral
  insultApp.leftImage.src = leftPictures[5].imgLoc;
  insultApp.leftImage.alt = leftPictures[5].altText;
  insultApp.rightImage.src = rightPictures[5].imgLoc;
  insultApp.rightImage.alt = rightPictures[5].altText;
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
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
          insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
        //player 2 (Right)
        } else {
        insultApp.getInsultRight();
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
          insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
          insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
        //player 2 (Right)
        } else {
        insultApp.getAdviceRight();
        insultApp.leftCounter++;
        insultApp.isLeftSide = !insultApp.isLeftSide;
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
        insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
      };
    };
  });
};

// init function to kick off the code
insultApp.init = () => {
  insultApp.leftImage = document.getElementById('leftPersonImage');
  insultApp.rightImage = document.getElementById('rightPersonImage');
  insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
  insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
  insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
  insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
  insultApp.insultListener();
  insultApp.adviceListener();
};

insultApp.init();