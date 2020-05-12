export var DSurlBuilder = (location) => {
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://api.darksky.net/forecast/";
  const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
  const celcius = "?units=si";
  const url = cors + endpoint + key + location + celcius;
  return url;
}

export var GIurlBuilder = () => {
  const cors = "https://cors-anywhere.herokuapp.com/";
  const gifEndpoint = "https://api.giphy.com/v1/gifs/search?";
  let gifTag = "q=sun&"
  let gifKey = "api_key=PjKmqmgJFf8rU0K7z9Z7t7hTeNUZBnbk";
  let gifLimit = "&limit=5"
  const gifUrl = cors + gifEndpoint + gifTag + gifKey + gifLimit;
  return gifUrl;
}