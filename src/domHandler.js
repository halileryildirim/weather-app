import weatherApiHandler from "./weatherApiHandler";

const domHandler = (() => {
  const domLoader = (data) => {
    const mainContainer = document.querySelector("#weather-info-container");
    const cityMainInfo = document.querySelector("#city-info-render");
    if (cityMainInfo != null) {
      cityMainInfo.replaceChildren();
    }

    const name = document.createElement("h2");
    name.innerText = `${data.cityName}, ${data.location}`;
    cityMainInfo.appendChild(name);

    const cityEvent = document.createElement("p");
    cityEvent.id = "city-weather-event";
    cityEvent.innerText = data.weatherEvent;
    cityMainInfo.appendChild(cityEvent);

    if (mainContainer.classList.contains("metrics")) {
      const cityTempC = document.createElement("div");
      cityTempC.innerText = `Temperature: ${data.tempC} °C`;
      cityMainInfo.appendChild(cityTempC);

      const cityFeelsC = document.createElement("div");
      cityFeelsC.innerText = `Feels Like: ${data.feelsLikeTempC} °C`;
      cityMainInfo.appendChild(cityFeelsC);

      const cityWindKmh = document.createElement("div");
      cityWindKmh.innerText = `Wind: ${data.windKmh} km/h`;
      cityMainInfo.appendChild(cityWindKmh);
    } else if (mainContainer.classList.contains("us-standard")) {
      const citytempF = document.createElement("div");
      citytempF.innerText = `Temperature: ${data.tempF} °F`;
      cityMainInfo.appendChild(citytempF);

      const cityFeelsF = document.createElement("div");
      cityFeelsF.innerText = `Feels like ${data.feelsLikeTempF} °F`;
      cityMainInfo.appendChild(cityFeelsF);

      const cityWindMph = document.createElement("div");
      cityWindMph.innerText = `Wind: ${data.windMph} mph`;
      cityMainInfo.appendChild(cityWindMph);
    }
    const cityHumidity = document.createElement("div");
    cityHumidity.innerText = `Humidity: ${data.humid}%`;
    cityMainInfo.appendChild(cityHumidity);
  };

  async function domUpdater() {
    const button = document.querySelector("#save-button");
    const metricBtn = document.querySelector("#metric-change-btn");
    const city = document.querySelector("#city-name");

    metricBtn.addEventListener("click", async () => {
      const mainContainer = document.querySelector("#weather-info-container");
      if (mainContainer.classList.contains("metrics")) {
        mainContainer.classList = "us-standard";
        if (city.value !== "") {
          const response = await weatherApiHandler.getData(city.value);
          domLoader(response);
        }
      } else {
        mainContainer.classList = "metrics";
        if (city.value !== "") {
          const response = await weatherApiHandler.getData(city.value);
          domLoader(response);
        }
      }
    });

    button.addEventListener("click", async (e) => {
      if (document.querySelector("#city-info").checkValidity()) {
        e.preventDefault();
        const response = await weatherApiHandler.getData(city.value);
        domLoader(response);
      }
    });
  }
  return { domUpdater };
})();

export default domHandler;