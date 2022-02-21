//object property shorthand 

const name = 'Smriti'
const userAge = 22
/*
const user = {
    name:name,
    age:userAge,
    location :'varanasi'
}
*/

const user = {
    name,  //name:name = name
    age:userAge,
    location: 'varanasi'
}

console.log(user)

//object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice : undefined,
    rating : 4
}

//const label = product.label
//const stock = product.stack
/*
const {label:productLabel, stock,rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)
*/

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type,label, stock)
}

//transaction('order', product)
transaction('order') //destructuring empty object

