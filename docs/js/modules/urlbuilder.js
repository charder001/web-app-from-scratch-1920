export var DSurlBuilder = () => {
    const cors = "https://cors-anywhere.herokuapp.com/";
    const endpoint = "https://api.darksky.net/forecast/";
    const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
    let coordinates = "37.8267,-122.4233";
    const celcius = "?units=si";
    const url = cors + endpoint + key + coordinates + celcius;
    return url;
  }

 export var GIurlBuilder = () => {
    const gifEndpoint = "https://api.giphy.com/v1/gifs/random?";
    let gifKey = "api_key=PjKmqmgJFf8rU0K7z9Z7t7hTeNUZBnbk";
    let gifTag = "&tag=sun"
    const gifUrl = gifEndpoint + gifKey + gifTag;
    return gifUrl;
  }