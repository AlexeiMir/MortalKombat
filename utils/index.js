export const getRandom = (num) => {
    return Math.ceil(Math.random() * num);
}


export const createElement = (tag,tagName) => {
    const $tag = document.createElement(tag)
    if (tagName){
        $tag.classList.add(tagName)
    }
    return $tag

}

export const getTime = () => {
    const date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`

}

