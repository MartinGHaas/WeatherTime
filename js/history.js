const createHistoryItem = (cidade, temperatura) => {
    let replica = document.createElement('div');
    replica.classList.add('item-container');
    replica.innerHTML = 
    `
        <div class="bg-img d-flex-main">
            <img class="img-history" src="img/Weather_Icons_-_bkn.svg">
        </div>
        <div class="data-content">
            <h2 class="title-history">${cidade}</h2>
            <p class="p-history">Temperatura: ${temperatura}</p>
        </div>
    `;

    let scrollSection = document.querySelector('.scroll-section');

    scrollSection.appendChild(replica);

    return true;
}

const updateHistory = () => {
    const itens = document.querySelectorAll('.item-container');

    itens.forEach(item => item.remove());

    for(let i = historico.cidades.length-1; i >= 0; i--) {
        const nomeCidade = historico.cidades[i].cidade;
        const tempCidade = historico.cidades[i].temperatura;
        createHistoryItem(nomeCidade, tempCidade);
    }

    return true;
}

// toDo: Organizar melhor o histórico;

const isInHistory = (cidade) => {
    for(let i = 0; i < historico.cidades.length; i++) {
        if(cidade === historico.cidades[i].cidade) {
            return true;
        }
    }
    return false;
}

// isInHistory('London, GB');