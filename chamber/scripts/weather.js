// Weather WEEK WORK
const APIKEY = "7c154e5bd0ec88bbdd5d8e85f6c2fdec";
const lat = "16.7770601";
const lon = "3.0088459";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

//console.log(url);



// Current Weather section
let temperature = document.getElementById('temperature');
let tempIcon = document.getElementById('temp_icon');
let high = document.getElementById('high');
let low = document.getElementById('low');
let humidity = document.getElementById('humidity');
let sunrise = document.getElementById('sunrise');
let sunset = document.getElementById('sunset');



fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //console.log(response.json);
    return response.json(); // Parse JSON response
  })
  .then(data => {
    temperature.textContent = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2);
    high.textContent = ((data.main.temp_max - 273.15) * 9/5 + 32).toFixed(2);
    low.textContent = ((data.main.temp_min - 273.15) * 9/5 + 32).toFixed(2);
    humidity.textContent = data.main.humidity;

    let sunrise_date = new Date(data.sys.sunrise * 1000);
    let sunset_date = new Date (data.sys.sunset * 1000)
    sunrise.textContent = sunrise_date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true
      });
    sunset.textContent = sunset_date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        hour12: true
      });
 
    //console.log(data); 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

