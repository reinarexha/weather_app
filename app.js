let city = 'London' //document.querySelector('input')
let apikey = 'd86c142bafb8ef079c1f97c501c583cb'
let img = document.querySelector('.img')//vendosim foton ne baze te pershkrimit te motitlet
let emriIvendit = document.querySelector('.name')
let pershkrimi = document.querySelector('.desc')
let temp = document.querySelector('.temp')
let btn = document.querySelector('#btn')
let minTempP = document.querySelector('.title1')//minimum temp
let minImg = document.querySelector('#temp')//foto e termometrit
let minTempH1 = document.querySelector('.value1')//inimum temperatura
let maxTempP = document.querySelector('.title2')//maximum temp
let maxImg = document.querySelector('#temp2')//foto e termometrit
let maxTempH1 = document.querySelector('.value2')//inimum temperatura
let windTempP = document.querySelector('.title3')//wind 
let windImg = document.querySelector('#wind')//foto e termometrit
let windTempH1 = document.querySelector('.value3')//inimum temperatura
let cloudsTempP = document.querySelector('.title4')//clouds 
let cloudsImg = document.querySelector('#cloud')//foto e termometrit
let cloudsTempH1 = document.querySelector('.value4')//inimum temperatura
let timeZ = document.querySelector('.timeZone')
btn.addEventListener('click',MerrMotin)
window.addEventListener('keypress',(e)=>{
    if(e.key == 'Enter'){
        MerrMotin()
    }
})
function MerrMotin(){
    let city = document.querySelector('#input').value
    fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    ).then(res => res.json()
    ).then(json => {
        console.log(json)
        emriIvendit.innerHTML = json.name
        pershkrimi.innerHTML = json.weather[0].description
        temp.innerHTML = (json.main.temp - 273.15).toFixed(0) + '°C'
        GjejFoton(json.weather[0].description)
        minTempH1.innerHTML = (json.main.temp_min - 273.15).toFixed(0) + '°C'
        minTempP.innerHTML = 'MINIMUM TEMPERATURE'
        minImg.src = '/img/temperature.png'
        maxTempH1.innerHTML = (json.main.temp_max - 273.15).toFixed(0) + '°C'
        maxTempP.innerHTML = 'MAXIMUM TEMPERATURE'
        maxImg.src = '/img/temperature.png'
        windTempH1.innerHTML = json.wind.speed + 'km/h'
        windTempP.innerHTML = 'WIND SPEED'
        windImg.src = '/img/wind.png'
        cloudsTempH1.innerHTML = json.clouds.all 
        cloudsTempP.innerHTML = 'NUMBER OF CLOUDS'
        cloudsImg.src = '/img/cloud (1).png'
        timeZ.innerHTML = 'TIME ZONE:' + json.timezone
    }
    )

}
function GjejFoton(descValue) {
    if(descValue == 'overcast clouds'){
        img.setAttribute('src', 'img/cloudy (2).png')
     } else if(descValue == 'clear sky'){
       img.setAttribute('src', 'img/sun.png');
     } else if(descValue == 'scattered clouds'){
       img.setAttribute('src', 'img/cloudy.png');
     } else if(descValue == 'few clouds'){
       img.setAttribute('src', 'img/cloudy.png');
     }else if(descValue == 'haze'){
       img.setAttribute('src', 'img/mist.png');
     }else if(descValue == 'mist'){
       img.setAttribute('src', 'img/mist.png');
     } else if(descValue == 'drizzle'){
       img.setAttribute('src', 'img/rain.png');
     } else if(descValue == 'light rain'){
       img.setAttribute('src', 'img/rain.png');
     }else if(descValue == 'light intensity drizzle'){
       img.setAttribute('src', 'img/drizzle.png');
     }else if(descValue == 'broken clouds'){
       img.setAttribute('src', 'img/rain.png');
     } else if(descValue == 'snow'){
       img.setAttribute('src', 'img/snow.png');
     } else if(descValue == 'heavy snow'){
       img.setAttribute('src', 'img/snow.png');
     } else if(descValue == 'drizzle rain'){
       img.setAttribute('src', 'img/rain.png');
     } else if(descValue == 'moderate rain'){
       img.setAttribute('src', 'img/rain.png');
     } else if(descValue == 'light snow'){
       img.setAttribute('src', 'img/snow.png');
     }
}