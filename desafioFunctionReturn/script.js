/* programa que soma o total de um carrinho de compras
e todos os itens acima de 30 reais ele dá um desconto de 10%*/
const cart = [10, 244, 99, 2, 20, 33, 250]

let finalValue = 0
let finalValueDiscount = 0

function calculateDiscount(price, discount){
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    finalValue += value
});

cart.forEach(value => {
    if(value > 30){
        const discount = calculateDiscount(value, 10)
        finalValueDiscount = finalValueDiscount + (value - discount)
    }else finalValueDiscount += value
});

totalDiscount = finalValue - finalValueDiscount

console.log(`Você gastou um total de ${finalValue} e o total com desconto ficou em ${finalValueDiscount}, você economizou um total de ${totalDiscount.toFixed(2)}`)