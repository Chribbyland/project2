//language filter for the main js
export const languageFilter = (jsonResult, replaceLeft, replaceRight, side) => {
  let badWords = / anal| anus| arse| ass| ballsack| balls| bastard| bitch| blowjob| boner| boob| bugger| bum| butt| buttplug| clitoris| cock| crap| cunt| cum| devilcock| dick| dildo| dyke| fag| feck| fellate| fellatio| fuck| hitler| homo| jerk| jew| jizz| labia| motherfuck| muff| penis| piss| poop| prick| pube| pussy| queer| rape| retard| scrotum| sex| shit| slut| spunk| semen| tampon| tit| turd| twat| vagina| wank| whore/gi;
  let rawInsult = jsonResult.insult;
  console.log(rawInsult);
  let filteredInsult = rawInsult.replace(badWords,'____');
  if (side) {
  replaceRight(filteredInsult);
  } else {
  replaceLeft(filteredInsult);
  };
};