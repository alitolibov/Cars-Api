function createItem(item) {
    return  `
    <div class="item" id="${item.id}">
        <p class="namecar">${item.model}</p>
        <p class="dsc">${item.make} ${item.year}</p>
        <button class="buttons">Подробнее</button>
    </div>
    `
}
export function reload(arr, first, second, third) {
    for(let item of arr) {
        if(item.year > 2015) {
            first.innerHTML += createItem(item)
        } else if(item.year > 2000) {
            second.innerHTML += createItem(item)
        } else {
            third.innerHTML += createItem(item)
        }
    }
}