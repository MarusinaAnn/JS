const goods = {
    1 : {
        id: 1,
        name: "Футболка желтая",
        description: "Состав: хлопок 100 %",
        sizes: ["XS", "S", "L"],
        price: 2300,
        available: true,
    },
    2 : {
        id: 2,
        name: "Брюки классические женские",
        description: "Хлопок - 98%, Эластан - 2%",
        sizes: ["L", "XL"],
        price: 5600,
        available: true
    },
    3 : {
        id: 3,
        name: "Шарф шерстяной",
        description: "Шерсть 100 %",
        sizes: ["one size"],
        price: 1800,
        available: true
    },
    4 : {
        id: 4,
        name: "Поло",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 4300,
        available: false
    },
    5 : {
        id: 5,
        name: "Шорты",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 3900,
        available: false
    },
}

const basket = [
    {
        good: 1,
        amount: 1,
    },
    {
        good: 2,
        amount: 3,
    },
    {
        good: 3,
        amount: 5,
    },
]

// Реализуйте функции добавления товара в корзину
function addOneGood(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}

// Функция удаления одного товара из корзины
function delOneGood(good) {
    basket.splice(good, 1); 
    return basket
}

// Функция полной очистки корзины
function clearBasket() {
    basket.splice(0, basket.length); 
    return basket
}

// totalAmount    Общее количество товаров в корзине
// totalSumm      Общая стоимость товаров в корзине

function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let goodPosition = 0; goodPosition < basket.length; goodPosition++) {

        totalSumm = totalSumm + basket[goodPosition].amount * goods[basket[goodPosition].good].price 

        totalAmount = totalAmount + basket[goodPosition].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}