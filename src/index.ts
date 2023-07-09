const locationInput = document.getElementById('location') as HTMLInputElement;
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name') as HTMLElement;
const temp = document.getElementById('temp') as HTMLElement;
const condition = document.getElementById('condition') as HTMLElement;

const apiKey: string = "c95875ed54ca4976bba11711232206"; // declares api key variable
const apiUrl: string = "http://api.weatherapi.com/v1/current.json?aqi=no&q="; // declares api url

const checkWeather = async (location: string) => {
    try {
        const res = await fetch(apiUrl + `${location}&key=${apiKey}`); 
        console.log(res.ok)
        const data = await res.json()
        return data

    }catch(err) {
        console.error(err)
    }
};

const changeInfo = (data: any) => {
    cityName.innerHTML = `<p id="city-name">${data.location.name}</p>`
    temp.innerHTML = `${data.current.temp_c}°<sup id="celcius">C</sup>`
    condition.innerHTML = data.current.condition.text
}

searchButton?.addEventListener('click', () => {
    checkWeather(locationInput.value)
    .then((res) => {
        changeInfo(res)
    })
})






