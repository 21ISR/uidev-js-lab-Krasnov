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
console.log(students.filter(el => el.passed = true).map())