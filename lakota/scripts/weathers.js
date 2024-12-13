const weatherIcon = document.querySelector('#weather-icon');
const figcaption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=45.55&lon=-101.41&units=imperial&appid=78daf3c11aa620f13e25cc83f81c8bd1';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const weatherdata = await response.json();
      console.log(weatherdata);
      displayData(weatherdata);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  document.querySelector('p').innerHTML = `The current temperature in ${data.name}, ${data.sys.country} is <strong>${data.main.temp.toFixed(1)}</strong>°F`;

  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let description = data.weather[0].description;

  document.querySelector('#weather-icon').setAttribute('src', iconsrc);
  document.querySelector('#weather-icon').setAttribute('alt', description);
}

apiFetch();