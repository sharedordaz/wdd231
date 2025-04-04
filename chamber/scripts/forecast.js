const APIKEY2 = "98298da08dfeabffbafdcc753eee7800";

const lat2 = "16.7770601";
const lon2 = "3.0088459";

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat2}&lon=${lon2}&appid=${APIKEY2}`;

console.log(url2);


// Weather Forecast section
let todayTemp = document.getElementById('today_temp');
let tomTemp = document.getElementById('tom_temp');
let twoTemp = document.getElementById('two_temp');

let today = document.getElementById('today');
let tomorrow = document.getElementById('tom_temp');
let two_days = document.getElementById('two_temp');


function getDayOfWeek(unixTime) {
    const date = new Date(unixTime * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }
  

fetch(url2)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON response
  })
  .then(data => {
    console.log(data); // Handle the data
    
    let today_weekd = getDayOfWeek(data.list[0].dt);
    //console.log(today_weekd);
    today.textContent = today_weekd;
    let tomorrow_weekd = getDayOfWeek(data.list[8].dt);
    //console.log(today_weekd);
    tomorrow.textContent = tomorrow_weekd;   
    
    let two_weekd = getDayOfWeek(data.list[16].dt);
    console.log(Date(data.list[2].dt));
    two_days.textContent = two_weekd;

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });