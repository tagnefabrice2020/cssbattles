let body = document.querySelector('.body')
let element = document.querySelector('.static__div')


// initial box position
let BoxPosition = () => {
    let rect = element.getBoundingClientRect()
    return {x: rect.left, y: rect.top}
}

let position = BoxPosition()
console.log(position.x, position.y)

// box width and height
let box = () => {
    let rect = body.getBoundingClientRect()
    return {width: rect.width, height: rect.height}
}

let b = box()
let boxWidth = b.width
let boxHeight = b.height


let moveBox = (x,y) => {
    if(x >= 25 && x <= boxWidth - 25) {
        element.style.marginLeft = x - 25 + 'px'
    } 
    if ( y >= 25 && y <= boxHeight - 25) {
        element.style.marginTop = y - 25 + 'px'
    }
}

body.onmousemove = (e) => {
    moveBox(e.clientX, e.clientY)
}
