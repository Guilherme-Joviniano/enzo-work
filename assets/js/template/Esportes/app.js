import {
    interclasse
} from "../../interclasse.js";

const SEARCHINPUT = document.querySelector('#search');
const CONTAINER = document.querySelector('.container-cards')

const populateContainer = (cards) => {
    if (cards) {
        cards.forEach((card) => CONTAINER.append(card))
        return;
    }
    interclasse[0].esportes.forEach(({
        nome,
        regras
    }) => CONTAINER.append(createCard({
        nome,
        regras
    })))

}
const sanitezeContainer = () => {
    while (CONTAINER.lastChild) {
        CONTAINER.lastChild.remove()
    }
}
const createCard = (props = {}) => {
    const card = document.createElement('div')
    const title = document.createElement('h2')
    const attrbWrapper = document.createElement('span');

    const ul = addCardAtrributes(props.regras[0])

    card.classList.add('card')

    card.id = props.nome.toLowerCase()

    title.classList.add('title')

    title.textContent = props.nome

    attrbWrapper.append(ul)

    card.append(title)
    card.append(attrbWrapper)
    return card
}
const addCardAtrributes = (regras) => {
    const ul = document.createElement('ul');
    ul.classList.add('regra-lista')
    Object.entries(regras).forEach(([key, value]) => {
        const item = document.createElement('li');
        item.classList.add('regra')
        const title = document.createElement('h3');
        const text = document.createElement('p');
        title.textContent = key;
        text.textContent = value;
        item.append(title, text)
        ul.append(item)
    })

    return ul;
}

// populate the cards inside the container
populateContainer()
const cards = document.querySelectorAll('.card');

const filterCards = (keyword) => {
    const filteredCards = [...cards].filter((card) => card.firstChild.textContent.toLowerCase().includes(keyword.toLowerCase()))
    sanitezeContainer();
    populateContainer(filteredCards)
}
// show the card hidden text

const showCardAttributes = (card) => {

}

// event listener
SEARCHINPUT.addEventListener('change', ({
    target
}) => {
    const {
        value
    } = target;
    filterCards(value);
})


cards.forEach((card) => card.addEventListener('click', ({
    target
}) => {
    console.log(target.children);
    const parent = target.children[1] 
    
    const ul = parent.children[0]

    if (!ul.classList.contains('show')) {
        ul.classList.add('show');
        target.classList.add('size-animation')
    }  
    else {
        ul.classList.remove('show');


    }

}))