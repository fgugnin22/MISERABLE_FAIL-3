"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n');
const [n, k, d] = lines[0].split(' ').map(Number)
let current = n
let flag = false
if (n % k === 0) {
    fs.writeFileSync('output.txt', String(current) + '0'.repeat(d))
}
for (let i = 0; i < d; i++) {
    if (n % k === 0) {
        fs.writeFileSync('output.txt', String(current) + '0'.repeat(d))
        flag = true
        break
    }
    for (let j = 0; j < 10; j++) {
        if ((current * 10 + j) % k === 0) {
            current = current * 10 + j
            flag = true
            fs.writeFileSync('output.txt', String(current) + '0'.repeat(d - i - 1))
            break;
        }
    }
}
if (!flag) {
    fs.writeFileSync('output.txt', "-1")
}