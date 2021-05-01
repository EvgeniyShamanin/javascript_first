const vitrina = document.createElement('DIV');
const upBlock = document.getElementById('shop');

vitrina.setAttribute('class', 'vitrina')

const $busket = document.createElement('DIV')
$busket.insertAdjacentHTML('afterbegin', '<h2>Busket</h2>')


function Product(name, value, price) {
    this.name = name
    this.value = value
    this.price = price
    this.total = value * price
}

let store = [];

store.push(new Product('bread', 2, 20))
store.push(new Product('beer', 20, 50))

function drawProductInStore(store) {
    vitrina.textContent = '';
    vitrina.insertAdjacentHTML('afterbegin', '<h2>Store</h2>')

    if (store.length > 0) {
        for (product in store) {
            drowStore(store[product], product)
        }
    }
    upBlock.append(vitrina)
}
drawProductInStore(store)
function busketCost(products) {
    return products.reduce(function (acc, product) {
        return acc + product.total
    }, 0)
}
function drawProductInBusket(busket) {
    $busket.textContent = '';
    $busket.insertAdjacentHTML('afterbegin', '<h2>Busket</h2>')
    if (busket.length > 0) {
        let summa = busketCost(busket)
        $busket.insertAdjacentHTML('afterbegin', `<h3>Products in busket ${summa}</h2>`)
        for (product in busket) {
            drawBusket(busket[product], product)
        }
    }
    upBlock.append($busket)
}

let busket = [];
drawProductInBusket(busket)

function drawBusket(product, id) {
    const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${product.name}</div>
        <div class="character">Product value: ${product.value}</div><div class="character">Product price: ${product.price}</div>
        <div class="character">Total costs: ${product.total}</div><button class="button button-del" data-id="${id}">delete</button></div></div>`
    $busket.insertAdjacentHTML('beforeend', $html)
}
function drowStore(product, id) {
    const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${product.name}</div>
        <div class="character">Product value: ${product.value}</div><div class="character">Product price: ${product.price}</div>
        <div class="character">Total costs: ${product.total}</div><button class="button button-buy" data-id="${id}">buy</button></div></div>`
    vitrina.insertAdjacentHTML('beforeend', $html)
}



function actionToProduct(e) {
    console.log(e, e.target)
    if (e.target.classList[1] == 'button-buy') {
        busket.push(store[e.target.dataset.id])
        store.splice(e.target.dataset.id, 1)
        drawProductInStore(store)
        drawProductInBusket(busket)
    }
    else if (e.target.classList[1] == 'button-del') {
        store.push(busket[e.target.dataset.id])
        busket.splice(e.target.dataset.id, 1)
        drawProductInStore(store)
        drawProductInBusket(busket)
    }
}
upBlock.addEventListener('click', actionToProduct)
