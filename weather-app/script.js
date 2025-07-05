const api_key = '908a0f095a22e6199ad8599543cbc6c3';
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

const searchInput = document.querySelector('.searchInput');
const form = document.querySelector('.search-box');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkWeather(searchInput.value);
    searchInput.value = '';
})

async function checkWeather(cityName) {
    // const rawData = await fetch(api_url);    
    const rawData = await fetch(api_url + cityName + `&appid=${api_key}`);

    if (rawData.status === 404) {
        const error = document.querySelector('.error')
        error.style.display = 'block';

        const weather = document.querySelector('.weather-info');
        weather.style.visibility = 'hidden';
    }

    const parsedData = await rawData.json();

    console.log(parsedData);
    console.log(cityName);

    const location = document.querySelector('.location')
    location.innerHTML = parsedData.name;

    const temperature = document.querySelector('.temperature');
    temperature.innerHTML = Math.round(parsedData.main.temp);

    const description = document.querySelector('.description');
    description.innerHTML = parsedData.weather[0].description;
    console.log(description.innerHTML);


    const humidity = document.querySelector('.humidity')
    humidity.innerHTML = `${parsedData.main.humidity} %`;

    const wind = document.querySelector('.wind');
    wind.innerHTML = `${parsedData.wind.speed} km/h`;

    const weatherIcon = document.querySelector('.weather-icon');
    for (const value of parsedData.weather) {
        if (value.main === 'Clouds') {
            weatherIcon.src = 'images/cloudy.png'
        } else if (value.main === 'Drizzle') {
            weatherIcon.src = 'images/weather.png'
        } else if (value.main === 'Mist') {
            weatherIcon.src = 'images/clouds.png'
        } else if (value.main === 'Rain') {
            weatherIcon.src = 'images/rainy-day.png'
        } else {
            weatherIcon.src = 'images/sun.png'
        }
    }
}





