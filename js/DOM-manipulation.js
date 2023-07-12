// initialize middle section for gameplay after start button is clicked
// left person speech container 
export const setMiddle = () => {
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

  // buttonCounter container
  const buttonCounterContainer = document.createElement('div');
  buttonCounterContainer.setAttribute('class', 'buttonCounterContainer');
  buttonCounterContainer.setAttribute('id', 'buttonCounterContainer');
  document.getElementById('middle').appendChild(buttonCounterContainer);

  // turn indicator container
  const turnIndicatorContainer = document.createElement('div');
  turnIndicatorContainer.setAttribute('class', 'turnIndicatorContainer');
  turnIndicatorContainer.setAttribute('id', 'turnIndicatorContainer');
  document.getElementById('buttonCounterContainer').appendChild(turnIndicatorContainer);

  // font awesome <i>
  const turnIndicator = document.createElement('i');
  document.getElementById('turnIndicatorContainer').appendChild(turnIndicator);

  // buttonBoxes container
  const buttonBoxes = document.createElement('div');
  buttonBoxes.setAttribute('class', 'buttonBoxes');
  buttonBoxes.setAttribute('id', 'buttonBoxes');
  document.getElementById('buttonCounterContainer').appendChild(buttonBoxes);

  // insult button container
  const insultButtonBox = document.createElement('div');
  insultButtonBox.setAttribute('class', 'buttonBox insultButtonBox');
  insultButtonBox.setAttribute('id', 'insultButtonBox');
  document.getElementById('buttonBoxes').appendChild(insultButtonBox);

  // insult button 
  const insultButton = document.createElement('button');
  insultButton.setAttribute('class', 'insultButton');
  insultButton.setAttribute('id', 'insultButton');
  insultButton.innerText = "Insult!"
  document.getElementById('insultButtonBox').appendChild(insultButton);

  // advice button container
  const adviceButtonBox = document.createElement('div');
  adviceButtonBox.setAttribute('class', 'buttonBox adviceButtonBox');
  adviceButtonBox.setAttribute('id', 'adviceButtonBox');
  document.getElementById('buttonBoxes').appendChild(adviceButtonBox);

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