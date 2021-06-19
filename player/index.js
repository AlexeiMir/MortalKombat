import { createElement} from '../utils/index.js'

export class Player {
    constructor(props){
        this.name = props.name
        this.hp = props.hp
        this.img = props.img
        this.player = props.player
        this.selector = `player${this.player}`
        this.rootSelector = props.rootSelector
    
    }
    changeHP = (num) => {
        this.hp -= num;

        if (this.hp <= 0) {
            this.hp = 0;
        }
        console.log(`${this.name}:${this.hp}`);

    }

    elHP = () => {
        const $el = document.querySelector(`.${this.selector} .life`);
        return $el;
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    createPlayer = () => {
        const $player = createElement('div',this.selector)
        const $progressbar = createElement('div','progressbar')
        const $character = createElement('div','character')
        const $life = createElement('div','life')
        const $name = createElement('div','name')
        const $img = createElement('img')
    
        $life.style.width = this.hp + '%'
    
        $name.innerText = this.name
        $img.src = this.img
    
        $player.appendChild($progressbar)
        $player.appendChild($character)
        $character.appendChild($img)
        $progressbar.appendChild($life)
        $progressbar.appendChild($name)

        const $root = document.querySelector(`.${this.rootSelector}`)
        $root.appendChild($player)
    
        return $player
    
    }
}




