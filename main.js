// 1-mashq
let n = 123;
console.log(n.toString());
// 2-mashq
let s = "hello";
console.log(s.toUpperCase());
// 3-mashq
let arr = [-1,2,-3,4];
console.log(arr.filter(x=>x>0));
// 4-mashq
let a = [1,2], b = [1,2];
console.log(JSON.stringify(a) === JSON.stringify(b));
// 5-mashq
let arr = Array.from({length:5}, () => Math.floor(Math.random()*10));
console.log(arr);
