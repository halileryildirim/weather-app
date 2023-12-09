async function getData(cityName) {
  const url = `https://api.weatherapi.com/v1/current.json?key=3a17f96e0f804dae97d211921230712&q=${cityName}`;
  try {
    const response = await fetch(url, { mode: "cors" });
    if (!response.ok) {
      throw new Error("City is not found!");
    }
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    alert(error);
  }
}

const button = document.querySelector("#button");
const city = document.querySelector("#city-name");

button.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(getData(city.value));
});
