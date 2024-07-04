
const product = cartObj();
console.log(product);

totalPrice = 0
let dostavka = 9000
let orders = []

for (const key in product) {
    const pk = product[key]
    totalPrice += pk.price + dostavka
    orders.push(`${key} ${pk.info}`);
}
console.log(`Your order: ${orders}, | with ordering ${totalPrice} cost delivery (${dostavka})`);