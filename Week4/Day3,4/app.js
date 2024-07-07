//----------functions-----------
 function greet () {
  console.log('good morning fatima ')
 }
function greet (username) {
  console.log('good morning ' + username)
 }
function add (a,b ) {
  return a+b
}
// const arrowsum = (a,b) => {
// return a+b
// }

const arrowsum = (a,b) => a+b
const addfive = num => num+5
const sum = addfive(23)
console.log(sum)