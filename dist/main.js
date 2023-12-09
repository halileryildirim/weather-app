/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("async function getData(cityName) {\n  const url = `https://api.weatherapi.com/v1/current.json?key=3a17f96e0f804dae97d211921230712&q=${cityName}`;\n  try {\n    const response = await fetch(url, { mode: \"cors\" });\n    if (!response.ok) {\n      throw new Error(\"City is not found!\");\n    }\n    const weatherData = await response.json();\n    return weatherData;\n  } catch (error) {\n    alert(error);\n  }\n}\n\nconst button = document.querySelector(\"#button\");\nconst city = document.querySelector(\"#city-name\");\n\nbutton.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  console.log(getData(city.value));\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;