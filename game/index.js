import { createElement,getTime,getRandom}  from '../utils/index.js'
import {Player} from '../player/index.js'
import {HIT, ATTACK, LOGS} from '../constants/index.js'

const $randomButton = document.querySelector('.button')
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')
const $arenas = document.querySelector('.arenas')

const player1 = new Player({
    player: 1,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    player: 1,
    rootSelector: 'arenas'
})

const player2 = new Player({
    player: 2,
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    player: 2,
    rootSelector: 'arenas'
})


export class Game{
    constructor(){

    }

    createReloadButton = () =>{
        const $createReloadButton = createElement('div', 'reloadWrap')
        const $reloadButton = createElement('button','button')
        $reloadButton.innerText = 'Reload'
        $createReloadButton.appendChild($reloadButton)
        $reloadButton.addEventListener('click', function(){
            window.location.reload()
        })
        return $createReloadButton
    }
    playerWins = (name) => {
        const $winTitle = createElement('div', 'loseTitle')
        if (name) {
            $winTitle.innerText = `${name} WIN`
        } else {
            $winTitle.innerText = 'DRAW'
        }
        
        return $winTitle
    }
    showResult = () => {
        if (player1.hp === 0 || player2.hp === 0) {
            $randomButton.disabled = true
            $arenas.appendChild(this.createReloadButton())
    
        }
        if (player1.hp === 0 && player1.hp < player2.hp ) {
            $arenas.appendChild(this.playerWins(player2.name))
            this.generateLogs('end',player2,player1)
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(this.playerWins(player1.name))
            this.generateLogs('end',player1,player2)
        } else if (player2.hp === 0 && player1.hp === 0) {
            $arenas.appendChild(this.playerWins())
            this.generateLogs('draw')
        }
    }
    getTextLogs = (type,playerName1,playerName2) => {
        switch (type) {
            case 'start':
                return LOGS[type]
                    .replace('[time]',getTime())
                    .replace('[player1]', playerName1)
                    .replace('[player2]', playerName2)
                
    
            case 'hit':
                return LOGS[type][getRandom(LOGS[type].length-1)-1]
                    .replace('[time]',getTime())
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2)
                
            case 'defence':
                return LOGS[type][getRandom(LOGS[type].length-1)-1]
                    .replace('[time]',getTime())
                    .replace('[playerKick]', playerName1)
                    .replace('[playerDefence]', playerName2)
                
            case 'end':
                return LOGS[type][getRandom(LOGS[type].length-1)-1]
                    .replace('[time]',getTime())
                    .replace('[playerWins]', playerName1)
                    .replace('[playerLose]', playerName2)
                
            case 'draw':
                return LOGS[type]
                
            default:
                return `default`
                
        }
    
    }
    generateLogs = function(type,player1={},player2={}, valueAttack){
        let text = this.getTextLogs(type,player1.name,player2.name)
    
        switch (type) {
            case 'hit':
                text = `${getTime()} ${text} -${valueAttack} [${player2.hp}/100]`
                break;
            case 'defence':
            case 'draw':
            case 'end':
                text = `${getTime()} ${text}`
                break;
        }
    
    
        const $el = `<p>${text}</p>`
        $chat.insertAdjacentHTML('afterbegin', $el)
    }

    playerAttack = () => {
        const attack = {}
        for (let item of $formFight) {
            if (item.checked && item.name === 'hit'){
                attack.value = getRandom(HIT[item.value])
                attack.hit = item.value
            }
            if (item.checked && item.name === 'defence'){
                attack.defence = item.value
            }
            item.checked = false
        }
        return attack
    }

    enemyAttack = () => {
        const hit = ATTACK[getRandom(3)-1]
        const defence = ATTACK[getRandom(3)-1]
    
        console.log('###:hit', hit)
        console.log('###:defence', defence)
        console.log(getRandom(HIT[hit]));
    
        return {
            value: getRandom(HIT[hit]),
            hit,
            defence
        }
    }
    
    
    
    start = () => {
        player1.createPlayer()
        player2.createPlayer()
        this.generateLogs('start',player1,player2)

         

        $formFight.addEventListener('submit', (e) => {
            e.preventDefault()
            console.dir($formFight)
            const {hit,defence,value} = this.playerAttack()
            const {hit:enemyHit,defence:enemyDefence,value:enemyValue} = this.enemyAttack()
            
        
            if (hit !== enemyDefence){
                player2.changeHP(value)
                player2.renderHP()
                this.generateLogs('hit',player1,player2,value)
            } else {
                this.generateLogs('defence',player1,player2)
            }
            if ( defence  !== enemyHit){
                player1.changeHP(enemyValue)
                player1.renderHP()
                this.generateLogs('hit',player2,player1,enemyValue)
            } else {
                this.generateLogs('defence',player2,player1)
            }
        
            this.showResult()
        
        })
    }
}