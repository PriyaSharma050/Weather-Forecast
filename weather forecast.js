const weatherIcon = document.querySelector(".weatherIcon"),
temperature = document.querySelector(".temperature"),
chanceOfRain = document.querySelector(".chanceOfRain"),
description = document.querySelector(".description"),
date = document.querySelector(".date"),
city = document.querySelector(".city"),


threeAm = document.getElementById("threeAm"),
sixAm = document.getElementById("sixAm"),
nineAm = document.getElementById("nineAm"),
twelvePm = document.getElementById("twelvePm"),
threePm = document.getElementById("threePm"),
sixPm = document.getElementById("sixPm"),
ninePm = document.getElementById("ninePm"),
twelveAm = document.getElementById("twelveAm"),

Sunrise = document.getElementById("Sunrise"),
RealFeel = document.getElementById("Real-feel"),
Wind = document.getElementById("Wind"),
Pressure = document.getElementById("Pressure"),
Humidity = document.getElementById("Humidity"),
Visibility = document.getElementById("Visibility"),
UVIndex = document.getElementById("UV Index"),
Sunset = document.getElementById("Sunset"),
week_2 = document.getElementById("week_2");

WEATHER_API_ENDPOINT=''
WEATHER_DATA_ENDPOINT=''

async function getCoordinates(city) {
  const apiKey = 'YOUR_API_KEY';  // API key from the geocoding service (OpenWeather, Google, etc.)
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  return {
      latitude: data[0].lat,
      longitude: data[0].lon
  };
}


async function getWeatherData(latitude, longitude) {
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,humidity_2m,pressure_msl,uv_index&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`;

  const response = await fetch(weatherUrl);
  const weatherData = await response.json();
  return weatherData;
}

async function getFullWeather(city) {
  // Step 1: Get coordinates from the city name
  const { latitude, longitude } = await getCoordinates(city);
  
  // Step 2: Get weather data from Open-Meteo API
  const weatherData = await getWeatherData(latitude, longitude);
  
  // Step 3: Extract the necessary data
  const currentWeather = weatherData.current_weather;
  const hourly = weatherData.hourly;
  const daily = weatherData.daily;
  
  const sunrise = daily.sunrise[0];
  const sunset = daily.sunset[0];
  const maxTemp = daily.temperature_2m_max[0];
  const minTemp = daily.temperature_2m_min[0];
  
  const hourlyForecast = {};
  const targetHours = [3, 6, 9, 12, 15, 18, 21, 0]; // in 24-hour format

  targetHours.forEach(hour => {
      const timeIndex = hourly.time.findIndex(t => new Date(t).getHours() === hour);
      if (timeIndex >= 0) {
          hourlyForecast[hour] = {
              temperature: hourly.temperature_2m[timeIndex],
              rainChance: hourly.precipitation[timeIndex],
              windSpeed: hourly.windspeed_10m[timeIndex],
              humidity: hourly.humidity_2m[timeIndex],
              pressure: hourly.pressure_msl[timeIndex],
              uvIndex: hourly.uv_index[timeIndex]
          };
      }
  });

  // Step 4: Display output
  console.log(`Weather for ${city}`);
  console.log(`Current Weather: ${currentWeather.temperature}°C, Real Feel: ${currentWeather.temperature}, Wind Speed: ${currentWeather.windspeed} km/h`);
  console.log(`Sunrise: ${sunrise}, Sunset: ${sunset}`);
  console.log(`3 AM: ${hourlyForecast[3]?.temperature}°C, Rain: ${hourlyForecast[3]?.rainChance}%`);
  console.log(`6 AM: ${hourlyForecast[6]?.temperature}°C, Rain: ${hourlyForecast[6]?.rainChance}%`);
  // Continue for 9 AM, 12 PM, 3 PM, etc.

  console.log(`Max Temp: ${maxTemp}°C, Min Temp: ${minTemp}°C`);

  // Fetch min and max temp for 3 days before and after
  const minMaxTemps = daily.temperature_2m_min.slice(-3).concat(daily.temperature_2m_max.slice(0, 3));
  console.log('Min/Max temperatures for surrounding days:', minMaxTemps);
}






















































































  // Get the current page URL
//   const currentPage = window.location.pathname;

//   // Map the current page to the corresponding navigation link
//   if (currentPage.includes("index.html")) {
//     document.getElementById("home").classList.add("active");
//   } else if (currentPage.includes("week.html")) {
//     document.getElementById("weekNav").classList.add("active");
//   } else if (currentPage.includes("map.html")) {
//     document.getElementById("mapNav").classList.add("active");
//   } else if (currentPage.includes("cities.html")) {
//     document.getElementById("citiesNav").classList.add("active");
//   } else if (currentPage.includes("contact.html")) {
//     document.getElementById("contactNav").classList.add("active");
//   }

