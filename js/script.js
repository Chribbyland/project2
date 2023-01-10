// Create a namespace object to hold the app:
const insultApp = {};
let isLeftSide = true; // variable to determine which side will call API/fill text bubble

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

//two global variables
let leftCounter = 4;
let rightCounter = 4; 

// console.log(leftCounter);
// console.log(rightCounter);



//array test js code
  // console.log(rightPictures);
  // document.getElementById("leftPersonImage").src=leftPictures[2].src;
// let currentMoodLeft = leftPictures[4];
// let currentMoodRight = rightPictures[4];


// insultApp.countUp = () => {
//   //increase the counter +1 when an advise button is pressed
//  if (isLeftSide) {
//       currentMoodLeft = 
//       console.log(isLeftSide);
//       isLeftSide = !isLeftSide;
//     } else {
//       insultApp.getInsultRight();
//       insultApp.countUpLeft();
//       console.log(isLeftSide);
//       isLeftSide = !isLeftSide;
//     }
// }

insultApp.countDown = () => {
  // function to increase the current rightPerson displayed image in array by 1
}


  //have the images cycle through the array (loop?)
// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }
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
    // document.getElementById('rightPersonImage').src='./photos/personRight/personInsultRight5.png'
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
//FOR COUNTERS
  //player 1
    //insult button is clicked, the right side counter goes down by 1
    //then retrieves right side photo

  //player 2
    //advice button is clicked, the left side counter goes up by 1
    //then retrives left side photo


  // add event listeners
  //insult button conditions
    document.getElementById("insultButton").addEventListener("click", e => {
    if (isLeftSide) {
      insultApp.getInsultLeft();
      rightCounter--;
      leftPictures[leftCounter];
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
    } else {
      insultApp.getInsultRight();
      leftCounter--;
      console.log(isLeftSide);
      isLeftSide = !isLeftSide;
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
  // document.getElementById('#leftPersonImage').src = leftPictures[leftCounter];
  document.getElementById('#rightPersonImage').src = rightPictures[rightCounter];

  
}

// call the init function
insultApp.init();


// create boolean variable
// isLeftSide true/false
// false = right side