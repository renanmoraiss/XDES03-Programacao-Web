const cardsDiv = document.querySelector('.cards');

const gerarCards = async () => {

    const dadosRAW = await fetch('db/dados.json');
    const dadosJSON = await dadosRAW.json();

    dadosJSON.forEach(card => {
    
        const newDIV = document.createElement('div');
        newDIV.classList.add('card');

        const newPTitulo = document.createElement('p');
        newPTitulo.classList.add('card-titulo');
        newPTitulo.innerText = card.titulo;

        const newIMG = document.createElement('img');
        newIMG.classList.add('card-img');
        newIMG.src = card.imagem;

        const newPDesc = document.createElement('p');
        newPDesc.classList.add('card-descricao');
        newPDesc.innerText = card.descricao;

        const newBTN = document.createElement('button');
        newBTN.classList.add('btn-acao');
        newBTN.innerText = card.botao;
    
        newDIV.append(newPTitulo);
        newDIV.append(newIMG);
        newDIV.append(newPDesc);
        newDIV.append(newBTN);

        cardsDiv.append(newDIV);

    });

    

}

gerarCards();