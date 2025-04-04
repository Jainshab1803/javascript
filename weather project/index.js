const apiKey = "4bff7904bc140a145bff371927f7df24";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const fullUrl = `${apiUrl}${city}&appid=${apiKey}`;
        console.log("Fetching URL:", fullUrl);
        const response = await fetch(fullUrl);
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`City not found or API error: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        console.log("API Data:", data);
        
        // DOM updates
        document.querySelector(".temp h1").innerHTML = `${Math.round(data.main.temp)}°C`; // Temperature
        document.querySelector(".temp h2.city").innerHTML = data.name; // City
        
        // Humidity aur Wind Speed ke liye specific selectors
        document.querySelector(".humidity p").innerHTML = `${data.main.humidity}%`; // Humidity
        document.querySelector(".wind p").innerHTML = `${data.wind.speed} km/h`; // Wind Speed
        
        // Weather icon update
        const weatherIcon = document.querySelector(".cloud img");
        const weatherMain = data.weather[0].main.toLowerCase();
        weatherIcon.src = `${weatherMain}.png`;
        
    } catch (error) {
        console.error('Error:', error.message);
        alert(`Kuch galat hua: ${error.message}`);
    }
}

searchButton.addEventListener("click", () => {
    if (searchBox.value.trim()) {
        checkWeather(searchBox.value.trim());
    }
});

searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && searchBox.value.trim()) {
        checkWeather(searchBox.value.trim());
    }
});