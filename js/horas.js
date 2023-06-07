function calcHoras(data) {
    let agora = new Date();

    let tzLocal = agora.getTimezoneOffset()*60;
    let tzAlvo = data.timezone;
    
    let dtLocal = agora.getTime();

    // calcula a diferença de horas
    let diferencaEmHr = calcDiff(tzAlvo, tzLocal)/3600;
    
    let novoDt = dtLocal + (diferencaEmHr*3600000);
    let novaData = new Date(novoDt);    

    loadNovaData(novaData);
}

const calcDiff = (val1, val2) => {
    return val1 + val2;
}

const loadNovaData = novaData => {
    novaData = novaData.toString().split(' ')[4];

    let partes = novaData.split(":");
    let novoHorario = `${partes[0]}:${partes[1]}`;
    time.innerHTML = `${novoHorario}`;
}