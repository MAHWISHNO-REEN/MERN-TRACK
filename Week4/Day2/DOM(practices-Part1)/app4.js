//dom 

//event delegation
document.querySelector('#sports').addEventListener('click', function(e){

  console.log(e.target.getAttribute('id') + 'isclicked');

  const target = e.target;
  if (target.matches('li')) {
    target.style.backgroundColor = 'lightgray';
  }
})

const sports = document.querySelector('#sports');
const newsport =document.querySelector('li');

newsport.innerText = 'rufd';
newsport.setAttribute('id' , 'rufd');

sports.appendChild(newsport)