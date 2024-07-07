//DOM Manipulation

//Event Listeners

//element.addEventListner("click",function)
const buttontwo =document.querySelector('.btn-2');

function alertbtn () {
  alert('i love javascript')
};

buttontwo.addEventListener("click", alertbtn)

//mouseover

const newbackgroundcolor = document.querySelector('.box-3');

function changecolor() {
  newbackgroundcolor.style.backgroundColor = 'blue';
}

newbackgroundcolor.addEventListener("mouseover", changecolor)