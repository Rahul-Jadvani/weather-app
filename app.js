const apiKey = `f8324b17079341b157068561f8ce95b2`;

const url = `https://api.openweathermap.org/data/2.5/weather?`;

let search = document.querySelector(".search");
let button = document.querySelector(".btn");

const checkWeather = async (City) => {
    const response = await fetch(`${url}q=${City}&appid=${apiKey}&units=metric`);
    let data = await response.json();

    console.log(data);

    let city = document.querySelector(".c-name");
    city.innerHTML = `<h2>${data.name}</h2>`;

    let temp = document.querySelector(".temp");
    temp.innerHTML = `<h3>${Math.round(data.main.temp)}&deg;c</h3>`;

    let humidity = document.querySelector(".info11");
    humidity.innerHTML = `${data.main.humidity}%`;

    let windSpeed = document.querySelector(".info22");
    windSpeed.innerHTML = `${data.wind.speed} km/h`;

    let condition = document.querySelector(".condition");
    switch (data.weather[0].main) {
        case "Clear":
            condition.innerHTML = `<i class="fas fa-sun"></i>`;
            break;
        case "Clouds":
            condition.innerHTML = `<i class="fas fa-cloud"></i>`;
            break;
        case "Rain":
            condition.innerHTML = `<i class="fas fa-cloud-showers-heavy"></i>`;
            break;
        case "Drizzle":
            condition.innerHTML = `<i class="fas fa-cloud-rain"></i>`;
            break;
        case "Thunderstorm":
            condition.innerHTML = `<i class="fas fa-bolt"></i>`;
            break;
        case "Snow":
            condition.innerHTML = `<i class="fas fa-snowflake"></i>`;
            break;
        case "Mist":
        case "Smoke":
            condition.innerHTML = `<i class="fas fa-smog"></i>`;
        case "Haze":
        case "Dust":
        case "Fog":
            condition.innerHTML = `<i class="fas fa-smog"></i>`;
        case "Sand":
        case "Ash":
        case "Squall":
        case "Tornado":
            condition.innerHTML = `<i class="fa-solid fa-tornado"></i>`;
            break;
        default:
            condition.innerHTML = `<i class="fas fa-cloud-sun"></i>`;
            break;
    }
}

button.addEventListener("click", (evt) => {
    evt.preventDefault();
    let sval = search.value;
    checkWeather(sval);
});

document.addEventListener("keydown", (evt) => {
    if (evt.key === 'Enter') {
        evt.preventDefault();
        let sval = search.value;
        checkWeather(sval);
    }
});
