//------------DOM manipulation
//----------styling Elements

// const title = document.querySelector('#main-heading')
// title.style.color = 'red'

// console.log(title)

// const listitems = document.querySelectorAll('list-items');

// for (i = 0; i<listitems.length; i++) {
//   listitems[i].style.fontSize = '5rem';
// }
//------------Creating Elements

const ul = document.querySelector('ul');
const li = document.createElement('li');
//adding elements
ul.append(li)

//------------modify the text

// const firstlistitem = document.querySelector('.list-items');

// console.log(firstlistitem.innerText);
// console.log(firstlistitem.textContent);
// console.log(firstlistitem.innerHTML);
// console.log(firstlistitem.innerText);
// console.log(firstlistitem.innerText);

li.innerText = 'X-men';

//--------------modify attributes & classes

// li.setAttribute('id','main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));

li.classList.add('list-items')

console.log(li.classList.contains('list-items'));

li.remove();
// //------------GetElementById()

// // const title = document.getElementById('main-heading');
// // console.log(title);

// //-----------GetElementByClassName()
// // const listitem = document.getElementsByClassName('list-items');
// // console.log(listitem)

// //------------GetElementByTagName()

// // const listitem = document.getElementsByTagName('list-items');
// // console.log(listitem)
// //------------querySelector()

// // const conatainer =  document.querySelector('div')
// // console.log(conatainer)

// //-------------querySelectorAll()
// const conatainer =  document.querySelectorAll('div')
// console.log(conatainer)

