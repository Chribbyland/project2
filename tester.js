fetch('https://proxy-ugwolsldnq-uc.a.run.app/https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonResult) {
        console.log(jsonResult);
        const insult = jsonResult.insult;
        console.log(insult)
    });

