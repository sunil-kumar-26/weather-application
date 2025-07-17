let URL="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
let API_KEY="8d7c1bc6527e2cba2e63da66c6037fb6";
let input=document.querySelector("input");
let button=document.querySelector("button");
let weather=document.querySelector(".temp");
let city=document.querySelector(".city");
// button.addEventListener("click",()=>{
//   let cityName=input.value;   
//   let data=weatherReport(cityName);
//   console.log(data);
// });
// //console.log(data)



let weatherReport=async(cityName)=>{
  URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
 let response1=await fetch(URL);
 let response2=await response1.json();
  return response2;
}
button.addEventListener("click",async ()=>{
  let cityName=input.value;   
  let data= await weatherReport(cityName);
  console.log("wait feteching...");
  console.log(data);
  temprature(data)
});

const temprature = (data)=>{
   let kelvin=273.15;
   let celcius=data.main.temp-kelvin;
  console.log(celcius);
   if(celcius>=Math.floor(celcius)+0.5)
   {
   let celciusRoundOfHigh=Math.floor(celcius)+1;
    console.log(celciusRoundOfHigh)
     weather.innerText=celciusRoundOfHigh+"°C";
     city.innerText=data.name;
  }
  else if(celcius<=Math.floor(celcius)+0.5)
  {
   let celciusRoundOfLow=Math.floor(celcius);
    console.log(celciusRoundOfLow);
    weather.innerText=celciusRoundOfLow+"°C";
    city.innerText=data.name;
  }
  document.querySelector(".humidity").innerText=data.main.humidity+"%";
  document.querySelector(".wind").innerText=data.wind.speed+"km/h";
 }