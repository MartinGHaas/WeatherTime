async function getData5d(content) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURI(content)}&appid=2c7a1985e25aab3a0165a4e1ce5872c4&units=metric&lang=pt_br`;
    
    const response = await fetch(url);
    const data = await response.json();

    if(data.cod === '404') {
        return;
    }

    loadData5d(data);
}

function loadData5d(data) {
    const list = data.list;

    for(var i = 0; i < list.length; i++) {
        if(list[i].dt_txt.split(' ')[1] === '00:00:00'){
            let tempMaxima = list[i].main.temp_max;
            let tempMinima = list[i].main.temp_min;
            
            for(var j = 1; j < 8; j++) {                
                if(tempMaxima < list[i+j].main.temp_max) {
                    tempMaxima = list[i+j].main.temp_max;
                }
                if(tempMinima > list[i+j].main.temp_min) {
                    tempMinima = list[i+j].main.temp_min;
                }
            }
            
            addToDom(tempMinima, tempMaxima);
        }
    }
}

let currentIndex = 0;
function addToDom(temperaturaMinima, temperaturaMaxima) {

    minTemp[currentIndex].innerHTML = `${temperaturaMinima.toFixed(1)}°C`
    maxTemp[currentIndex].innerHTML = `${temperaturaMaxima.toFixed(1)}°C`

    currentIndex++;
    if(currentIndex === 4) {
        currentIndex = 0
    }
}