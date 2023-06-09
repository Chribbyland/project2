//language filter for the main js
let filterEnabled = true;
export const toggleFilter = (enabled) => {
  filterEnabled = enabled;
};
export const languageFilter = (jsonResult, replaceLeft, replaceRight, side) => {
  if (!filterEnabled) {
    if (side) {
      replaceRight(jsonResult.insult);
    } else {
      replaceLeft(jsonResult.insult);
    }
    return;
    }
  
  let badWords = / anal| and| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| devilcock| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| motherfuck| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| semen| tampon| the| tit| turd| twat| vagina| wank| whore/gi;
  let rawInsult = jsonResult.insult;
  let filteredInsult = rawInsult.replace(badWords,'____');
  if (side) {
  replaceRight(filteredInsult);
  } else {
  replaceLeft(filteredInsult);
  };
};

const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Filter";
toggleButton.addEventListener("click", toggleFilter);

document.body.appendChild(toggleButton);