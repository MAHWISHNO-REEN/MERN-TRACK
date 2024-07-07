// // // // log statement using console.log()
// // // console.log('hello the world')

// // // //variables
// // // let age=20
// // // console.log(age)

// // // const salary =20000
// // // console.log(salary)

// // // // const product=0
// // // // product=2345
// // // // console.log(product)

// // // let sum =0
// // // sum=67
// // // console.log(sum)

// // //-------data types-------

// // const name="ayesha"
// // const fruit= "apple"
// // const channel ="crashcode"

// // const age=45
// // const price = 687.67

// // const isPN= true
// // const isNU= false

// // let vm 
// // console.log(vm)

// // const res = undefined

// // const  data = null

// // //--non-primitive--
// // const info= {
// //   firstname : "fatima",
// //   lastName : "zahra",
// //   age  : "23"
// // }
// // console.log(info.lastName)

// // const num = [5,6,7,1,3,4,6,7,8,9,0]
// // console.log(num[3])

// // let a= 'mah'
// // a = true
// // a = '12'

// // console.log(a)

// //------operators-------

// let x = 7
// let y = 3

// console.log(x % y)
// console.log(++x)
// console.log(--y)

// console.log(x>=y)

// const isvalid = x>5 || y>5
// console.log(isvalid)

// const isV = true
// console.log(!isV)

// console.log('ayesha '+'fatima')

// const isEven = 14%2 ===0 ? 'number is even ' : 'number is odd'
// console.log(isEven)

// //-------type conversion --------
//--implicit--
// console.log(true + ' 3')
// console.log('4' / '8')
// console.log('ayesha' - ' fatima')
// console.log('5' - false)
// console.log(5 + undefined)
//--explicit--
// console.log(Number(false))
// console.log(parseInt('5'))
// console.log(parseFloat('3.6'))
// console.log(String(true))
// console.log((200).toString())
// console.log(Boolean(10))//null undefined 0  '' NaN
//--------equality--------
// const var1 = 10
// const var2 = '10'
// // const var1 =null
// // const var2 = undefined
// console.log(var1 == var2)
// console.log(var1 === var2)

//---------conditional Statement-------
// const num = 0
// if (num>0) {
//   console.log("number is positive")
// }else if (num<0){
//   console.log("number is negative")
// }else {
//   console.log("number is zero")
// }

// const color = 0
// switch (color) {
//   case 'red':
//     console.log('color is red')
//     break
//   case 'blue':
//     console.log('color is blue')
//     break
//   case 'green':
//     console.log('color is green')
//     break
//   default:
//     console.log('color is not valid')
// }

//------looping code------
// for (let i=1; i<=5; i++) {
//   console.log('iteration number '+ i)
// }

// let i=1
// while (i<=5) {
//   console.log('itertion number ' + i)
//   i++
// }

// let i= 6
// do {
//   console.log('iteration number ' + i)
//   i++
// }while(i<=5)

// const array = [3,4,5,6,8,1,2]
// for ( const item of array) {
//   console.log('number of items ' + item)
// }
//----------functions-----------
//  function greet () {
//   console.log('good morning fatima ')
//  }
// function greet (username) {
//   console.log('good morning ' + username)
//  }
// function add (a,b ) {
//   return a+b
// }
// // const arrowsum = (a,b) => {
// // return a+b
// // }

// const arrowsum = (a,b) => a+b
// const addfive = num => num+5
// const sum = addfive(23)
// console.log(sum)
//--------scope -------
const num = 100
const myname = 'ayesha'
if (true) {
  const myname ='fatima'
  console.log(myname)
  console.log(num)
}
function test(){
  const myname ='fatima'
  console.log(myname)
  console.log(num)
}
test()

