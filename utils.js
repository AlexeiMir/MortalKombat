export function getRandom(num) {
    return Math.ceil(Math.random() * num);
}

export const normalize = (num) => (num.toString().length >1 ? num : `0${num}`)


export const createElement = (tag,tagName) => {
    const $tag = document.createElement(tag)
    if (tagName){
        $tag.classList.add(tagName)
    }
    return $tag

}

export const createReloadButton = () =>{
    const $createReloadButton = createElement('div', 'reloadWrap')
    const $reloadButton = createElement('button','button')
    $reloadButton.innerText = 'Reload'
    $createReloadButton.appendChild($reloadButton)
    $reloadButton.addEventListener('click', function(){
        window.location.reload()
    })
    return $createReloadButton
}



export function playerWins(name) {
    const $winTitle = createElement('div', 'loseTitle')
    if (name) {
        $winTitle.innerText = `${name} WIN`
    } else {
        $winTitle.innerText = 'DRAW'
    }
    
    return $winTitle
}