// get DOM elements
const body = document.querySelector('body');

// get search elements
const input = document.getElementById('search-input');
const button = document.getElementById('search-button');

// get info elements
const city = document.getElementById('city-name');
const time = document.getElementById('hora-local');
const temp = document.getElementById('temp');
const sencacaoTermica = document.getElementById('temp-sensation');
const wind = document.getElementById('wind-text');
const max = document.getElementById('max-temp');
const min = document.getElementById('min-temp');
const imgDescription = document.getElementById('img-description');
const weatherImg = document.getElementById('weather-desc');
const dateDay = document.querySelectorAll('.date-day');
const dateWeek = document.querySelectorAll('.date-week');


const data = document.querySelectorAll('.date-day');
const weekDay = document.querySelectorAll('.date-week');

const minTemp = document.querySelectorAll('.min-temp-text');
const maxTemp = document.querySelectorAll('.max-temp-text');

const apiKey = '2c7a1985e25aab3a0165a4e1ce5872c4';


const callAPI = () => {
    if(input.value === 0) return;

    getDataAPI(input.value);
}

async function getDataAPI(cidade) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cidade)}&appid=${encodeURI(apiKey)}&lang=pt_br&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    if(data.cod === '404') {
        input.value = '';
        input.placeholder = 'Local não encontrado';
        return;
    }
    loadData(data);
    getData5d(cidade);
    calcHoras(data);
    addToLocalStorage(city.innerHTML, temp.innerHTML.split(' ')[1]);
}

function loadData(data) {
    city.innerHTML = `${data.name}, ${data.sys.country}`;
    temp.innerHTML = `Temperatura: ${data.main.temp.toFixed(1)}°C`;
    sencacaoTermica.innerHTML = `Sensação Térmica: ${Math.round(data.main.feels_like)}°C`;
    wind.innerHTML = `Vento: ${(data.wind.speed*3.6).toFixed(1)}km/h`;
    imgDescription.innerHTML = `${data.weather[0].description}`;
    weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

async function getLatAPI(lat, lon) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${encodeURI(apiKey)}&lang=pt_br&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    
    loadData(data);
    getData5d(city.innerHTML.split(','[0]));
    calcHoras(data);
    addToLocalStorage(city.innerHTML, temp.innerHTML.split(' ')[1]);
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && this === document.activeElement) {
        callAPI();
    }
});
  


// git push -u origin 'Principal(Main)'