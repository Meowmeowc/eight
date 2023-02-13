// let btn = document.querySelector('.btn')
// let elem = document.querySelector('.element')


// btn.onclick = () => {
// 	elem.classList.add('green')
// }

let btn = document.querySelector('.btn2')
let one = document.querySelector('.one')

btn.onclick = () => {
	one.classList.add('first', 'second', 'three')
	one.classList.remove('second')
}