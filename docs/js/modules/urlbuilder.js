export var DSurlBuilder = (location) => {
  const cors = "https://cors-anywhere.herokuapp.com/";
  const endpoint = "https://api.darksky.net/forecast/";
  const key = "39269c07a47ba71c7c9af7ee9e8415fd/";
  const celcius = "?units=si";
  const url = cors + endpoint + key + location + celcius;
  return url;
}
