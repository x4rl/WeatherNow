const mainDiv = document.createElement('div')
mainDiv.className = 'mainDiv'

document.body.appendChild(mainDiv)


// Cabeçalho

const header = document.createElement('header')
header.className = 'header'
mainDiv.appendChild(header)

//divs header
const headerLogodiv = document.createElement('div')
headerLogodiv.className = 'headerLogodiv'
header.appendChild(headerLogodiv)

const headerBtndiv = document.createElement('div')
headerBtndiv.className = 'headerBtndiv'
header.appendChild(headerBtndiv)
//fim divs header

//botoes cabeçalho
const headerLogobtn = document.createElement('button')
headerLogobtn.id = 'headerLogobtn';
headerLogodiv.appendChild(headerLogobtn)

const headerHomebtn = document.createElement('button')
headerHomebtn.id = 'homeBtn'
headerHomebtn.className = 'headerBtn'
headerHomebtn.innerText = 'Home'
headerBtndiv.appendChild(headerHomebtn)

const headerAboutbtn = document.createElement('button')
headerAboutbtn.id = 'aboutBtn'
headerAboutbtn.className = 'headerBtn'
headerAboutbtn.innerText = 'About'
headerBtndiv.appendChild(headerAboutbtn)

const headerDarkModeDiv = document.createElement('div')
headerDarkModeDiv.className = 'headerDarkModeDiv'
headerBtndiv.appendChild(headerDarkModeDiv)

const headerDarkMode = document.createElement('input')
headerDarkMode.type = 'checkbox'
headerDarkMode.id = 'headerDarkMode'
headerDarkMode.className = 'headerBtn'


headerDarkMode.addEventListener('change', () => {
    document.querySelector('html').classList.toggle('dark')
})

const darkModeLabel = document.createElement('label')
darkModeLabel.id = 'darkModeLabel'
darkModeLabel.className = 'darkModeLabel'



darkModeLabel.setAttribute ('for', 'headerDarkMode')
headerDarkModeDiv.appendChild(darkModeLabel)
darkModeLabel.appendChild(headerDarkMode)

const divSlider = document.createElement('div')
divSlider.innerHTML = '<i class="fa-solid fa-moon"></i><i class="fa-solid fa-sun"></i>'
divSlider.className = 'divSlider round'
darkModeLabel.appendChild(divSlider)

//fim botoes cabeçalho

// Fim cabeçalho

// DIV Home

const homeDiv = document.createElement('div')
homeDiv.className = 'homeDiv'
mainDiv.appendChild(homeDiv)

//Div dos itens da home

const homeItens = document.createElement('div')
homeItens.className = 'homeItens'
homeDiv.appendChild(homeItens)


//Texto da home

const homeText = document.createElement('h1')
homeText.id = 'homeText'
homeText.innerText = 'Seja bem vindo ao serviço de consulta de clima WheatherNow'
homeItens.appendChild(homeText)

const homeText2 = document.createElement('h2')
homeText2.id = 'homeText2'
homeText2.innerText = 'Clique aqui para consultar o clima de uma cidade : '
homeItens.appendChild(homeText2)

//Fim texto da home


//Botao

const btnHomediv = document.createElement('div')
btnHomediv.className = 'btnHomediv'
homeItens.appendChild(btnHomediv)

const btnHome = document.createElement('button')
btnHome.id = 'homeWeatherbtn'
btnHome.className = 'btnHome'
btnHome.innerText = 'Consultar Clima'
btnHomediv.appendChild(btnHome)

const btnHomeicon = document.createElement('span')
btnHomeicon.className = 'icon fa-solid fa-magnifying-glass'
btnHome.appendChild(btnHomeicon)

//Fim Botao

//Fim Div dos itens da home

//Fim DIV Home

//DIV Clima

const weatherDiv = document.createElement('div')
weatherDiv.className = 'weatherDiv'
weatherDiv.style.display = 'none'
mainDiv.appendChild(weatherDiv)


//card Clima
const weatherCard = document.createElement('div')
weatherCard.className = 'weatherCard'
weatherDiv.appendChild(weatherCard)

//div search
const weatherSearchForm = document.createElement('form')
weatherSearchForm.className = 'weatherSearchForm'
weatherCard.appendChild(weatherSearchForm)

const searchInput = document.createElement('input')
searchInput.id = 'searchInput'
searchInput.className = 'searchInput'
searchInput.type = 'text'
searchInput.placeholder = 'Digite a cidade'
weatherSearchForm.appendChild(searchInput)

const searchBtn = document.createElement('button')
searchBtn.className = 'searchBtn'
searchBtn.type = 'submit'
weatherSearchForm.appendChild(searchBtn)
searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>'


//div info clima
const weather = document.createElement('div')
weather.className = 'weather'
weatherCard.appendChild(weather)

const weatherCity = document.createElement('div')
weatherCity.className = 'weatherCity'
weatherCity.innerText = 'Carregando...'
weather.appendChild(weatherCity)

const weatherImg = document.createElement('div')
weatherImg.className = 'weatherImg'
weather.appendChild(weatherImg)
const imgIcon = document.createElement('img')
imgIcon.setAttribute('src', 'icons/unknown.png')
weatherImg.appendChild(imgIcon)

const weatherTempdiv = document.createElement('div')
weatherTempdiv.className = 'weatherTempdiv'
weather.appendChild(weatherTempdiv)
const weatherTemp = document.createElement('div')
weatherTemp.innerText = '90'
const weatherTempspan = document.createElement('span')
weatherTempspan.innerText = '°c'
weatherTempdiv.appendChild(weatherTemp)
weatherTempdiv.appendChild(weatherTempspan)

const weatherStatus = document.createElement('div')
weatherStatus.className = 'weatherStatus'
weatherStatus.innerText = 'Carregando'
weather.appendChild(weatherStatus)
//Fim DIV clima


//DIV Sobre

const aboutDiv = document.createElement('div')
aboutDiv.className = 'aboutDiv'
aboutDiv.style.display = 'none'
mainDiv.appendChild(aboutDiv)

const aboutTextdiv = document.createElement('div')
aboutTextdiv.className = 'aboutTextdiv'
aboutDiv.appendChild(aboutTextdiv)

const h2About = document.createElement('h2')
h2About.className = 'h2About'
h2About.innerText = 'Saiba mais sobre o WeatherNow'
aboutTextdiv.appendChild(h2About)

const h3About = document.createElement('h4')
h3About.className = 'h4About'
h3About.innerText = 'Qual o objetivo do WeatherNow ?'
aboutTextdiv.appendChild(h3About)

const aboutText = document.createElement('p')
aboutText.className = 'aboutText'
aboutText.innerText = 'O WeatherNow foi criado com o objetivo de informar ao usuario, a situação climatica de qualquer lugar do Brasil ! '
aboutTextdiv.appendChild(aboutText)

const h3About2 = document.createElement('h4')
h3About2.className = 'h4About'
h3About2.innerText = 'Como o WeatherNow foi desenvolvido ?'
aboutTextdiv.appendChild(h3About2)

const aboutText2 = document.createElement('p')
aboutText2.className = 'aboutText'
aboutText2.innerHTML = 'O WeatherNow foi desenvolvido usando HTML, CSS e JavaScript. <br> Nele foi usado um metodo aonde não foi adicionado nenhum elemento dentro da tag "body" do HTML, todos os elementos desse site são criados através do JavaScript, ou seja, essa aplicação esta sendo renderizada totalmente em JavaScript puro. <br><br> A aplicação conta com uma API de clima fornecida pela OpenWeather, no qual so é possivel fazer o uso dela com uma chave e ela precisa ser ativada, o acesso é free<br><br><br><br>Code by : Charleston<br>Email : charlesrenan19@gmail.com'
aboutTextdiv.appendChild(aboutText2)

const aboutBtnup = document.createElement('button')
aboutBtnup.className = 'aboutBtnup'
aboutDiv.appendChild(aboutBtnup)
aboutBtnup.innerText = '↑'

//Fim DIV Sobre

//script

//Funçoes mudar de tela
let actAboutbtn = document.getElementById('aboutBtn')
let actHomebtn = document.getElementById('homeBtn')
let actLogobtn = document.getElementById('headerLogobtn')
let actWeatherbtn = document.getElementById('homeWeatherbtn')

actAboutbtn.addEventListener('click', function(){
    if (aboutDiv.style.display === 'none') {
        aboutDiv.style.display = 'flex'
        homeDiv.style.display = 'none'
        weatherDiv.style.display = 'none'
    }
})

actHomebtn.addEventListener('click', function(){
    if (homeDiv.style.display === 'none'){
        homeDiv.style.display = 'flex'
        aboutDiv.style.display = 'none'
        weatherDiv.style.display = 'none'
    }
})

actLogobtn.addEventListener('click', function(){
    if (homeDiv.style.display === 'none'){
        homeDiv.style.display = 'flex'
        aboutDiv.style.display = 'none'
        weatherDiv.style.display = 'none'
    }
})

actWeatherbtn.addEventListener('click', function(){
    if(weatherDiv.style.display === 'none'){
        weatherDiv.style.display = 'flex'
        aboutDiv.style.display = 'none'
        homeDiv.style.display = 'none'
    }
})

//fim funções mudar de tela

//Botao de topo

aboutBtnup.addEventListener('click', () =>{
    document.querySelector('html').scrollTo(0,0);
})
//fim botao topo

//API

const apiKey = '5105afd5083105e141243aecb4ec8892'

let inputValue

searchInput.addEventListener('change',(e) => {
    inputValue = e.target.value
})

weatherSearchForm.addEventListener('submit', async function(event) {
    event.preventDefault()
    await getWeather()
})

const getWeather = async () => {
    const location = await getCityLocation()
    const weatherData = await getWeatherWithParams(location.lat, location.lon)
    
    weatherCity.innerText = weatherData.name
    imgIcon.setAttribute('src', `icons/${weatherData.weather[0].icon}.png`)
    weatherTemp.innerText = Math.round(weatherData.main.temp)
    weatherStatus.innerText = weatherData.weather[0].description
}

const getFirstWeather = async () => {
    const weatherData = await getWeatherWithParams(-23.5506507, -46.6333824)
    
    weatherCity.innerText = weatherData.name
    imgIcon.setAttribute('src', `icons/${weatherData.weather[0].icon}.png`)
    weatherTemp.innerText = Math.round(weatherData.main.temp)
    weatherStatus.innerText = weatherData.weather[0].description
}

const getWeatherWithParams = async (lat, lon) => {
    const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`
    const weatherResponse = await fetch(weatherEndpoint)
    const data = await weatherResponse.json()
    return data
}

const getCityLocation = async () => {
    const geoEndpoint = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=${apiKey}`
    const geoCodeResponse = await fetch(geoEndpoint)
    const data = await geoCodeResponse.json()
    const brazilianCity = data.filter((it) => it.country === 'BR')

    return {
        lat: brazilianCity[0].lat,
        lon: brazilianCity[0].lon
    }
}

getFirstWeather()
//FIM API

