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

let totalBusket = {}
totalBusket.count = busket.length
totalBusket.costs = busketCost(busket)

// console.log(busketCost(busket))

function drawBusket(busketTotal) {
    const $mainDiv = document.getElementById('busket');
    const html = `<p> ${busketTotal.count == 0 ? 'Корзина пуста' : 'В корзине: ' + busketTotal.count + ' товаров на сумму ' + totalBusket.costs + ' рублей'} </p>`
    $mainDiv.insertAdjacentHTML('beforeend', html)
}
drawBusket(totalBusket)