"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const locationInput = document.getElementById('location');
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const apiKey = "c95875ed54ca4976bba11711232206";
const apiUrl = "http://api.weatherapi.com/v1/current.json?aqi=no&q=";
const checkWeather = (location) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch(apiUrl + `${location}&key=${apiKey}`);
        console.log(res.ok);
        const data = yield res.json();
        return data;
    }
    catch (err) {
        console.error(err);
    }
});
const changeInfo = (data) => {
    cityName.innerHTML = data.location.name;
    temp.innerHTML = `${data.current.temp_c}°<sup id="celcius">C</sup>`;
    condition.innerHTML = data.current.condition.text;
};
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener('click', () => {
    checkWeather(locationInput.value)
        .then((res) => {
        changeInfo(res);
    });
});
