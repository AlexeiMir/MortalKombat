const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')
const img1 =  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
const img2 = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
const weapon1 =  ['cold']
const weapon2 = ['muskules']

class Figther {
    constructor(number,name,width,img,weapon) {
        this.player = number
        this.name = name
        this.hp =  width
        this.img = img
        this.weapon = weapon
    }
    attack() {
        console.log(`${this.name} fight`)
    }

    changeHP(num){
        this.hp -= num
    
        if (this.hp <= 0){
            this.hp = 0
        }
        console.log(`${this.name}:${this.hp}`)
    
    }

    elHP(){
         const $el = document.querySelector(`.player${this.player} .life`)
         return $el
    }

    renderHP(){
        this.elHP().style.width = this.hp + '%'
    }

}

const player1 = new Figther(1,'Skorpion',100,img1,weapon1)
const player2 = new Figther(2,'Liukang',100,img2,weapon2)


function createElement(tag,tagName) {
    const $tag = document.createElement(tag)
    if (tagName){
        $tag.classList.add(tagName)
    }
    return $tag

}

function createPlayer(playerObj) {
    const $player = createElement('div','player' + playerObj.player)
    const $progressbar = createElement('div','progressbar')
    const $character = createElement('div','character')
    const $life = createElement('div','life')
    const $name = createElement('div','name')
    const $img = createElement('img')

    $life.style.width = playerObj.hp + '%'

    $name.innerText = playerObj.name
    $img.src = playerObj.img

    $player.appendChild($progressbar)
    $player.appendChild($character)
    $character.appendChild($img)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    return $player

}

function getRandom(num){
    return Math.ceil(Math.random()*num)
}

function changeHP(player,num){
    const $playerLife = document.querySelector(`.player${player.player} .life`)
    player.hp -= getRandom(num)
    console.log(`${player.name} : ${player.hp}`)
    $playerLife.style.width = player.hp + '%'

    if (player.hp <= 0){
        player.hp = 0
    }
    $playerLife.style.width = player.hp + '%'

}

function createReloadButton(){
    const $createReloadButton = createElement('div', 'reloadWrap')
    const $button = createElement('button')
    $button.innerText = 'Reset'
    $createReloadButton.appendChild($button)
    $button.addEventListener('click', function(){
        window.location.reload()
    })
    return $createReloadButton
}



function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle')
    if (name) {
        $winTitle.innerText = `${name} win`
    } else {
        $winTitle.innerText = 'draw'
    }
    
    return $winTitle
}



$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

$randomButton.addEventListener('click', function () {
    // changeHP(player1,20)
    // changeHP(player2,20)
    player1.changeHP(getRandom(20))
    player2.changeHP(getRandom(20))
    player1.renderHP()
    player2.renderHP()
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true
        $arenas.appendChild(createReloadButton())
        
    }
    if (player1.hp === 0 && player1.hp < player2.hp ) {
        $arenas.appendChild(playerWins(player2.name))
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name))
    } else if (player2.hp === 0 && player1.hp === 0) {
        $arenas.appendChild(playerWins())
    }

})





/*const player1 = {
    player: 1,
    name: 'Skorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['cold'],
    attack(){
        console.log(`${this.name} fight`)
    }
}

const player2 = {
    player: 2,
    name: 'Liukang',
    hp: 85,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['muskules'],
    attack(){
        console.log(`${this.name} fight`)
    }
}*/