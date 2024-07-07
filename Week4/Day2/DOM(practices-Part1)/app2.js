//-------------DOM manipulation


//----------------Parent Node Traversal


// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentNode);

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

//------------child Node Traversal


// console.log(ul.childNodes)
// console.log(ul.lastChild)
// console.log(ul.firstChild)

// ul.childNodes[1].style.backgroundColor = 'blue';

// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

//-----------sibling Node traversal

let ul = document.querySelector('ul');
const div = document.querySelector('div');

console.log(div.childNodes);

console.log(ul.previousElementSibling)
console.log(ul.nextElementSibling)


