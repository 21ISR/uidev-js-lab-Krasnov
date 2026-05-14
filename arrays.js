// const ar_num = [4, 5, 3, 5, 2, 4, 5, 3]
// console.log((ar_num.reduce((acc, el) => acc + el, 0)/ar_num.length).toFixed(2))
// console.log(ar_num.filter(n => n > 3).map(n => `Оценка: ${n}`))

// const ar_fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"]
// console.log(ar_fruits.sort().join(", "))

const ar_products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
console.log(ar_products.filter(el => el.price < 10000))
console.log(ar_products.map(n => n.name))
console.log(ar_products.reduce((acc, el) => acc + el, 0))