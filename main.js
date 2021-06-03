
const Scorpion = {
    name: 'Skorpion',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['cold'],
    attack(){
        console.log(`${this.name} fight`)
    }
}

const Blade = {
    name: 'Blade',
    hp: 15,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['muskules'],
    attack(){
        console.log(`${this.name} fight`)
    }
}

function createPlayer(playerNumber, Fighter) {
    const $arenas = document.querySelector('.arenas')
    const $player1 = document.createElement('div')
    $player1.classList.add(`${playerNumber}`)
    const $progressbar = document.createElement('div')
    $player1.classList.add('progressbar')
    const $character = document.createElement('div')
    $player1.classList.add('character')
    $player1.appendChild($progressbar)
    $player1.appendChild($character)
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.innerText = `${Fighter.hp}`
    $life.style.width = '50%'
    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText = `${Fighter.name}`
    const $img = document.createElement('img')
    $img.src = Fighter.img
    $character.appendChild($img)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $arenas.appendChild($player1)

}
createPlayer('player1', Scorpion);
createPlayer('player2', Blade);