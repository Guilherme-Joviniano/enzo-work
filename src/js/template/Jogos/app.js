import {
    getEsportesDias
} from "../../interclasse.js";

class GamesPanel {
    constructor() {
        this.container = document.querySelector('.container-games');
        this.detail = document.querySelector('.detail-game')
        this.selector = document.querySelector('.days')
    }

    getDate = () => new Date().toLocaleString('pt-br', {
        weekday: 'long'
    })
    setCurrentDate = (date) => {
        const option = document.querySelector(`#${date}`);
        option.setAttribute("selected", "selected");
    }
    setSelector = () => {
        this.selector.addEventListener('change', ({
            target
        }) => {
            const {
                value
            } = target;
            console.log(value);
            this.update(value)
        })
    }
    render = () => {
        const currentDate = this.getDate();

        this.setCurrentDate('segunda-feira')
        this.setSelector();

        const {
            esportes
        } = getEsportesDias('segunda-feira');

        const games = Object.entries(esportes);

        this.renderVitrine(games); // cards from home

        this.setVitrine(games)
        document.querySelector('.close').addEventListener('click', (_e) => {
            this.detail.style.display = 'none'
            document.querySelector('main').classList.remove('bg')
        })
    }
    update = (date) => {
        this.sanitizeVitrine();

        console.log(date);

        const {
            esportes
        } = getEsportesDias(date);

        console.log(esportes);

        const games = Object.entries(esportes);

        this.renderVitrine(games); // cards from home
        this.setVitrine(games)

    }
    setVitrine = (data) => {
        document.querySelectorAll('.vitrine').forEach((vitrine) => vitrine.addEventListener('click', ({
            target
        }) => {
            const {
                id
            } = target
            const detail = data.filter(([title]) => {
                return title === id
            })[0] // get the content

            this.renderDetailCard(detail); // render the content

            this.detail.style.display = 'flex'  // show
            document.querySelector('main').classList.add('bg')
            window.scrollTo(0, 0) // media querie
        }))
    }
    renderVitrine = (data) => {
        data.forEach((props) => this.container.append(this.createVitrine(props)));
    }
    createVitrine = (props = []) => {
        const titleContent = props[0];
        const localContent = props[1][0].local;

        const vitrine = document.createElement('div')

        const title = document.createElement('h2')
        const local = document.createElement('h3')

        vitrine.classList.add('vitrine')

        vitrine.id = titleContent.toLowerCase()

        title.classList.add('title')
        title.textContent = titleContent

        local.classList.add('local')
        local.textContent = localContent

        vitrine.append(title)
        vitrine.append(local)
        return vitrine
    }
    sanitizeVitrine = () => {
        while (this.container.lastChild) {
            this.container.lastChild.remove()
        }
    }
    cleanDetailCard = () => {
        this.detail.children[1]?.remove()
    }
    renderDetailCard = (data) => {
        this.cleanDetailCard();
        const title = data[0]
        const combats = data[1]
        this.detail.append(this.createDetailCard({
            title,
            combats
        }));
    }
    createDetailCard = (props) => {
        const {
            title,
            combats
        } = props

        const titleContent = title
        const timeContent = Object.values(combats[0])

        timeContent.shift()

        const wrapper = document.createElement('div');
        const titleDiv = document.createElement('h3');
        const timeList = document.createElement('ul');

        timeContent.forEach((time) => {
            const li = document.createElement('li')
            li.classList.add('item-time-list');
            li.textContent = time.join().replace(',', ' --> ')
            timeList.append(li)
        })

        wrapper.classList.add('game')
        titleDiv.classList.add('title')
        timeList.classList.add('time-list')


        titleDiv.textContent = titleContent


        wrapper.append(titleDiv)
        wrapper.append(timeList)
        return wrapper
    }




}

new GamesPanel().render();