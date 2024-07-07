// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote: ' "I am the production manager here. I also am doing some costumes. I am working as a carpenter as well, helping (Beaman) focus lights whenever we need to."',
  person: 'Caroline Arana'
},{
  quote:'"I am the technical director, scenic designer, sometimes lighting designer, and I do a lot of everything"',
  person:'Claire Beaman'
},{
  quote: ' "I am the production manager here. I also am doing some costumes. I am working as a carpenter as well, helping (Beaman) focus lights whenever we need to."',
  person: 'Caroline Arana'
},{
  quote:'"I am the technical director, scenic designer, sometimes lighting designer, and I do a lot of everything"',
  person:'Claire Beaman'
},{
    quote: ' "I am the production manager here. I also am doing some costumes. I am working as a carpenter as well, helping (Beaman) focus lights whenever we need to."',
    person: 'Caroline Arana'
},];

btn.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})
