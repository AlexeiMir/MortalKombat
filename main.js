import {Game} from './game/index.js'


const game = new Game()

game.start()


// const createReloadButton = () =>{
//     const $createReloadButton = createElement('div', 'reloadWrap')
//     const $reloadButton = createElement('button','button')
//     $reloadButton.innerText = 'Reload'
//     $createReloadButton.appendChild($reloadButton)
//     $reloadButton.addEventListener('click', function(){
//         window.location.reload()
//     })
//     return $createReloadButton
// }



// export function playerWins(name) {
//     const $winTitle = createElement('div', 'loseTitle')
//     if (name) {
//         $winTitle.innerText = `${name} WIN`
//     } else {
//         $winTitle.innerText = 'DRAW'
//     }
    
//     return $winTitle
// }



// function showResult(){
//     if (player1.hp === 0 || player2.hp === 0) {
//         $randomButton.disabled = true
//         $arenas.appendChild(createReloadButton())

//     }
//     if (player1.hp === 0 && player1.hp < player2.hp ) {
//         $arenas.appendChild(playerWins(player2.name))
//         generateLogs('end',player2,player1)
//     } else if (player2.hp === 0 && player2.hp < player1.hp) {
//         $arenas.appendChild(playerWins(player1.name))
//         generateLogs('end',player1,player2)
//     } else if (player2.hp === 0 && player1.hp === 0) {
//         $arenas.appendChild(playerWins())
//         generateLogs('draw')
//     }
// }

// function getTextLogs(type,playerName1,playerName2){
//     switch (type) {
//         case 'start':
//             return LOGS[type]
//                 .replace('[time]',getTime())
//                 .replace('[player1]', playerName1)
//                 .replace('[player2]', playerName2)
            

//         case 'hit':
//             return LOGS[type][getRandom(LOGS[type].length-1)-1]
//                 .replace('[time]',getTime())
//                 .replace('[playerKick]', playerName1)
//                 .replace('[playerDefence]', playerName2)
            
//         case 'defence':
//             return LOGS[type][getRandom(LOGS[type].length-1)-1]
//                 .replace('[time]',getTime())
//                 .replace('[playerKick]', playerName1)
//                 .replace('[playerDefence]', playerName2)
            
//         case 'end':
//             return LOGS[type][getRandom(LOGS[type].length-1)-1]
//                 .replace('[time]',getTime())
//                 .replace('[playerWins]', playerName1)
//                 .replace('[playerLose]', playerName2)
            
//         case 'draw':
//             return LOGS[type]
            
//         default:
//             return `default`
            


//     }

// }

// function generateLogs(type,player1={},player2={}, valueAttack){
//     let text = getTextLogs(type,player1.name,player2.name)

//     switch (type) {
//         case 'hit':
//             text = `${getTime()} ${text} -${valueAttack} [${player2.hp}/100]`
//             break;
//         case 'defence':
//         case 'draw':
//         case 'end':
//             text = `${getTime()} ${text}`
//             break;
//     }


//     const $el = `<p>${text}</p>`
//     $chat.insertAdjacentHTML('afterbegin', $el)
// }

// const enemyAttack = () => {
//     const hit = ATTACK[getRandom(3)-1]
//     const defence = ATTACK[getRandom(3)-1]

//     console.log('###:hit', hit)
//     console.log('###:defence', defence)
//     console.log(getRandom(HIT[hit]));

//     return {
//         value: getRandom(HIT[hit]),
//         hit,
//         defence
//     }
// }

// $formFight.addEventListener('submit', function (e) {
//     e.preventDefault()
//     console.dir($formFight)
//     const {hit:enemyHit,defence:enemyDefence,value:enemyValue} = enemyAttack()
//     const {hit,defence,value} = playerAttack()
   


//     if (hit !== enemyDefence){
//         player2.changeHP(value)
//         player2.renderHP()
//         generateLogs('hit',player1,player2,value)
//     } else {
//         generateLogs('defence',player1,player2)
//     }
//     if ( defence  !== enemyHit){
//         player1.changeHP(enemyValue)
//         player1.renderHP()
//         generateLogs('hit',player2,player1,enemyValue)
//     } else {
//         generateLogs('defence',player2,player1)
//     }

//     showResult()

// })

// function init(){
//     player1.createPlayer()
//     player2.createPlayer()
//     generateLogs('start',player1,player2)
// }

// init()




