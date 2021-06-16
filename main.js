import { createElement, createReloadButton,playerWins}  from './utils.js'
import {player1,player2} from './player.js'
import {generateLogs} from './logs.js'
import {enemyAttack, playerAttack} from './attack.js'

const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')
const $formFight = document.querySelector('.control')




const createPlayer = ({player,hp,name,img}) => {
    const $player = createElement('div','player' + player)
    const $progressbar = createElement('div','progressbar')
    const $character = createElement('div','character')
    const $life = createElement('div','life')
    const $name = createElement('div','name')
    const $img = createElement('img')

    $life.style.width = hp + '%'

    $name.innerText = name
    $img.src = img

    $player.appendChild($progressbar)
    $player.appendChild($character)
    $character.appendChild($img)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    return $player

}




function showResult(){
    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true
        $arenas.appendChild(createReloadButton())

    }
    if (player1.hp === 0 && player1.hp < player2.hp ) {
        $arenas.appendChild(playerWins(player2.name))
        generateLogs('end',player2,player1)
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWins(player1.name))
        generateLogs('end',player1,player2)
    } else if (player2.hp === 0 && player1.hp === 0) {
        $arenas.appendChild(playerWins())
        generateLogs('draw')
    }
}



$formFight.addEventListener('submit', function (e) {
    e.preventDefault()
    console.dir($formFight)
    const enemy = enemyAttack()
    const player = playerAttack()


    console.log('###: a',player)
    console.log('###: enemy',enemy)

    if (player.hit !== enemy.defence){
        player2.changeHP(player.value)
        player2.renderHP()
        generateLogs('hit',player1,player2,player.value)
    } else {
        generateLogs('defence',player1,player2)
    }
    if ( player.defence  !== enemy.hit){
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit',player2,player1,enemy.value)
    } else {
        generateLogs('defence',player2,player1)
    }

    showResult()

})


$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
window.onload = generateLogs('start',player1,player2)




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