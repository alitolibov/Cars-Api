export function click(item, array, visItems, btn, closebtn) {
    visItems.forEach(elem => {
        elem.classList.remove('item')
        elem.classList.add('block')
    })
    if(item >= array.length) {
        btn.style.display = 'none'
        closebtn.style.display = 'block'
    }
}