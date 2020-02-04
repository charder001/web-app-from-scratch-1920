fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/39269c07a47ba71c7c9af7ee9e8415fd/37.8267,-122.4233?units=si`)
  .then((response) => {
    if (response.ok)  {
    return response.json();
    } else {
      return Promise.reject(response)
    }
  })

  .then((myJson) => {
    console.log(myJson);
    var weatherValues = {
      temperature: myJson.currently.temperature,
      precipIntensity: myJson.currently.precipIntensity,
      precipProbability: myJson.currently.precipProbability
    }

    for (let [key, value] of Object.entries(weatherValues)){
      console.log(`${key}: ${value}`)
      var p = document.getElementById("p1")
      p.insertAdjacentHTML("afterend",  `<p>${key}: ${value}</p>`)
    }

  }) .catch ((err) => {
    console.log("An error occured - ", err)
  })


  