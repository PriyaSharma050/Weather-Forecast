document.addEventListener("DOMContentLoaded", function () {
  if (typeof populateDropdown === "function") {
    populateDropdown();
  }

  document
    .getElementById("cityDropdown")
    .addEventListener("change", function (event) {
      const city = JSON.parse(event.target.value);
      fetchWeatherData(city.lat, city.lng, city.name);
      showMap(city.lat, city.lng);
    });
});

function displayWeatherData(data, cityName) {
  document.getElementById("city").textContent = `City: ${cityName}`;

  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.hourly.temperature_2m[0]}°C`;
  document.getElementById(
    "chanceOfRain"
  ).textContent = `Chance of Rain: ${data.hourly.precipitation_probability_of_rain[0]}%`;
  document.getElementById(
    "description"
  ).textContent = `Description: ${data.hourly.weathercode[0]}`;
  document.getElementById(
    "date"
  ).textContent = `Date: ${new Date().toLocaleDateString()}`;

  const times = [
    "threeAm",
    "sixAm",
    "nineAm",
    "twelvePm",
    "threePm",
    "sixPm",
    "ninePm",
    "twelveAm",
  ];
  times.forEach((time, index) => {
    document.getElementById(time).textContent = `${time
        .replace(/([A-Z])/g, " $1")
      .toUpperCase()}: ${data.hourly.temperature_2m[index] || "N/A"}°C`;
  });
  
  document.getElementById(
    "Sunrise"
  ).textContent = `Sunrise: ${data.daily.sunrise[0]}`;
  document.getElementById(
    "RealFeel"
  ).textContent = `Real Feel: ${data.hourly.apparent_temperature[0]}°C`;
  document.getElementById(
    "Wind"
  ).textContent = `Wind Speed: ${data.hourly.wind_speed_10m[0]} km/h`;
  document.getElementById(
    "Pressure"
  ).textContent = `Pressure: ${data.hourly.pressure_msl[0]} hPa`;
  document.getElementById(
    "Humidity"
  ).textContent = `Humidity: ${data.hourly.humidity[0]}%`;
  document.getElementById(
    "Visibility"
  ).textContent = `Visibility: ${data.hourly.visibility[0]} km`;
  document.getElementById(
    "UVIndex"
  ).textContent = `UV Index: ${data.hourly.uv_index[0]}`;
  document.getElementById(
    "Sunset"
  ).textContent = `Sunset: ${data.daily.sunset[0]}`;

  for (let i = 1; i <= 7; i++) {
    document.getElementById(`day${i}`).textContent = ""; 
  }

  for (let i = 0; i < 7; i++) {
    const maxTemp = data.daily.temperature_2m_max[i];
    const minTemp = data.daily.temperature_2m_min[i];
    const forecastText = `Day ${i + 1}: Max: ${maxTemp}°C, Min: ${minTemp}°C`;
    document.getElementById(`day${i + 1}`).textContent = forecastText;
  }
  document.getElementById(
    "temperature"
  ).textContent = `Temperature: ${data.hourly.temperature_2m[0]}°C`;
}

async function fetchWeatherData(lat, lng, cityName) {
  // const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,precipitation_probability_of_rain,weathercode,sunrise,sunset,wind_speed_10m,pressure_msl,humidity,visibility,uv_index,apparent_temperature&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
  // const weatherUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.10&lon=9.58`//
  const weatherUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lng}`;
  // const weatherUrl = `https://api.weather.gov/points/${lat},${lng}/forecast`;
  //   const locationSearchUrl = `https://www.metaweather.com/api/location/search/?query=${city}`;
  // After finding the WOEID (Where On Earth ID), you can get the weather:
  //   const weatherUrl = `https://www.metaweather.com/api/location/${woeid}/`;

  try {
    const response = await fetch(weatherUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    if (!data || !data.hourly || !data.daily) {
      throw new Error("Incomplete data received from the API");
    }
    displayWeatherData(data, cityName);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById(
      "city"
    ).textContent = `Error: Unable to fetch weather data`;
  }
}
function showMap(lat, lng) {
  const map = L.map("map").setView([lat, lng], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
    map
  );
  L.marker([lat, lng]).addTo(map).openPopup();
}
