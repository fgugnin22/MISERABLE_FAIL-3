"use strict"
const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf-8').split('\n').map(line => line.trim()).filter(line => line !== "");
const matrix = lines.map(line => line.split(''))
const sloni = []
const ladi = []
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === "R") {
            ladi.push([i, j])
        }
        if (matrix[i][j] === "B") {
            sloni.push([i, j])
        }
    }
}
let sum = 64
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        let flag = false
        for (let s = 0; s < sloni.length; s++) {
            if (i - sloni[s][0] === j - sloni[s][1] || i - sloni[s][0] === sloni[s][1] - j) {
                sum--
                flag = true
                console.log(i, j)
                break
            }
        }
        if (flag) { continue }
        for (let l = 0; l < ladi.length; l++) {
            if (ladi[l][0] === i || ladi[l][1] === j) {
                sum--
                console.log(i, j)
                break
            }
        }

    }
}
fs.writeFileSync('output.txt', String(sum) + "\n")
