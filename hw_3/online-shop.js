class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(status) {
        this.available = status;
    }
}

class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        const forSaleList = this.#goods.filter(good => this.filter.test(good.name));
        
        if (!this.sortPrice) {
            return forSaleList;
        }

        if (this.sortDir) {
            return forSaleList.sort((a, b) => (a.price - b.price));
        }
        return forSaleList.sort((a, b) => (b.price - a.price));
    }

    add(newGood) {
        this.#goods.push(newGood);
    }

    remove(id) {
        const getIndex = this.#goods.findIndex(good => good.id === id);
        if (getIndex != undefined) {
            this.#goods.splice(getIndex, 1);
        }
        return getIndex;
    }
}

class BasketGood extends Good {
    constructor(id, name, description, sizes, price, available, amount) {
        super(id, name, description, sizes, price, available);
        this.amount = amount;
    }
}

class Basket {
    constructor() {
        this.goods = [];
    }
    get totalSum () {
        let total = this.goods.reduce(function(totalSum, good) {
            return totalSum + good.amount * good.price;
          }, 0);

        return total
    }

    get totalAmount () {
        let result = this.goods.reduce(function(totalAmount, good) {
            return totalAmount + good.amount
        }, 0);

        return result
        }
    
    add(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            this.goods[index].amount += amount;
        } else {
            let addGood = new BasketGood(good.id, good.name, good.description, good.sizes, good.price, good.available, amount);
            this.goods.push(addGood);
        }
    }

    remove(good, amount) {
        let index = this.goods.findIndex(value => value.id === good.id);
        if (index >= 0) {
            if (this.goods[index].amount - amount <= 0 || amount === 0) {
                this.goods.splice(index, 1);
            } else {
                this.goods[index].amount -= amount;
            }
        } 
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods.filter(item => item.available === false).forEach(value => this.remove(value));
    }

}



const good1 = new Good(1, "Shirt", "color: red, material: coton", ["S", "M", "XL"], 3500, true);
const good2 = new Good(2, "Boots", "color: black, material: leather", ["39", "40", "42"], 15000, true);
const good3 = new Good(3, "Turtleneck", "color: black, material: coton", ["S", "M", "L"], 3000, true);
const good4 = new Good(4, "Pants", "color: blue, material: coton", ["M", "L", "XL"], 5000, true);
const good5 = new Good(5, "Pants", "color: grey, material: coton", ["M", "L"], 4600, true);

// good1.setAvailable(false);

// console.log(good1)

const catalog = new GoodsList(/Pants/i, true, false);

catalog.add(good1);
catalog.add(good2);
catalog.add(good3);
catalog.add(good4);
catalog.add(good5);

// console.log("Selected goods from catalog: ", catalog.list);

catalog.sortPrice = true;
catalog.sortDir = false;

// console.log("Sorted by price in descending order: ", catalog.list);

catalog.remove(2);
// console.log("Removing item from catalog:", catalog.list);

const basket = new Basket();

basket.add(good1, 5);
basket.add(good2, 4);
basket.add(good3, 3);
basket.add(good4, 3);
basket.add(good5, 8);

console.log(`Total items in cart: ${basket.totalAmount}`);
console.log(`Total sum for ${basket.totalAmount} items in a cart is: $${basket.totalSum}`);

basket.remove(good2, 3);
basket.remove(good3, 4);

// console.log(basket.goods)

basket.removeUnavailable();

// console.log(basket.goods)

basket.clear();

console.log(basket.goods)