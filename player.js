export const player1 = {
    player: 1,
    name: 'Skorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['cold'],
    changeHP,
    elHP,
    renderHP
}

export const player2 = {
    player: 2,
    name: 'Liukang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['muskules'],
    changeHP,
    elHP,
    renderHP
    }

    function changeHP(num) {
        this.hp -= num;

        if (this.hp <= 0) {
            this.hp = 0;
        }
        console.log(`${this.name}:${this.hp}`);

    }

    function elHP() {
        const $el = document.querySelector(`.player${this.player} .life`);
        return $el;
    }

    function renderHP() {
        this.elHP().style.width = this.hp + '%';
    }



// const img1 =  'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif'
// const img2 = 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif'
// const weapon1 =  ['cold']
// const weapon2 = ['muskules']

// class Figther {
//     constructor(number, name, width, img, weapon) {
//         this.player = number;
//         this.name = name;
//         this.hp = width;
//         this.img = img;
//         this.weapon = weapon;
//     }
//     attack() {
//         console.log(`${this.name} fight`);
//     }

//     changeHP(num) {
//         this.hp -= num;

//         if (this.hp <= 0) {
//             this.hp = 0;
//         }
//         console.log(`${this.name}:${this.hp}`);

//     }

//     elHP() {
//         const $el = document.querySelector(`.player${this.player} .life`);
//         return $el;
//     }

//     renderHP() {
//         this.elHP().style.width = this.hp + '%';
//     }

// }

// export const player1 = new Figther(1,'Skorpion',100,img1,weapon1)
// export const player2 = new Figther(2,'Liukang',100,img2,weapon2)

