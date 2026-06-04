// const book = {
//     title: 'Мастер и Маргарита', author: 'Булгаков М.А.', year: '1967', pages: '480 стр.', available: true, rating: 0,
//     info() {
//         return `"${this.title}", ${this.author}, ${this.year}, ${this.pages}`
//     }
// }
// console.log(book.info())
// console.log(book.title, ',', book.author, ',', book.rating)

const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
// console.log(students.filter(el => el.passed).map(el => el.name))
// console.log(students.find(el => el.grade >= 4.5).name)
// console.log(students.reduce((acc, el) => acc + el.grade, 0).toFixed(1)/5)

// const u1 = { name: "Иван", age: 20, city: "Казань" }
// const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }
// function mergeUsers(user1, user2){
//   return {...user1, ...user2}
// }
// console.log(mergeUsers(u1, u2))

function countByField(arr, field){
  const nT = arr.filter(el => el[field]).length
  const nF = arr.filter(el => el[field] === false).length
  return `True : ${nT}; False : ${nF}`
}
console.log(countByField(students, 'passed'))