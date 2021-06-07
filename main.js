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

function changeHP(player){
    const $playerLife = document.querySelector(`.player${player.player} .life`)
    player.hp -= Math.ceil(Math.random()*20)
    console.log(`${player.name} : ${player.hp}`)
    $playerLife.style.width = player.hp + '%'

    if (player.hp <= 0){
        $playerLife.style.width = '0%'

    }

}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = `${name} lose`
    return $loseTitle
}
function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = `${name} win`
    return $loseTitle
}

function whoWin(player1, player2){
    if (player1.hp <= 0 || player2.hp <=0) {
        if (player1.hp > player2.hp) {
            $arenas.appendChild(playerWin(player1.name))
            $randomButton.disabled = true
        } else if (player1.hp < player2.hp) {
            $arenas.appendChild(playerWin(player2.name))
            $randomButton.disabled = true
        } else {
            $arenas.appendChild(playerWin('Nobody'))
            $randomButton.disabled = true
        }
    }
}


$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))

$randomButton.addEventListener('click', function () {
    changeHP(player1)
    changeHP(player2)
    whoWin(player1, player2)

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