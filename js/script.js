// Create a namespace object to hold the app:
const insultApp = {};
let isLeftSide = true; // variable to determine which side will call API/fill text bubble
let leftCounter = 4;
let rightCounter = 4; 

//figuring out the picture swapping function on the happy and angry side//
  //make an array
const leftPictures = new Array();
leftPictures[0] = new Image();
leftPictures[0].src = './photos/personLeft/personInsultLeft4.png';
leftPictures[1] = new Image();
leftPictures[1].src = './photos/personLeft/personInsultLeft3.png';
leftPictures[2] = new Image();
leftPictures[2].src = './photos/personLeft/personInsultLeft2.png';
leftPictures[3] = new Image();
leftPictures[3].src = './photos/personLeft/personInsultLeft1.png';
leftPictures[4] = new Image();
leftPictures[4].src = './photos/personLeft/personAILeft.png';
leftPictures[5] = new Image();
leftPictures[5].src = './photos/personLeft/personAdviceLeft4.png';
leftPictures[6] = new Image();
leftPictures[6].src = './photos/personLeft/personAdviceLeft3.png';
leftPictures[7] = new Image();
leftPictures[7].src = './photos/personLeft/personAdviceLeft2.png';
leftPictures[8] = new Image();
leftPictures[8].src = './photos/personLeft/personAdviceLeft1.png';

const rightPictures = new Array();
rightPictures[0] = new Image();
rightPictures[0].src = './photos/personRight/personInsultright4.png';
rightPictures[1] = new Image();
rightPictures[1].src = './photos/personRight/personInsultRight3.png';
rightPictures[2] = new Image();
rightPictures[2].src = './photos/personRight/personInsultRight2.png';
rightPictures[3] = new Image();
rightPictures[3].src = './photos/personRight/personInsultRight1.png';
rightPictures[4] = new Image();
rightPictures[4].src = './photos/personRight/personAIRight.png';
rightPictures[5] = new Image();
rightPictures[5].src = './photos/personRight/personAdviceRight4.png';
rightPictures[6] = new Image();
rightPictures[6].src = './photos/personRight/personAdviceRight3.png';
rightPictures[7] = new Image();
rightPictures[7].src = './photos/personRight/personAdviceRight2.png';
rightPictures[8] = new Image();
rightPictures[8].src = './photos/personRight/personAdviceRight1.png';


insultApp.getInsultLeft = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(’https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const insultLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
    insultLeftText.innerHTML = jsonResult.insult;
  })
};

insultApp.getInsultRight = () => {
  fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(’https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) {
    const insultRightText = document.querySelector('#rightPersonSpeechText');
    // clear existing content
    insultRightText.innerHTML = jsonResult.insult;
  });
};

insultApp.getAdviceLeft = () => {
  fetch('https://api.adviceslip.com/advice?type=json&version='+Math.floor(Math.random()*100000+1))
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonResult) { 
    const advice = jsonResult.slip;
    const adviceLeftText = document.querySelector('#leftPersonSpeechText');
    // clear existing content
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
    // clear existing content
    adviceRightText.innerHTML = advice.advice;
  });
};
//FOR COUNTERS
//player 1
    //insult button is clicked, the right side counter goes down by 1
    //then retrieves right side photo
    
//player 2
    //advice button is clicked, the left side counter goes up by 1
    //then retrives left side photo
    
    insultApp.leftCounter = () => {
      
    }

  // add event listeners
  //insult button conditions
    document.getElementById("insultButton").addEventListener("click", e => {
      console.log('counter before any work is done: '+ leftCounter);
    if (isLeftSide) {
      insultApp.getInsultLeft();

      //stuff for the counter
      // rightCounter--;
      // document.getElementById('rightPersonImage').src = rightPictures[rightCounter];

      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getInsultRight();
      leftCounter--;
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
      console.log('counter after decreasing:'+ leftCounter);
    }


  });
  //advice button conditions
  document.getElementById("adviceButton").addEventListener("click", e => {
    if (isLeftSide) {
      insultApp.getAdviceLeft();
      rightCounter++;
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getAdviceRight();
      leftCounter++;
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    }
  });

// init function to kick off the code
insultApp.init = () => {
  let leftCounter = 4;
  let rightCounter = 4; 
  console.log(leftCounter);
  console.log(rightCounter);
  // checkout the stuff below, it is broken!
  // document.getElementById('#leftPersonImage').src = leftPictures[leftCounter];
  // document.getElementById('#rightPersonImage').src = rightPictures[rightCounter];  
}
