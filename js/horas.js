function calcHoras(data) {
    const agora = new Date();

    const tzLocal = agora.getTimezoneOffset()*60;
    const tzAlvo = data.timezone;
    
    const dtLocal = agora.getTime();    

    // calcula a diferença de horas
    const diferencaEmHr = calcDiff(tzAlvo, tzLocal)/3600;
    
    const novoDt = dtLocal + (diferencaEmHr*3600000);
    const novaData = new Date(novoDt);    
    
    loadNovaData(novaData);
    getNext5Days(novoDt);
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

const getNext5Days = (dtPais) => {
    let nextDaysDt = [];
    for(let dias = 1; dias <= 4; dias++) {
        nextDaysDt.push(dtPais+(86400000*dias))
    }
    loadNext5Days(nextDaysDt);
}

const diasDaSemana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

const loadNext5Days = (arr) => {
    arr.forEach((dia, index) => {
        const fDays = new Date(dia);

        const dias = fDays.getDate().toString().padStart(2, '0');
        const mes = (fDays.getMonth()+1).toString().padStart(2, '0');
        const numSemana = fDays.getDay();

        const diaSemana = diasDaSemana[numSemana];
        const diaF = `${dias}/${mes}`;
        const semF = diaSemana;

        dateDay[index].innerHTML = diaF;
        dateWeek[index].innerHTML = semF;
    });
}