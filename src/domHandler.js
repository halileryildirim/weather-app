import weatherApiHandler from "./weatherApiHandler";

const domHandler = (() => {
  const domLoader = (data) => {
    const mainContainer = document.querySelector("#weather-info-container");
    const cityMainInfo = document.querySelector("#city-info");

    const name = document.createElement("h2");
    name.innerText = `${data.cityName}, ${data.location}`;
    cityMainInfo.append(name);

    const cityEvent = document.createElement("p");
    cityEvent.id = "city-weather-event";
    cityEvent.innerText = data.weatherEvent;
    cityMainInfo.append(cityEvent);

    if (mainContainer.classList.contains("metrics")) {
      const cityTempC = document.createElement("div");
      cityTempC.innerText = `Temperature: ${data.tempC} °C`;
      cityMainInfo.append(cityTempC);

      const cityFeelsC = document.createElement("div");
      cityFeelsC.innerText = `Feels Like: ${data.feelsLikeTempC} °C`;
      cityMainInfo.append(cityFeelsC);

      const cityWindKmh = document.createElement("div");
      cityWindKmh.innerText = `Wind: ${data.windKmh} km/h`;
      cityMainInfo.append(cityWindKmh);
    } else if (mainContainer.classList.contains("us-standard")) {
      const citytempF = document.createElement("div");
      citytempF.innerText = `Temperature: ${data.tempF}°F`;
      cityMainInfo.append(citytempF);

      const cityFeelsF = document.createElement("div");
      cityFeelsF.innerText = `Feels like ${data.feelsLikeTempF}°F`;
      cityMainInfo.append(cityFeelsF);

      const cityWindMph = document.createElement("div");
      cityWindMph.innerText = `Wind: ${data.windMph} mph`;
      cityMainInfo.append(cityWindMph);
    }
    const cityHumidity = document.createElement("div");
    cityHumidity.innerText = `Humidity: ${data.humid}%`;
    cityMainInfo.append(cityHumidity);
  };

  async function domUpdater() {
    const button = document.querySelector("#save-button");
    const city = document.querySelector("#city-name");
    button.addEventListener("click", async (e) => {
      if (document.querySelector("#city-info").checkValidity()) {
        e.preventDefault();
        const response = await weatherApiHandler.getData(city.value);
        console.log(response);
        domLoader(response);
      }
    });
  }
  return { domUpdater };
})();

export default domHandler;
