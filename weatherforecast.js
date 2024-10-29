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

// WEATHER_API_ENDPOINT=''
// WEATHER_DATA_ENDPOINT=''

// async function getCoordinates(city) {
//   const apiKey = 'YOUR_API_KEY';  // API key from the geocoding service (OpenWeather, Google, etc.)
//   const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;

//   const response = await fetch(url);
//   const data = await response.json();
//   return {
//       latitude: data[0].lat,
//       longitude: data[0].lon
//   };
// }


// async function getWeatherData(latitude, longitude) {
//   const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,humidity_2m,pressure_msl,uv_index&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`;

//   const response = await fetch(weatherUrl);
//   const weatherData = await response.json();
//   return weatherData;
// }

// async function getFullWeather(city) {
//   // Step 1: Get coordinates from the city name
//   const { latitude, longitude } = await getCoordinates(city);
  
//   // Step 2: Get weather data from Open-Meteo API
//   const weatherData = await getWeatherData(latitude, longitude);
  
//   // Step 3: Extract the necessary data
//   const currentWeather = weatherData.current_weather;
//   const hourly = weatherData.hourly;
//   const daily = weatherData.daily;
  
//   const sunrise = daily.sunrise[0];
//   const sunset = daily.sunset[0];
//   const maxTemp = daily.temperature_2m_max[0];
//   const minTemp = daily.temperature_2m_min[0];
  
//   const hourlyForecast = {};
//   const targetHours = [3, 6, 9, 12, 15, 18, 21, 0]; // in 24-hour format

//   targetHours.forEach(hour => {
//       const timeIndex = hourly.time.findIndex(t => new Date(t).getHours() === hour);
//       if (timeIndex >= 0) {
//           hourlyForecast[hour] = {
//               temperature: hourly.temperature_2m[timeIndex],
//               rainChance: hourly.precipitation[timeIndex],
//               windSpeed: hourly.windspeed_10m[timeIndex],
//               humidity: hourly.humidity_2m[timeIndex],
//               pressure: hourly.pressure_msl[timeIndex],
//               uvIndex: hourly.uv_index[timeIndex]
//           };
//       }
//   });

//   // Step 4: Display output
//   console.log(`Weather for ${city}`);
//   console.log(`Current Weather: ${currentWeather.temperature}°C, Real Feel: ${currentWeather.temperature}, Wind Speed: ${currentWeather.windspeed} km/h`);
//   console.log(`Sunrise: ${sunrise}, Sunset: ${sunset}`);
//   console.log(`3 AM: ${hourlyForecast[3]?.temperature}°C, Rain: ${hourlyForecast[3]?.rainChance}%`);
//   console.log(`6 AM: ${hourlyForecast[6]?.temperature}°C, Rain: ${hourlyForecast[6]?.rainChance}%`);
//   // Continue for 9 AM, 12 PM, 3 PM, etc.

//   console.log(`Max Temp: ${maxTemp}°C, Min Temp: ${minTemp}°C`);

//   // Fetch min and max temp for 3 days before and after
//   const minMaxTemps = daily.temperature_2m_min.slice(-3).concat(daily.temperature_2m_max.slice(0, 3));
//   console.log('Min/Max temperatures for surrounding days:', minMaxTemps);
// }




// const apiKey = 'YOUR_API_KEY';  // Nominatim or OpenWeather API key

// // Function to get city coordinates (Nominatim)
// async function getCoordinates(cityName) {
//     const url = `https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.length > 0) {
//         return {
//             latitude: data[0].lat,
//             longitude: data[0].lon,
//             city: data[0].display_name
//         };
//     } else {
//         throw new Error("City not found");
//     }
// }

// // Function to get weather data (Open-Meteo)
// async function getWeatherData(latitude, longitude) {
//     const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation,weathercode,windspeed_10m,humidity_2m,pressure_msl,uv_index,visibility&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=auto`;
//     const response = await fetch(weatherUrl);
//     return await response.json();
// }

// // Main function to fetch and display weather data
// async function displayWeather(cityName) {
//     try {
//         // Get city coordinates using Nominatim API
//         const { latitude, longitude, city: cityDisplayName } = await getCoordinates(cityName);
        
//         // Fetch weather data from Open-Meteo API
//         const weatherData = await getWeatherData(latitude, longitude);

//         // Display city name and date
//         city.textContent = cityDisplayName;
//         date.textContent = new Date().toLocaleDateString();

//         // Current weather data
//         temperature.textContent = weatherData.current_weather.temperature + "°C";
//         RealFeel.textContent = weatherData.current_weather.temperature + "°C";  // Adjust for real feel if needed
//         Wind.textContent = weatherData.current_weather.windspeed + " km/h";
//         description.textContent = "Weather description";  // You can modify this based on weather code
//         chanceOfRain.textContent = weatherData.hourly.precipitation[0] + "%";
//         Pressure.textContent = weatherData.hourly.pressure_msl[0] + " hPa";
//         Humidity.textContent = weatherData.hourly.humidity_2m[0] + "%";
//         Visibility.textContent = weatherData.hourly.visibility[0] + " km";
//         UVIndex.textContent = weatherData.hourly.uv_index[0];

//         // Sunrise and Sunset
//         Sunrise.textContent = new Date(weatherData.daily.sunrise[0]).toLocaleTimeString();
//         Sunset.textContent = new Date(weatherData.daily.sunset[0]).toLocaleTimeString();

//         // Hourly temperatures
//         threeAm.textContent = weatherData.hourly.temperature_2m[3] + "°C";
//         sixAm.textContent = weatherData.hourly.temperature_2m[6] + "°C";
//         nineAm.textContent = weatherData.hourly.temperature_2m[9] + "°C";
//         twelvePm.textContent = weatherData.hourly.temperature_2m[12] + "°C";
//         threePm.textContent = weatherData.hourly.temperature_2m[15] + "°C";
//         sixPm.textContent = weatherData.hourly.temperature_2m[18] + "°C";
//         ninePm.textContent = weatherData.hourly.temperature_2m[21] + "°C";
//         twelveAm.textContent = weatherData.hourly.temperature_2m[0] + "°C";

//         // Max and Min Temperatures for the Week
//         week_2.textContent = `Max: ${weatherData.daily.temperature_2m_max[0]}°C, Min: ${weatherData.daily.temperature_2m_min[0]}°C`;

//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// }

// // Trigger the function to display weather
// // For example, call displayWeather('New York') when a city is entered
// displayWeather('London');  // Example: to get London weather by default


// const apiKey = 'YOUR_OPENWEATHER_API_KEY';  // Replace with your OpenWeather API Key

// Function to get city coordinates using OpenWeather Geocoding API
// async function getCoordinates(cityName) {
//     const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`;
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.length > 0) {
//         return {
//             latitude: data[0].lat,
//             longitude: data[0].lon,
//             city: data[0].name
//         };
//     } else {
//         throw new Error("City not found");
//     }
// }

// // Function to get weather data using OpenWeather One Call API
// async function getWeatherData(latitude, longitude) {
//     const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=metric&appid=${apiKey}`;
//     const response = await fetch(weatherUrl);
//     return await response.json();
// }

// // Main function to fetch and display weather data
// async function displayWeather(cityName) {
//     try {
//         // Get city coordinates using OpenWeather Geocoding API
//         const { latitude, longitude, city: cityDisplayName } = await getCoordinates(cityName);

//         // Fetch weather data from OpenWeather One Call API
//         const weatherData = await getWeatherData(latitude, longitude);

//         // Display city name and current date
//         city.textContent = cityDisplayName;
//         date.textContent = new Date().toLocaleDateString();

//         // Current weather data
//         temperature.textContent = weatherData.current.temp + "°C";
//         RealFeel.textContent = weatherData.current.feels_like + "°C";
//         Wind.textContent = weatherData.current.wind_speed + " km/h";
//         Pressure.textContent = weatherData.current.pressure + " hPa";
//         Humidity.textContent = weatherData.current.humidity + "%";
//         Visibility.textContent = weatherData.current.visibility / 1000 + " km";
//         UVIndex.textContent = weatherData.current.uvi;
//         description.textContent = weatherData.current.weather[0].description;
//         chanceOfRain.textContent = weatherData.hourly[0].pop * 100 + "%";  // Precipitation of first hour
//         weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png" alt="Weather Icon">`;

//         // Sunrise and Sunset
//         Sunrise.textContent = new Date(weatherData.current.sunrise * 1000).toLocaleTimeString();
//         Sunset.textContent = new Date(weatherData.current.sunset * 1000).toLocaleTimeString();

//         // Hourly temperatures
//         threeAm.textContent = weatherData.hourly[3].temp + "°C";
//         sixAm.textContent = weatherData.hourly[6].temp + "°C";
//         nineAm.textContent = weatherData.hourly[9].temp + "°C";
//         twelvePm.textContent = weatherData.hourly[12].temp + "°C";
//         threePm.textContent = weatherData.hourly[15].temp + "°C";
//         sixPm.textContent = weatherData.hourly[18].temp + "°C";
//         ninePm.textContent = weatherData.hourly[21].temp + "°C";
//         twelveAm.textContent = weatherData.hourly[0].temp + "°C";

//         // Max and Min Temperatures for the next week (adjust for 3 days if needed)
//         week_2.textContent = `Max: ${weatherData.daily[0].temp.max}°C, Min: ${weatherData.daily[0].temp.min}°C`;

//     } catch (error) {
//         alert('Error: ' + error.message);
//     }
// }

// Selectors for displaying weather data


// Function to fetch and display weather data
function fetchWeatherData(cityName) {
    const cityData = cities.find(c => c.name === cityName);
    
    if (cityData) {
        const { lat, lng } = cityData;
        const today = new Date();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 3); // Three days prior
        const endDate = new Date(today);
        endDate.setDate(today.getDate() + 3); // Three days after
        
        // Format dates as YYYY-MM-DD
        const formatDate = date => date.toISOString().split('T')[0];
        const start = formatDate(startDate);
        const end = formatDate(endDate);

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,apparent_temperature_max,apparent_temperature_min,precipitation_sum,wind_speed_10m_max,pressure_msl,humidity_2m_max,visibility_10km,uv_index_max&start_date=${start}&end_date=${end}&timezone=Asia/Kolkata`;
        
        fetch(weatherUrl)
            .then(response => response.json())
            .then(data => {
                // Extract weather data
                const daily = data.daily; // Adjust based on API response

                // Display current weather
                const currentDayIndex = 3; // Index for today in the 7-day range
                const currentWeather = daily.weathercode[currentDayIndex]; // Adjust as needed
                weatherIcon.src = `https://open-meteo.com/images/icons/${currentWeather}.png`; // Adjust as needed
                temperature.textContent = `${daily.temperature_2m_max[currentDayIndex]}°C / ${daily.temperature_2m_min[currentDayIndex]}°C`;
                chanceOfRain.textContent = `${daily.precipitation_sum[currentDayIndex]} mm`; // Adjust based on API response
                description.textContent = currentWeather; // Replace with actual description if available
                date.textContent = new Date().toLocaleDateString();
                city.textContent = cityName;

                // Hourly data (use the current day for hourly data)
                // Adjust indices based on actual API response
                const hourly = data.hourly; // Adjust based on API response
                threeAm.textContent = `${hourly.temperature_2m[0]}°C`;
                sixAm.textContent = `${hourly.temperature_2m[1]}°C`;
                nineAm.textContent = `${hourly.temperature_2m[2]}°C`;
                twelvePm.textContent = `${hourly.temperature_2m[3]}°C`;
                threePm.textContent = `${hourly.temperature_2m[4]}°C`;
                sixPm.textContent = `${hourly.temperature_2m[5]}°C`;
                ninePm.textContent = `${hourly.temperature_2m[6]}°C`;
                twelveAm.textContent = `${hourly.temperature_2m[7]}°C`;

                // Daily data for 3 days prior and 3 days after
                // Note: Adjust indices if needed based on your API response
                Sunrise.textContent = daily.sunrise.join(', ');
                Sunset.textContent = daily.sunset.join(', ');
                RealFeel.textContent = `Max: ${daily.apparent_temperature_max.join(', ')}°C / Min: ${daily.apparent_temperature_min.join(', ')}°C`;
                Wind.textContent = `${daily.wind_speed_10m_max.join(', ')} km/h`;
                Pressure.textContent = `${daily.pressure_msl.join(', ')} hPa`;
                Humidity.textContent = `${daily.humidity_2m_max.join(', ')}%`;
                Visibility.textContent = `${daily.visibility_10km.join(', ')} km`;
                UVIndex.textContent = `${daily.uv_index_max.join(', ')}`;
                week_2.textContent = `Max Temp: ${daily.temperature_2m_max.join(', ')}°C, Min Temp: ${daily.temperature_2m_min.join(', ')}°C`;
            })
            .catch(error => console.error('Error fetching weather data:', error));
    } else {
        console.error('City not found in the list');
    }
}


// Event listener for dropdown change
document.getElementById('cityDropdown').addEventListener('change', function(event) {
    const cityName = event.target.value;
    fetchWeatherData(cityName);
});

// Initialize dropdown
function populateDropdown() {
    const dropdown = document.getElementById('cityDropdown');
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = city.name;
        dropdown.appendChild(option);
    });
}

// Initialize dropdown on page load
window.onload = function() {
    populateDropdown();
};





















// Example usage: Trigger the function to display weather for a city
displayWeather('Jammu');  // You can replace 'New York' with any city name

// Function to initialize and display the map
function displayMap(latitude, longitude, cityName) {
  // Create a map centered on the given latitude and longitude
  const map = L.map('map').setView([latitude, longitude], 10);

  // Add OpenStreetMap tile layer to the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
  }).addTo(map);

  // Add a marker at the city location
  L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`<b>${cityName}</b>`)  // Display city name on marker popup
      .openPopup();
}

// Example usage: Call this function with coordinates and city name
// Replace with actual latitude, longitude, and city name as needed
displayMap(40.7128, -74.0060, 'New York');  // Example for New York

































































































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

