const apiKey: string = "c95875ed54ca4976bba11711232206";
const apiUrl: string = "http://api.weatherapi.com/v1/current.json?aqi=no&q=Vancouver";

const checkWeather = async () => {
    try {
        const res = await fetch(apiUrl + `&key=${apiKey}`); 
        console.log(res.ok)
        const data= await res.json()
        console.log(data)

    }catch(err) {
        console.error(err)
    }
};

checkWeather()
