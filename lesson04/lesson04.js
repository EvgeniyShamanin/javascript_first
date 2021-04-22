//task 1
function getStringNumber(numb) {
    stringNumber = {}
    if (numb <= 999 && numb >= 0) {
        stringNumber['сотни'] = Math.floor(numb / 100)
        stringNumber['десятки'] = (Math.floor(numb / 10) > 10 ? Math.floor(numb / 10 - stringNumber['сотни'] * 10) : Math.floor(numb / 10))
        stringNumber['единицы'] = Number(String(numb).split('')[String(numb).length - 1])
    } else {
        console.log('wrong number')
    }
    return stringNumber
}

console.log(getStringNumber(992))

//task 2

function Product(name, value, price) {
    this.name = name
    this.value = value
    this.price = price
    this.total = value * price
}

let busket = [];

busket.push(new Product('bread', 2, 20))
busket.push(new Product('beer', 20, 50))

function busketCost(products) {
    return products.reduce(function (acc, product) {
        return acc + product.total
    }, 0)
}

console.log(busketCost(busket))




