import { click } from "./modules/click.js"
import { close } from "./modules/close.js"
import { reload } from "./modules/reload.js"
axios.get("http://localhost:7777/cars").then(res => reload(res.data, first, second, third))
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let firstbtn = document.querySelector('.firstbtn')
let closebtn = document.querySelector('.firstclose')
let secondbtn = document.querySelector('.secondbtn')
let closebtn2 = document.querySelector('.secondclose')
let thirdbtn = document.querySelector('.thirdbtn')
let closebtn3 = document.querySelector('.thirdclose')
let item = 4
let item2 = 4
let item3 = 4
firstbtn.onclick = () => {
    item += 12
    const array = Array.from(document.querySelector('.first').children)
    const visItems = array.slice(0, item)
    click(item, array, visItems, firstbtn, closebtn)
}
closebtn.onclick = () => {
    const array = Array.from(document.querySelector('.first').children)
    close(firstbtn, closebtn, array)
    item = 4
}
secondbtn.onclick = () => {
    item2 += 12
    const array = Array.from(document.querySelector('.second').children)
    const visItems = array.slice(0, item2)
    click(item2, array, visItems, secondbtn, closebtn2)
}
closebtn2.onclick = () => {
    const array = Array.from(document.querySelector('.second').children)
    close(secondbtn, closebtn2, array)
    item2 = 4
}
thirdbtn.onclick = () => {
    item3 += 12
    const array = Array.from(document.querySelector('.third').children)
    const visItems = array.slice(0, item3)
    click(item3, array, visItems, thirdbtn, closebtn3)
}
closebtn3.onclick = () => {
    const array = Array.from(document.querySelector('.third').children)
    close(thirdbtn, closebtn3, array)
    item3 = 4
}