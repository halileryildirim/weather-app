/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domHandler.js":
/*!***************************!*\
  !*** ./src/domHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weatherApiHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherApiHandler */ \"./src/weatherApiHandler.js\");\n// Create and add functionality to buttons and elements\n\n\nconst domHandler = (() => {\n  // get an object, create and append the container with object data\n  const domLoader = (data) => {\n    const mainContainer = document.querySelector(\"#weather-info-container\");\n    const cityMainInfo = document.querySelector(\"#city-info-render\");\n    if (cityMainInfo != null) {\n      cityMainInfo.replaceChildren();\n    }\n\n    const name = document.createElement(\"h2\");\n    name.innerText = `${data.cityName}, ${data.location}`;\n    cityMainInfo.appendChild(name);\n\n    const cityEvent = document.createElement(\"p\");\n    cityEvent.innerText = data.weatherEvent;\n    cityMainInfo.appendChild(cityEvent);\n\n    const cityEventImg = new Image(128, 128);\n    cityEventImg.src = `https:${data.imgSource}`;\n    cityMainInfo.appendChild(cityEventImg);\n\n    // container class decides if the data shows as Fahrenheit mph or Celcius kmh\n    if (mainContainer.classList.contains(\"metrics\")) {\n      const cityTempC = document.createElement(\"div\");\n      cityTempC.innerText = `Temperature: ${data.tempC} °C`;\n      cityMainInfo.appendChild(cityTempC);\n\n      const cityFeelsC = document.createElement(\"div\");\n      cityFeelsC.innerText = `Feels Like: ${data.feelsLikeTempC} °C`;\n      cityMainInfo.appendChild(cityFeelsC);\n\n      const cityWindKmh = document.createElement(\"div\");\n      cityWindKmh.innerText = `Wind: ${data.windKmh} km/h`;\n      cityMainInfo.appendChild(cityWindKmh);\n    } else if (mainContainer.classList.contains(\"us-standard\")) {\n      const citytempF = document.createElement(\"div\");\n      citytempF.innerText = `Temperature: ${data.tempF} °F`;\n      cityMainInfo.appendChild(citytempF);\n\n      const cityFeelsF = document.createElement(\"div\");\n      cityFeelsF.innerText = `Feels like ${data.feelsLikeTempF} °F`;\n      cityMainInfo.appendChild(cityFeelsF);\n\n      const cityWindMph = document.createElement(\"div\");\n      cityWindMph.innerText = `Wind: ${data.windMph} mph`;\n      cityMainInfo.appendChild(cityWindMph);\n    }\n    const cityHumidity = document.createElement(\"div\");\n    cityHumidity.innerText = `Humidity: ${data.humid}%`;\n    cityMainInfo.appendChild(cityHumidity);\n  };\n  // create an async function to call the result from apihandler\n  async function domUpdater() {\n    const button = document.querySelector(\"#save-button\");\n    const metricBtn = document.querySelector(\"#metric-change-btn\");\n    const city = document.querySelector(\"#city-name\");\n\n    metricBtn.addEventListener(\"click\", async () => {\n      const mainContainer = document.querySelector(\"#weather-info-container\");\n      // update container metric system according to latest container type\n      if (mainContainer.classList.contains(\"metrics\")) {\n        mainContainer.classList = \"us-standard\";\n        if (city.value !== \"\") {\n          const response = await _weatherApiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(city.value);\n          domLoader(response);\n        }\n      } else {\n        mainContainer.classList = \"metrics\";\n        if (city.value !== \"\") {\n          const response = await _weatherApiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(city.value);\n          domLoader(response);\n        }\n      }\n    });\n    // prevent button from trying to submit to form and check if form is filled\n    button.addEventListener(\"click\", async (e) => {\n      if (document.querySelector(\"#city-info\").checkValidity()) {\n        e.preventDefault();\n        const response = await _weatherApiHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(city.value);\n        domLoader(response);\n      }\n    });\n  }\n  return { domUpdater };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/domHandler.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domHandler */ \"./src/domHandler.js\");\n// Call the DOM updater to add functionality to page\n\n\n_domHandler__WEBPACK_IMPORTED_MODULE_0__[\"default\"].domUpdater();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherApiHandler.js":
/*!**********************************!*\
  !*** ./src/weatherApiHandler.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Create weather object to contain the information from API\n\nconst weatherApiHandler = (() => {\n  // Create weather object with required variables.\n  class Weather {\n    constructor(\n      cityName,\n      location,\n      tempC,\n      feelsLikeTempC,\n      tempF,\n      feelsLikeTempF,\n      weatherEvent,\n      humid,\n      windKmh,\n      windMph,\n      imgSource\n    ) {\n      this.cityName = cityName;\n      this.location = location;\n      this.tempC = tempC;\n      this.feelsLikeTempC = feelsLikeTempC;\n      this.tempF = tempF;\n      this.feelsLikeTempF = feelsLikeTempF;\n      this.weatherEvent = weatherEvent;\n      this.humid = humid;\n      this.windKmh = windKmh;\n      this.windMph = windMph;\n      this.imgSource = imgSource;\n    }\n  }\n\n  // Update object with API data.\n  const useData = (data) => {\n    const cityName = data.location.name;\n    const location = data.location.country;\n    const tempC = data.current.temp_c;\n    const feelsLikeTempC = data.current.feelslike_c;\n    const tempF = data.current.temp_f;\n    const feelsLikeTempF = data.current.feelslike_f;\n    const weatherEvent = data.current.condition.text;\n    const humid = data.current.humidity;\n    const windKmh = data.current.wind_kph;\n    const windMph = data.current.wind_mph;\n    const wEventImg = data.current.condition.icon;\n\n    const weather = new Weather(\n      cityName,\n      location,\n      tempC,\n      feelsLikeTempC,\n      tempF,\n      feelsLikeTempF,\n      weatherEvent,\n      humid,\n      windKmh,\n      windMph,\n      wEventImg\n    );\n\n    return weather;\n  };\n  // use an async function to fetch the api data\n\n  async function getData(cityName) {\n    const url = `https://api.weatherapi.com/v1/current.json?key=3a17f96e0f804dae97d211921230712&q=${cityName}`;\n    try {\n      const response = await fetch(url, { mode: \"cors\" });\n      // prevent errors from passing the try/catch\n      if (!response.ok) {\n        throw new Error(\"City is not found!\");\n      }\n      const weatherData = useData(await response.json());\n      return weatherData;\n    } catch (error) {\n      alert(error);\n      return null;\n    }\n  }\n\n  return { getData };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherApiHandler);\n\n\n//# sourceURL=webpack://weather-app/./src/weatherApiHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;