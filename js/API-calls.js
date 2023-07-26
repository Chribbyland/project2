import { insultApp } from './script.js';
// API calls for Evil Insult and Advice Slip API's
// Also code for displaying and replacing insults/advice


// currently, it is always the right player whose text field gets populated...
export const getInsult = (e, isLeft) => {
  // Retrieve insult from evilinsult API (via a proxy to mitigate CORS error)
  fetch('https://proxy.junocollege.com/https://evilinsult.com/generate_insult.php?lang=en&type=json&version=' + Math.floor(Math.random() * 100000 + 1))
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResult) {
      const filteredInsult = jsonResult.insult;
      // if isLeft = true, the left/top speech bubble will populate, and vice versa
      const side = isLeft ? '#leftPersonSpeechText' : '#rightPersonSpeechText';
      const container = isLeft ? 'leftSpeechContainer' : 'rightSpeechContainer';
      const insultText = document.querySelector(side);
      // Clear the innerHTML of the opposite side's insultText
      const oppositeSide = isLeft ? '#rightPersonSpeechText' : '#leftPersonSpeechText';
      const oppositeInsultText = document.querySelector(oppositeSide);
      oppositeInsultText.innerHTML = '...';
      // Fade out the current insult text
      insultText.style.opacity = 0;
      insultText.style.transition = 'opacity 0ms';
      // Set the new insult text and fade it in
      setTimeout(function () {
        insultText.innerHTML = filteredInsult;
        insultText.style.transition = 'opacity 350ms';
        insultText.style.opacity = 1;
      }, 0);
      // replace existing content
      insultText.innerHTML = filteredInsult;
      // toggle the font awesome turn indicator to the correct player
      if (isLeft) {
        insultApp.turnIndicator('right', 35);
      } else {
        insultApp.turnIndicator('left', -35);
      }
      // re-enable advice button and make speech bubble visible
      e.target.disabled = false;
      document.getElementById(container).style.visibility = 'visible';
    });
};

// retrieve advice from adviceslip API. Cache-breaking technique used again to ensure API sends fresh data (new, random result) when requested
export const getAdvice = (e, isLeft) => {
  fetch('https://api.adviceslip.com/advice?type=json&version=' + Math.floor(Math.random() * 100000 + 1))
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonResult) {
      const advice = jsonResult.slip;
      // if isLeft = true, the left/top speech bubble will populate, and vice versa
      const side = isLeft ? '#leftPersonSpeechText' : '#rightPersonSpeechText';
      const container = isLeft ? 'leftSpeechContainer' : 'rightSpeechContainer';
      const adviceText = document.querySelector(side);
      // Clear the innerHTML of the opposite side's adviceText
      const oppositeSide = isLeft ? '#rightPersonSpeechText' : '#leftPersonSpeechText';
      const oppositeAdviceText = document.querySelector(oppositeSide);
      oppositeAdviceText.innerHTML = '...';
      // Fade out the current advice text
      adviceText.style.opacity = 0;
      adviceText.style.transition = 'opacity 0ms';
      // Set the new advice text and fade it in
      setTimeout(function () {
        adviceText.innerHTML = advice.advice;
        adviceText.style.transition = 'opacity 350ms';
        adviceText.style.opacity = 1;
      }, 0);
      // replace existing content
      adviceText.innerHTML = advice.advice;
      // toggle the font awesome turn indicator to the correct player
      if (isLeft) {
        insultApp.turnIndicator('right', 35);
      } else {
        insultApp.turnIndicator('left', -35);
      }
      // re-enable advice button and make speech bubble visible
      e.target.disabled = false;
      document.getElementById(container).style.visibility = 'visible';
    });
};