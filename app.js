const search = document.querySelector('.search');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const value = document.querySelector('.value');
const shortDesc = document.querySelector('.short-desc');
const visibility = document.querySelector('.visibility span');
const wind = document.querySelector('.wind span');
const sun = document.querySelector('.sun span');
const time = document.querySelector('.time');
const content = document.querySelector('.content');
const body = document.querySelector('body');

async function changeWeather() {
   let capital = search.value.trim();
   if(capital==='')
   {
    capital='ha noi';
   }
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=5e3d9a2b9ad842e36b55c015ac618108`;
    let data = await fetch(apiURL).then(res => res.json());
   if (data.cod == 200) {
    console.log(data);
    content.classList.remove('hide');
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + 'm';
    wind.innerText = data.wind.speed + 'm/s';
    sun.innerText = data.main.humidity + '%';
   let temp = Math.round(data.main.temp - 273.15);
   value.innerText=temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
    time.innerText = new Date().toLocaleString('vi');
    body.setAttribute('class','warm')
    if(temp<25)
    {
      body.setAttribute('class','cool')
    }
    if(temp<=22)
    {
      body.setAttribute('class','hot')
    }
   } else {
    
    console.log(data);
    content.classList.remove('hide');
   }
}
search.addEventListener('keypress', function(e) {
  if (e.code == 'Enter') {
      changeWeather()
  }
});
setTimeout(function(){
  changeWeather();
},10);
