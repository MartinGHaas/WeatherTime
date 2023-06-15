function calcHoras(data) {
    const agora = new Date();

    const tzLocal = agora.getTimezoneOffset()*60;
    const tzAlvo = data.timezone;
    
    const dtLocal = data.dt*1000;
    console.log(dtLocal);
    // calcula a diferença de horas
    const diferencaEmHr = calcDiff(tzAlvo, tzLocal)/3600;
    
    const novoDt = dtLocal + (diferencaEmHr*3600000);
    const novaData = new Date(novoDt);    

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