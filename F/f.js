"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
const arr = lines[1].split(' ').map((v) => Math.abs(Number(v)))
let answer = ""
let prevOst = arr[0] % 2;
// console.log(prevOst)
for (let i = 1; i < arr.length; ++i) {
    // console.log(prevOst, arr[i])
    if (prevOst === 0 && arr[i] % 2 === 1 || prevOst === 1 && arr[i] % 2 === 0) {
        // console.log(1)
        answer += "+";
        prevOst = 1;
    } else if (prevOst === 1 && arr[i] % 2 === 1) {
        // console.log(2)
        answer += "x";
        prevOst = 1;
    } else {
        // console.log(3)
        prevOst = 0;
        answer += '+'
    }
}
fs.writeFileSync('output.txt', answer)
