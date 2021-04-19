//task 1
let i = 0;
let array_number = [];

function findSampleNumber(numb) {
    if(numb % 2 == 0){
        return false
    }
    else if(numb % 3 == 0){
        return false
    }
    else if(numb % 5 == 0){
        return false
    }
    else if(numb % 7 == 0){
        return false
    }
    else {
        return true
    }
}

while (i <= 5){
    if(i === 2 || i === 3 || i === 5 || i === 7){
        array_number.push(i)
    }
    let value = findSampleNumber(i);
    if(value){
        array_number.push(i)
    }
    i++
}

console.log(array_number);


//task 2

let product = {
    name: String,
    value: Number,
    price: Number
};
let busket = [product];

function countBasketPrice(busket) {
    let totalPrice = 0;
    busket.forEach((item) => {
        totalPrice = totalPrice + item.value*item.price
    });
    return totalPrice
}

busket = [
    {name: 'bread', value: 1, price: 30}, {name: 'beer', value: 20, price: 60}
];
console.log(countBasketPrice(busket));


// task 5

let a = 1;
let b = 'x';
console.log(b);
while(a !== 20){
    b = b + 'x';
    console.log(b);
    a++
}

