const sentence = " javascript - это просто! "
console.log(sentence.trim().slice(0,1).toUpperCase() + sentence.trim().slice(1,24))

const group =  "21 ИСР"
const student = "Иванов Иван"
const middleGrade = "4.75"
console.log(`Студент ${student}, группа ${group}, средний балл: ${middleGrade}`)

const data = "2025-03-15"
console.log(`${data.slice(8, 10)}.${data.slice(5, 7)}.${data.slice(0, 4)}`)

const quote = "Node.js разработчик"
console.log(quote.startsWith("Node.js") + quote.endsWith("разработчик"))

const num = 42
console.log(String(num).padStart(8, "0"))

