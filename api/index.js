export class PlayerApi{
    constructor() {
    }
    getPlayers = () => {
        return fetch('https://spiffy-dodol-d40463.netlify.app/api/mk/players').then(res => res.json())
    }
    getRandomPlayer = () => {
        return fetch('https://spiffy-dodol-d40463.netlify.app/api/mk/player/choose').then(res => res.json())
    }
    postFight(hit, defence){
        const result = fetch('https://spiffy-dodol-d40463.netlify.app/api/mk/player/fight', {
            method: 'POST',
            body: JSON.stringify({
                hit,
                defence,
            })
        }).then(res => res.json())
        return result
    }
}