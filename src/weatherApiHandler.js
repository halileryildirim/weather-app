const weatherApiHandler = (() => {
  class Weather {
    constructor(
      cityName,
      location,
      tempC,
      feelsLikeTempC,
      tempF,
      feelsLikeTempF,
      weatherEvent,
      humid,
      windKmh,
      windMph
    ) {
      this.cityName = cityName;
      this.location = location;
      this.tempC = tempC;
      this.feelsLikeTempC = feelsLikeTempC;
      this.tempF = tempF;
      this.feelsLikeTempF = feelsLikeTempF;
      this.weatherEvent = weatherEvent;
      this.humid = humid;
      this.windKmh = windKmh;
      this.windMph = windMph;
    }
  }

  // conditionda hava durumu için icon yer alıyor fyi
  const useData = (data) => {
    const cityName = data.location.name;
    const location = data.location.country;
    const tempC = data.current.temp_c;
    const feelsLikeTempC = data.current.feelslike_c;
    const tempF = data.current.temp_f;
    const feelsLikeTempF = data.current.feelslike_f;
    const weatherEvent = data.current.condition.text;
    const humid = data.current.humidity;
    const windKmh = data.current.wind_kph;
    const windMph = data.current.wind_mph;

    const weather = new Weather(
      cityName,
      location,
      tempC,
      feelsLikeTempC,
      tempF,
      feelsLikeTempF,
      weatherEvent,
      humid,
      windKmh,
      windMph
    );

    return weather;
  };

  async function getData(cityName) {
    const url = `https://api.weatherapi.com/v1/current.json?key=3a17f96e0f804dae97d211921230712&q=${cityName}`;
    try {
      const response = await fetch(url, { mode: "cors" });
      if (!response.ok) {
        throw new Error("City is not found!");
      }
      const weatherData = useData(await response.json());
      return weatherData;
    } catch (error) {
      alert(error);
      return null;
    }
  }

  return { getData };
})();

export default weatherApiHandler;
