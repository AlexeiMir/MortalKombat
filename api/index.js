export class PlayerApi{
    constructor() {
    }
    getPlayers = () => {
        return fetch('https://boiling-atoll-44568.herokuapp.com/api/mk/players').then(res => res.json())
    }
    getRandomPlayer = () => {
        return fetch('https://boiling-atoll-44568.herokuapp.com/api/mk/player/choose').then(res => res.json())
    }
    postFight(hit, defence){
        const result = fetch('https://boiling-atoll-44568.herokuapp.com/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit,
                defence,
            })
        }).then(res => res.json())
        return result
    }
}