const vitrina = document.createElement('DIV');
const upBlock = document.getElementById('shop');
vitrina.insertAdjacentHTML('afterbegin', '<h2>Store</h2>')
vitrina.setAttribute('class', 'vitrina')


function Product(name, value, price) {
    this.name = name
    this.value = value
    this.price = price
    this.total = value * price
}

let store = [];

store.push(new Product('bread', 2, 20))
store.push(new Product('beer', 20, 50))

function drawStore(store) {
    if (store.length > 0) {
        for (product in store) {
            const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${store[product].name}</div>
            <div class="character">Product value: ${store[product].value}</div><div class="character">Product price: ${store[product].price}</div>
            <div class="character">Total costs: ${store[product].total}</div><button class="button button-buy" data-id="${product}">buy</button></div></div>`
            vitrina.insertAdjacentHTML('beforeend', $html)
        }
        upBlock.append(vitrina)
    }
}
drawStore(store)


// $btnBuy.addEventListener('click', (e) => { console.log(e) })


let busket = [];

// busket.push(new Product('bread', 2, 20))
// busket.push(new Product('beer', 20, 50))

const $busket = document.createElement('DIV')
$busket.insertAdjacentHTML('afterbegin', '<h2>Busket</h2>')
function drawBusket(product, id) {
    // for (product in busket) {
    //     const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${store[product].name}</div>
    //     <div class="character">Product value: ${store[product].value}</div><div class="character">Product price: ${store[product].price}</div>
    //     <div class="character">Total costs: ${store[product].total}</div><button class="button button-del" data-id="${product}">delete</button></div></div>`
    //     $busket.insertAdjacentHTML('beforeend', $html)
    // }
    const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${product.name}</div>
        <div class="character">Product value: ${product.value}</div><div class="character">Product price: ${product.price}</div>
        <div class="character">Total costs: ${product.total}</div><button class="button button-del" data-id="${id}">delete</button></div></div>`
    $busket.insertAdjacentHTML('beforeend', $html)
}
function delFromBusket(product, id) {
    const $html = `<div class="product"><div class="product-info"><div class="character">Product name: ${product.name}</div>
        <div class="character">Product value: ${product.value}</div><div class="character">Product price: ${product.price}</div>
        <div class="character">Total costs: ${product.total}</div><button class="button button-buy" data-id="${id}">buy</button></div></div>`
    vitrina.insertAdjacentHTML('beforeend', $html)
}



function actionToProduct(e) {
    console.log(e, e.target)
    if (e.target.classList[1] == 'button-buy') {
        console.log(e.target.dataset.id)
        busket.push(store[e.target.dataset.id])
        store.splice(e.target.dataset.id, 1)
        console.log(busket)
        console.log(store)
        drawBusket(store[e.target.dataset.id], e.target.dataset.id)
        drawStore(store)
        upBlock.append($busket)
    }
    else if (e.target.classList[1] == 'button-del') {
        delFromBusket(busket[e.target.dataset.id], e.target.dataset.id)
        upBlock.append(vitrina)


    }


}
upBlock.addEventListener('click', actionToProduct)
