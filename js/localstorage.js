let historico = {
    cidades: [],
    index: 0,
};

if (localStorage.getItem('historico')) {
    historico = JSON.parse(localStorage.getItem('historico'));
}

const addToLocalStorage = (cidadeContent, tempContent) => {
    const novaCidade = {
        cidade: cidadeContent,
        temperatura: tempContent
    }

    if(!isInHistory(novaCidade.cidade)) {
        if(historico.cidades.length === 5){        
            historico.cidades[historico.index] = novaCidade;
        }else {
            historico.cidades.push(novaCidade);
        }
        
        historico.index++;
        if(historico.index === 5) {
            historico.index = 0;
        }    
    }
    updateHistory();

    localStorage.setItem('historico', JSON.stringify(historico));
}
