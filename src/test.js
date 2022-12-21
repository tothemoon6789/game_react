const txt = "zis";
// i la case-insensitive
const regex = /[^is]/
console.log("-----regex.test(txt)-----");
console.log(regex.test(txt));
console.log("-----regex.exec(txt)-----");
console.log(regex.exec(txt));
console.log("-----txt.match(regex)-----");
console.log(txt.match(regex));
console.log("-----txt.search(regex)-----");
console.log(txt.search(regex));