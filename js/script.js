// Create a namespace object to hold the app:
const insultApp = {};
let isLeftSide = true; // variable to determine which side will call API/fill text bubble

//figuring out the picture swapping function on the happy and angry side//
  //make an array
  const leftPictures = new Array();
leftPictures[0] = new Image();
leftPictures[0].src = './photos/personLeft/PersonAdviceLeft5.png';
leftPictures[1] = new Image();
leftPictures[1].src = './photos/personLeft/PersonAdviceLeft2.png';
leftPictures[2] = new Image();
leftPictures[2].src = './photos/personLeft/PersonAdviceLeft1.png';
leftPictures[3] = new Image();
leftPictures[3].src = './photos/personLeft/personInsultLeft1.png';
leftPictures[4] = new Image();
leftPictures[4].src = './photos/personLeft/personInsultLeft2.png';
leftPictures[5] = new Image();
leftPictures[5].src = './photos/personLeft/personInsultLeft3.png';
leftPictures[6] = new Image();
leftPictures[6].src = './photos/personLeft/personInsultLeft4.png';
leftPictures[7] = new Image();
leftPictures[7].src = './photos/personLeft/personInsultLeft5.png';

const rightPictures = new Array();
rightPictures[0] = new Image();
rightPictures[0].src = './photos/personRight/personAdviceRight5.png';
rightPictures[1] = new Image();
rightPictures[1].src = './photos/personRight/personAdviceRight2.png';
rightPictures[2] = new Image();
rightPictures[2].src = './photos/personRight/personAdviceRight1.png';
rightPictures[3] = new Image();
rightPictures[3].src = './photos/personRight/personInsultRight1.png'; //neutral face
rightPictures[4] = new Image();
rightPictures[4].src = './photos/personRight/personInsultRight2.png';
rightPictures[5] = new Image();
rightPictures[5].src = './photos/personRight/personInsultRight3.png';
rightPictures[6] = new Image();
rightPictures[6].src = './photos/personRight/personInsultRight4.png';
rightPictures[7] = new Image();
rightPictures[7].src = './photos/personRight/personInsultRight5.png';
//array test js code
  // console.log(rightPictures);
  // document.getElementById("leftPersonImage").src=leftPictures[2].src;
let currentMoodLeft = leftPictures[4];
let currentMoodRight = rightPictures[4];
insultApp.countUpLeft = () => {
  // function to increase the current leftPerson displayed image in array by 1
  currentMoodLeft  // add +1 to the array number somehow
}

insultApp.countDownLeft = () => {
  // function to decrease the current leftPerson displayed image in array by 1
  currentMoodLeft  // add -1 to the array number somehow
}

insultApp.countUpRight = () => {
  // function to increase the current rightPerson displayed image in array by 1
}

insultApp.countDownRight = () => {
  // function to decrease the current rightPerson displayed image in array by 1
}
  //have the images cycle through the array (loop?)
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}
  //players start at a value of 0: 
    // using an insult is a value of -1, when you hit -5 that's when the end of game is triggered
    //using advice is a value of +1, when you hit +5 that's when the end of game is triggered
    //end of game is a text bubble message, explosion images on either side and then a 'reset' button which brings the player back to the beginning of the game

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
      insultApp.countUpRight();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getInsultRight();
      insultApp.countUpLeft();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    }
  });

  document.getElementById("adviceButton").addEventListener("click", e => {
    if (isLeftSide) {
      insultApp.getAdviceLeft();
      insultApp.countDownRight();
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getAdviceRight();
      insultApp.countDownLeft();
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