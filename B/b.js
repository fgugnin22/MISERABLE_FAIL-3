"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
const [t1m1, t2m1] = lines[0].split(':').map(x => Number(x));
const [t1m2, t2m2] = lines[1].split(':').map(x => Number(x));
const doma = Number(lines[2])
let answer = -1;
answer = t2m1 - t1m1 + t2m2 - t1m2
if (doma === 1) {
    if (t2m1 >= t1m2 + answer) {
        answer++
    }
} else {
    if (t2m2 >= t1m1) {
        answer++
    }
}
fs.writeFileSync("output.txt", String(Math.max(0, answer)))