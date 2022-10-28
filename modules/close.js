export function close(btn, closebtn, array) {
    btn.style.display = 'block'
    closebtn.style.display = 'none'
    array.forEach(elem => {
        elem.classList.remove('block')
        elem.classList.add('item')
    })
}