// Creating a namespace object to hold the app
const insultApp = {};
import { leftPictures, rightPictures } from './image-arrays.js';
import { toggleFilter, languageFilter } from './language-filter.js';
import { setMiddle } from './DOM-manipulation.js';

// functionality for pop-up alert on page load (DISABLED for now, as proxy is operational again)
// window.addEventListener("load", function () {
//   setTimeout(
//     function open(event) {
//       document.querySelector(".popup").style.display = "block";
//     },
//     1000
//   )
// });
// document.querySelector("#close").addEventListener("click", function () {
//   document.querySelector(".popup").style.display = "none";
// });

// future goal: these can be namespaced (remember to update when called!)
insultApp.setMiddle = setMiddle;
insultApp.languageFilter = languageFilter;
insultApp.toggleFilter = toggleFilter;

// variable to determine which side will call API/fill text bubble. When isLeftSide = true, the left (top) speech bubble will receive text.
insultApp.isLeftSide = true;


// setting counter to middle value. Counter's range is 0-10 and refers to the two arrays of pictures below, leftPictures and rightPictures.
insultApp.leftCounter = Math.floor(leftPictures.length / 2);
insultApp.rightCounter = Math.floor(rightPictures.length / 2);

// make array for left character image locations, including alt text stored as a property in the array
// setting picture array start point to middle value. Range is 0-10 and refers to the two arrays of pictures (imported from image-arrays.js) - leftPictures and rightPictures.
// Math.floor(leftPictures.length/2);
// Math.floor(rightPictures.length/2);
insultApp.leftCounter = Math.floor(leftPictures.length / 2);
insultApp.rightCounter = Math.floor(rightPictures.length / 2);

// retrieve insult from evilinsult API (via a proxy to mitigate CORS error)
// future goal: delay picture swap till API call is complete
insultApp.getInsult = (e) => {
  // +Math.floor(...) function used as a 'cache breaking' technique to ensure API sends fresh data (new, random result) when requested
  fetch('https://proxy.junocollege.com/https://evilinsult.com/generate_insult.php?lang=en&type=jsonfetch(`https://proxy.junocollege.com/https://evilinsult.com/generate_insult.php?lang=en&type=json&version=' + Math.floor(Math.random() * 100000 + 1))
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResult) {
      // run language filter
      insultApp.languageFilter(jsonResult, insultApp.replaceInsultLeft, insultApp.replaceInsultRight, insultApp.isLeftSide);
      // re-enable insult button
      e.target.disabled = false;
    });
};

// retrieve advice from adviceslip API. Cache-breaking technique used again to 
insultApp.getAdvice = (e, isLeft) => {
  fetch('https://api.adviceslip.com/advice?type=json&version=' + Math.floor(Math.random() * 100000 + 1))
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResult) {
      const advice = jsonResult.slip;
      // if isLeft = true, the left/top speech bubble will populate, and vice versa
      const side = isLeft ? '#leftPersonSpeechText' : '#rightPersonSpeechText';
      const container = isLeft ? 'leftSpeechContainer' : 'rightSpeechContainer';
      const adviceLeftText = document.querySelector(side);
      // replace existing content
      adviceLeftText.innerHTML = advice.advice;
      // toggle the font awesome turn indicator to the correct player
      if (isLeft) {
        insultApp.turnIndicatorRight();
      } else {
        insultApp.turnIndicatorLeft();
      }
      // re-enable advice button and make speech bubble visible
      e.target.disabled = false;
      document.getElementById(container).style.visibility = 'visible';
    });
};

// future goal: reduce insultApp.replaceInsultLeft and insultApp.replaceInsultRight into one function, and combine into insultApp.getInsult, much like how insultApp.getAdvice is structured.
insultApp.replaceInsultLeft = (filteredInsult) => {
  // replace existing speech bubble content left
  const insultLeftText = document.querySelector('#leftPersonSpeechText');
  insultLeftText.innerHTML = filteredInsult;
  // make speech bubble visible, as it is hidden on game start/reset
  document.getElementById('leftSpeechContainer').style.visibility = 'visible';
  // toggle the font awesome turn indicator to the correct player
  insultApp.turnIndicatorRight();
};

insultApp.replaceInsultRight = (filteredInsult) => {
  // replace existing speech bubble content right
  const insultRightText = document.querySelector('#rightPersonSpeechText');
  insultRightText.innerHTML = filteredInsult;
  // make speech bubble visible, as it is hidden on game start/reset
  document.getElementById('rightSpeechContainer').style.visibility = 'visible';
  // toggle the font awesome turn indicator to the correct player
  insultApp.turnIndicatorLeft();
};

// future goal: can also refactor these two into one function
// font awesome icon indicating right player's turn. Customized to rotate 35 degrees to point up toward the character on the left.
insultApp.turnIndicatorLeft = () => {
  const leftIndicator = document.querySelector('i');
  leftIndicator.innerHTML = `<i class="fa-regular fa-4x fa-hand-point-left fa-rotate-by" style="--fa-rotate-angle: 35deg;"></i>`
};

// font awesome icon indicating right player's turn. Customized to rotate -35 degrees to point up toward the character on the right.
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

insultApp.textReset = () => {
  const reset = document.querySelector('#leftPersonSpeechText', '#rightPersonSpeechText');
  reset.innerHTML = '';
};

// function to reset game/counters/images
// future goal: use Math function from above on hard coded numbers
insultApp.gameReset = (e) => {
  // images and their alt text reset to neutral
  insultApp.leftImage.src = leftPictures[5].imgLoc;
  insultApp.leftImage.alt = leftPictures[5].altText;
  insultApp.rightImage.src = rightPictures[5].imgLoc;
  insultApp.rightImage.alt = rightPictures[5].altText;
  // clear speech bubbles 
  insultApp.textReset();
  // set turn indicator to left player
  insultApp.turnIndicatorLeft();
  // counters to middle
  insultApp.leftCounter = Math.floor(leftPictures.length / 2);
  insultApp.rightCounter = Math.floor(rightPictures.length / 2);

  // re-enable advice button
  e.target.disabled = false;
  // hiding speech bubbles until user clicks insult/advise
  document.getElementById('leftSpeechContainer').style.visibility = 'hidden';
  document.getElementById('rightSpeechContainer').style.visibility = 'hidden';
};

// function that triggers when counter reaches either limit, 0 or 10, and alerts with respective message, then runs gameReset function
insultApp.checkEndGame = (e, isAdvice) => {
  const counter = isAdvice ? 10 : 0;
  const alertMsg = isAdvice ? 'You praised them into a new dimension!' : 'You insulted them to death.';
  // wrapped in a setTimeout of 1 second to allow user to see the final explosion/zen graphic before alert appears.
  setTimeout(() => {
    if (insultApp.leftCounter === counter ||
      insultApp.rightCounter === counter) {
      Swal.fire({
        text: alertMsg,
        iconHtml: '<span style="font-size: 2em;">😬</span>',
      }).then(() => {
        // call function to reset game
        insultApp.gameReset(e);

      });

    };
  }, 1000)
};

// add event listeners
insultApp.getAdviceOrInsult = (button, isAdvice) => {
  const fetchData = (e) => {
    if (isAdvice) {
      insultApp.getAdvice(e, insultApp.isLeftSide);
    } else {
      insultApp.getInsult(e);
    };
  };

  document.getElementById(button).addEventListener("click", e => {
    e.target.disabled = true;
    if (insultApp.isLeftSide) {
      fetchData(e);
      insultApp.isLeftSide = !insultApp.isLeftSide;
      // future goal: explore ternary code here instead of if/else
      if (isAdvice) {
        insultApp.rightCounter++;
      } else {
        insultApp.rightCounter--;
      }
      // inelegant solution for the image changing before the API call from evilinsult is retrieved.
      setTimeout(() => {
        insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
        insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
      }, "420")
      // checking to see if in an end game situation
      insultApp.checkEndGame(e, isAdvice);
      //player 2 (Right)
    } else {
      fetchData(e);
      insultApp.isLeftSide = !insultApp.isLeftSide;
      // again, ternary statement here in future
      if (isAdvice) {
        insultApp.leftCounter++;
      } else {
        insultApp.leftCounter--;
      }
      // inelegant solution for the image changing before the API call from evilinsult is retrieved.
      setTimeout(() => {
        insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
        insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
      }, "420")
      // checking to see if in an end game situation
      insultApp.checkEndGame(e, isAdvice);
    };
  });
};

// listen for "Start" button click event
insultApp.gameStartListener = () => {
  document.getElementById('startButton').addEventListener("click", e => {
    insultApp.gameStart();
  });
};

insultApp.gameStart = () => {
  // kicks off after user clicks Start button
  insultApp.removeWelcome();
  insultApp.setMiddle();
  insultApp.turnIndicatorLeft();
  insultApp.getAdviceOrInsult('insultButton', false);
  insultApp.getAdviceOrInsult('adviceButton', true);
};

// init function to kick off the code
insultApp.init = () => {
  insultApp.leftImage = document.getElementById('leftPersonImage');
  insultApp.rightImage = document.getElementById('rightPersonImage');
  insultApp.leftImage.src = leftPictures[insultApp.leftCounter].imgLoc;
  insultApp.leftImage.alt = leftPictures[insultApp.leftCounter].altText;
  insultApp.rightImage.src = rightPictures[insultApp.rightCounter].imgLoc;
  insultApp.rightImage.alt = rightPictures[insultApp.rightCounter].altText;
  Swal.fire({
    title: 'Warning!',
    text: 'Naughty language ahead. To filter out naughty words, select G-Rated below.',
    icon: 'success',
    iconHtml: '<span style="font-size: 2em;">🙈</span>',
    showCancelButton: true,
    cancelButtonText: 'G-Rated',
    confirmButtonText: 'R-Rated',
  })
    // confirmation of users choice of censorship or not
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Fuckin' rad!`,
          text: 'Naughty words inbound!',
          icon: 'success'
        }).then(function () {
          toggleFilter(false); // Disable the language filter
          console.log('No language filter via swal')
        });
      } else {
        Swal.fire({
          title: `Safe mode active!`,
          text: 'Your sensitive eyes are safe.',
          icon: 'success'
        }).then(function () {
          console.log('Language filter via swal');
          toggleFilter(true); // Enable the language filter
        });
      };
    });

  insultApp.gameStartListener();
};
insultApp.init();