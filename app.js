const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';
        const key = '4ec32a27ead568642a1e2c464366e67b';

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const weatherIcon = document.querySelector('.weather-icon');

        async function checkWeather (city){
            
            const res = await fetch(url +city+ `&appid=${key}`);
            if(res.status == "404"){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{
                var data = await res.json();

                document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "&deg;C";
                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
                document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";
    
                if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "../weatherForcasting/images/clouds.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weatherIcon.src = "../weatherForcasting/images/rain.png";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weatherIcon.src = "../weatherForcasting/images/drizzle.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weatherIcon.src = "../weatherForcasting/images/mist.png";
                }
                else if(data.weather[0].main == "Snow"){
                    weatherIcon.src = "../weatherForcasting/images/snow.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weatherIcon.src = "../weatherForcasting/images/clear.png";
                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
                
            }
        }

        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })