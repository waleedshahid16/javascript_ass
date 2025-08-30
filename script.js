const apiKey = "369c8b83cb9e01e455de58e096a67cc2";

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city === "") {
    alert("Enter your city name: ");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const weather = data.weather[0].description;
      const cityName = data.name;
      const icon = data.weather[0].icon;

      document.getElementById("weatherResult").innerHTML = `
        <h2>${cityName}</h2>
        <p>🌡 Temperature: ${temp} °C</p>
        <p>☁ Condition: ${weather}</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather icon">`;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = `
        <p style="color: red;">${error.message}</p>`;
    });
});
