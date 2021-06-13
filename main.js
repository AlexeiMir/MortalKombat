const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')
const $formFight = document.querySelector('.control')
const $chat = document.querySelector('.chat')
const img1 =  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
const img2 = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
const weapon1 =  ['cold']
const weapon2 = ['muskules']

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

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


function createReloadButton(){
    const $createReloadButton = createElement('div', 'reloadWrap')
    const $reloadButton = createElement('button','button')
    $reloadButton.innerText = 'Reload'
    $createReloadButton.appendChild($reloadButton)
    $reloadButton.addEventListener('click', function(){
        window.location.reload()
    })
    return $createReloadButton
}



function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle')
    if (name) {
        $winTitle.innerText = `${name} WIN`
    } else {
        $winTitle.innerText = 'DRAW'
    }
    
    return $winTitle
}
function enemyAttack(){
    const hit = ATTACK[getRandom(3)-1]
    const defence = ATTACK[getRandom(3)-1]

    console.log('###:hit', hit)
    console.log('###:defence', defence)

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}


function playerAttack(){
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
function logText(type) {
    return logs[type][getRandom(logs[type].length)-1]
}

function generateLogs(type,player1,player2){
    let text = ''
    let date = new Date()
    const normalize = (num) => (num.toString().length >1 ? num : `0${num}`)
    let time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}:${normalize(date.getSeconds())}`
    switch (type) {
        case 'start':
            text = `${logs[type].replace('[time]',time).replace('[player1]', player1.name)
                .replace('[player2]', player2.name)}`
            console.log(text)
            break
        case 'end':
            text =`${logText(type).replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name)}`
            console.log(text)
            break
        case 'defence':
            text =`${time} - ${logText(type).replace('[playerKick]', player2.name)
                .replace('[playerDefence]', player1.name)}  
                ${100-player1.hp === 0 ? '' : ` - ${100-player1.hp} [${player1.hp}/100]` }`
            break
        case 'hit':
            text =`${time} - ${logText(type).replace('[playerKick]', player1.name)
                .replace('[playerDefence]', player2.name)}  
                ${100-player2.hp === 0 ? '' : ` - ${100-player2.hp} [${player2.hp}/100]` }`
            break
        case 'draw':
            text = `${time} - ${logText(type)}`
            break


    }

    const $el = `<p>${text}</p>`
    $chat.insertAdjacentHTML('afterbegin', $el)
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
        generateLogs('hit',player1,player2)
        generateLogs('defence',player1,player2)

    }
    if ( player.defence  !== enemy.hit){
        player1.changeHP(enemy.value)
        player1.renderHP()
        generateLogs('hit',player2,player1)
        generateLogs('defence',player2,player1)
    }

    showResult()

})



$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
generateLogs('start',player1,player2)



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