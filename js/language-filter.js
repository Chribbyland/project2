//language filter for the main js
let filterEnabled = true;
const toggleFilter = () => {
  filterEnabled = !filterEnabled;
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.textContent = filterEnabled ? "On" : "Off";
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
  
  let badWords = / anal| and| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| devilcock| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| motherfuck| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| semen| tampon| the| tit| turd| twat| vagina| wank| whore| you/gi;
  let rawInsult = jsonResult.insult;
  console.log(rawInsult);
  let filteredInsult = rawInsult.replace(badWords,'____');
  if (side) {
  replaceRight(filteredInsult);
  } else {
  replaceLeft(filteredInsult);
  };
};


toggleButton.addEventListener("click", toggleFilter);

document.body.appendChild(toggleButton);