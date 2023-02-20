const apiKey = "b4c913eb38369cfccbc0a30e0e9fb828";
const apiCountryURL = "https://countryflagsapi.com/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

//Tornando os elementos dinâmicos para que sejam exibidos em mudança na página HTML
const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    // console.log(data);
    return data
}

//Chamando a função ao pesquisar 
const showWeatherData = async (city) => {
    getWeatherData(city);

    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryURL + data.sys.country);
    humidity.innerText = (`${data.main.humidity}%`);
    windElement.innerText = (`${data.wind.speed}km/h`);

    weatherContainer.classList.remove("hide");

}


//Função do botão

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);

});

cityInput.addEventListener("keyup", (e) => {

    if(e.code === "Enter"){
        const city = e.target.value;
        showWeatherData(city);
    }
});
