//zambraagi datag hunii nuend hyambaraar baruuldag <-- json()
const input = document.getElementsByTagName('input')[0];
const btn = document.getElementsByTagName('button')[0];
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
btn.addEventListener('click',()=>{
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=9ac1f5c2d6508db3c616a0d1f80a08fd`).then(
	response => response.json()
).then(
	data => {
		console.log(data);
		console.log(data.main.temp);
		console.log(data.weather.description);
		console.log(data.wind.speed);
		console.log(data.weather[0].main);
		temp.innerText= data.main.temp;
		desc.innerText= data.weather[0].description;
		wind.innerText= data.wind.speed;
		console.log(data.weather[0].main);
		if(data.weather[0].main == "sunny">{
			document.getElementsByTagName('img')[0].src="suny";
		}else if (data.weather[0].main =="rainy"){
			document.getElementsByTagName('img')[0].src="rainy";
		}
	}
	}
)

})
